import { UserRepository } from "@/api/users/repository/user/user.repository";
import { OrderRepository } from "@/api/orders/repository/order.repository";
import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";
import { OrdersService } from "@/api/orders/service/orders.service.type";
import { OrderItemRepository } from "../repository/orderItem.repository";
export declare class OrdersServiceImpl implements OrdersService {
    private readonly _orderRepository;
    private readonly _userRepository;
    private readonly _orderItemRepository;
    constructor(orderRepository: OrderRepository, userRepository: UserRepository, orderItemRepository: OrderItemRepository);
    /** 주문 생성 */
    createOrder(userId: string, order: Omit<IOrder, "id" | "userInfo" | "orderItem"> & {
        orderItem: Omit<IOrderItem, "id">[];
    }): Promise<OrderResponseDTO>;
    /** 주문 목록 조회 */
    getOrders({ userId, limit, offset, }: {
        userId: string;
        limit?: number;
        offset?: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: OrderResponseDTO[];
        next: string | null;
    }>;
    /** 주문 상세 조회 */
    getOrderDetail(orderId: string): Promise<OrderResponseDTO | null>;
    /** 주문 수정 */
    updateOrder(orderId: string, params: Partial<IOrder>): Promise<void>;
    /** 주문 삭제 */
    deleteOrder(orderId: string): Promise<void>;
}
