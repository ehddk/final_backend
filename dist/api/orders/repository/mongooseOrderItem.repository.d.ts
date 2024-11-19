import { OrderItemRepository } from "@/api/orders/repository/orderItem.repository";
export declare class MongooseOrderItemRepository implements OrderItemRepository {
    save(orderItem: Omit<IOrderItem, "id">): Promise<IOrderItem>;
    findAll(): Promise<IOrderItem[]>;
    findById(id: string): Promise<IOrderItem | null>;
    update(orderItemId: string, updateOrderItemInfo: Partial<IOrderItem>): Promise<IOrderItem>;
    delete(orderItemId: string): Promise<void>;
}
