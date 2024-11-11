import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";

export interface OrdersService {
  /** 주문 생성 */
  createOrder(
    userId: string,
    order: Omit<IOrder, "id" | "user" | "createdAt">
  ): Promise<OrderResponseDTO>;
  /** 주문 목록 조회 */
  getOrders({ limit, offset }: { limit?: number; offset?: number }): Promise<{
    totalCount: number;
    prev: string | null;
    results: OrderResponseDTO[];
    next: string | null;
  }>;
  /** 주문 조회 */
  getOrderDetail(id: string): Promise<OrderResponseDTO | null>;
  /** 주문 수정 */
  updateOrder(
    orderId: string,
    updatedOrder: Partial<
      Pick<IOrder, "shippingAddress" | "deliveryRequest" | "orderStatus">
    >
  ): Promise<void>;
  /** 주문 삭제 */
  deleteOrder(orderId: string): Promise<void>;

  /** 상품 ID로 상품 정보 조회 */
  getOrderItemById(productId: string): Promise<IOrderItem | null>;
}
