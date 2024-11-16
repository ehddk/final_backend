import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/orders/repository/order.repository";
import { MongooseOrder } from "@/api/orders/model/order.schema";

export class MongooseOrderRepository implements OrderRepository {
  async findAllWithPagination({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: IOrder[];
    next: string | null;
  }> {
    const offsetValue = Number(offset) || 0;
    const limitValue = Number(limit) || 10;

    // 주문 목록 조회 및 페이지네이션 적용
    const list = await MongooseOrder.find()
      .limit(limitValue)
      .skip(offsetValue)
      .sort({ createdAt: -1 });

    const totalCount = await MongooseOrder.find().countDocuments();

    return {
      totalCount,
      results: list,
      prev:
        offsetValue - limitValue >= 0
          ? `?offset=${offsetValue - limitValue}&limit=${limitValue}`
          : null,
      next:
        offsetValue + limitValue < totalCount
          ? `?offset=${offsetValue + limitValue}&limit=${limitValue}`
          : null,
    };
  }

  async save(order: Omit<IOrder, "id">): Promise<IOrder> {
    const newOrder = new MongooseOrder({
      ...order,
      userInfo: order.userInfo,
    });

    await newOrder.save();

    return newOrder;
  }

  async findAll(): Promise<IOrder[]> {
    const orders = await MongooseOrder.find().populate({
      path: "orderItem",
      populate: {
        path: "product", // orderItem 안의 product를 populate
      },
    });
    return orders;
  }

  async findById(orderId: string): Promise<IOrder | null> {
    const order = await MongooseOrder.findById(orderId).populate({
      path: "orderItem",
      populate: {
        path: "product", // orderItem 안의 product를 populate
      },
    });
    if (!order) {
      throw new HttpException(404, "주문을 찾을 수 없습니다.");
    }

    return order;
  }

  async update(
    orderId: string,
    updateOrderInfo: Partial<IOrder>
  ): Promise<IOrder> {
    const updatedOrder = await MongooseOrder.findByIdAndUpdate(
      orderId,
      updateOrderInfo,
      { new: true }
    ).populate({
      path: "orderItem",
      populate: {
        path: "product", // orderItem 안의 product를 populate
      },
    });

    if (!updatedOrder) {
      throw new HttpException(404, "주문을 찾을 수 없습니다.");
    }

    return updatedOrder;
  }

  async delete(orderId: string): Promise<void> {
    await MongooseOrder.deleteOne({ _id: orderId });

    return;
  }
}
