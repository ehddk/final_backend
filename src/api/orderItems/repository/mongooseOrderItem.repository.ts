import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseOrderItem } from "@/api/orderItems/model/orderItem.schema";
import { OrderItemRepository } from "@/api/orderItems/repository/orderItem.repository";

export class MongooseOrderItemRepository implements OrderItemRepository {
  async save(orderItem: Omit<IOrderItem, "id">): Promise<IOrderItem> {
    const newOrderItem = new MongooseOrderItem({
      ...orderItem,
    });

    await newOrderItem.save();

    return newOrderItem;
  }
  async findAll(): Promise<IOrderItem[]> {
    const values = await MongooseOrderItem.find()
      .populate({
        path: "user",
        populate: {
          path: "profile",
        },
      })
      .sort({ createdAt: -1 }); // 최신순 정렬

    return values;
  }
  async findById(id: string): Promise<IOrderItem | null> {
    const orderItem = await MongooseOrderItem.findById(id).populate({
      path: "user",
      populate: {
        path: "profile",
      },
    });
    return orderItem;
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
