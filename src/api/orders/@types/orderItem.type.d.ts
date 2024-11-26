type OrderItemStatus =
  | "PAYMENT_PENDING"
  | "PAYMENT_COMPLETED"
  | "ORDER_CANCELED"
  | "PREPARING_FOR_SHIPPING"
  | "SHIPPING"
  | "SHIPPED"
  | "REFUND_REQUESTED"
  | "REFUNDED"
  | "EXCHANGE_REQUESTED"
  | "EXCHANGED";

interface IOrderItem {
  /** 주문 상품 ID */
  id: string;
  product: IProduct;
  /** 주문 수량 */
  quantity: number;
  /** 주문 총 가격 */
  totalPrice: number;
  /** 주문 상태 (주문상품별) */
  orderItemStatus: OrderItemStatus;
}

interface IOrderItemResponseDTO {
  /** 주문 상품 ID */
  orderItemId: string;
  /** 주문 상품 제목 */
  product: {
    id: string;
    productName: string;
    sales: number;
    price: number;
    thumbnail: File | Blob | null;
  };
  /** 주문 수량 */
  quantity: number;
  /** 주문 총 가격 */
  totalPrice: number;
  /** 주문 상태 (주문상품별) */
  orderItemStatus: OrderItemStatus;
}
