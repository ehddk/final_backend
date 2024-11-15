import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseOrderItem } from "@/api/orderItems/model/orderItem.schema";
import { OrderItemRepository } from "@/api/orderItems/repository/orderItem.repository";
import { MongooseOrder } from "@/api/orders/model/order.schema";
import { MongooseProduct } from "@/api/products/model/product.schema";

export class MongooseOrderItemRepository implements OrderItemRepository {
  async save(
    orderId: string,
    orderItem: Omit<IOrderItem, "id">
  ): Promise<IOrderItem> {
    // Order를 찾아 유효성 검증
    const order = await MongooseOrder.findById(orderId);
    if (!order) {
      throw new Error(`Order with id ${orderId} not found`);
    }

    const productId = orderItem.product.id || orderItem.product;
    const product = await MongooseProduct.findById(productId);
    if (!product) {
      throw new Error(`Cart with id ${productId} not found`);
    }

    const newOrderItem = new MongooseOrderItem({
      ...orderItem,
      orderId: order._id,
      product: product,
    });

    await newOrderItem.save();

    return newOrderItem;
  }
  async findAll(): Promise<IOrderItem[]> {
    
    return await MongooseOrderItem.find().populate("product");
  }
  async findById(id: string): Promise<IOrderItem | null> {
    try {
    const orderItem = await MongooseOrderItem.findById(id)
    .populate({ path: "product" })
    .exec();
    return orderItem;
  } catch (error: any) {
    const message = error.message.toString();
    if (message.includes("Cast to ObjectId failed")) {
      return null;
    }

    throw error;
  }
}
  async update(
    orderItemId: string,
    updateOrderItemInfo: Partial<IOrderItem>
  ): Promise<IOrderItem> {
    const results = await MongooseOrderItem.findByIdAndUpdate(
      orderItemId,
      updateOrderItemInfo
    );

    if (!results) {
      throw new HttpException(404, "주문 상품을 찾을 수 없습니다.");
    }

    return results;
  }
  async delete(orderItemId: string): Promise<void> {
    await MongooseOrderItem.deleteOne({ _id: orderItemId });

    return;
  }
}
