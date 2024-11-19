import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";
export interface OrdersService {
    /** 주문 생성 */
    createOrder(userId: string, order: Omit<IOrder, "id" | "userId" | "userInfo" | "createdAt" | "orderItem"> & {
        orderItem: Omit<IOrderItem, "id">[];
    }): Promise<OrderResponseDTO>;
    /** 주문 목록 조회 */
    getOrders({ userId, limit, offset }: {
        userId: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: OrderResponseDTO[];
        next: string | null;
    }>;
    /** 주문 조회 */
    getOrderDetail(id: string): Promise<OrderResponseDTO | null>;
    /** 주문 수정 */
    updateOrder(orderId: string, params: Partial<Pick<IOrder, "deliveryRequest" | "orderStatus"> & {
        orderItem: Omit<IOrderItem, "id">[];
    }>): Promise<void>;
    /** 주문 삭제 */
    deleteOrder(orderId: string): Promise<void>;
}
