import { OrderItemResponseDTO } from "@/api/orderItems/dto/orderItemResponse.dto";

export interface OrderItemsService {
  /** 주문 상품 생성 */
  createOrderItem(
    orderId: string,
    orderItem: Omit<IOrderItem, "id" | "user" | "productName" | "sales">
  ): Promise<OrderItemResponseDTO>;
  /** 주문 상품 목록 조회 (페이지네이션 없이) */
  getOrderItems(): Promise<OrderItemResponseDTO[]>;
  /** 주문 상품 조회 */
  getOrderItemDetail(orderItemId: string): Promise<OrderItemResponseDTO | null>;
  /** 주문 상품 수정 */
  updateOrderItem(
    orderItemId: string,
    updatedOrderItem: Omit<IOrderItem, "id" | "user" | "orderId" | "product">
  ): Promise<void>;
  /** 주문 상품 삭제 */
  deleteOrderItem(orderItemId: string): Promise<void>;
}
