import { OrderRepository } from "@/api/orders/repository/order.repository";
export declare class MongooseOrderRepository implements OrderRepository {
    findAllWithPagination({ userId, offset, limit, }: {
        userId: string;
        offset: number;
        limit: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: IOrder[];
        next: string | null;
    }>;
    save(order: Omit<IOrder, "id">): Promise<IOrder>;
    findAll(userId: string): Promise<IOrder[]>;
    findById(orderId: string): Promise<IOrder | null>;
    update(orderId: string, updateOrderInfo: Partial<IOrder>): Promise<IOrder>;
    delete(orderId: string): Promise<void>;
}
