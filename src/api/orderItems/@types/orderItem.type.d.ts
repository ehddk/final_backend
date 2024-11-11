const ORDER_ITEM_STATUS = {
  PAYMENT_PENDING = "결제대기중",
  PAYMENT_COMPLETED = "결제완료",
  PREPARING_FOR_SHIPMENT = "배송준비중",
  SHIPPING = "배송중",
  SHIPPED = "배송완료",
  ORDER_CANCELED = "주문취소",
  REFUND_REQUESTED = "환불신청",
  REFUNDED = "환불완료",
  EXCHANGE_REQUESTED = "교환신청",
  EXCHANGED = "교환완료",
} as const;

type OrderItemStatus = keyof typeof ORDER_ITEM_STATUS;

interface IOrderItem {
  /** 주문 상품 ID */
  id: string;
  /** 주문 상품 제목 */
  product: IProduct;
  /** 작성자 */
  user: IUser;
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
    productName: string;
    sales: number;
  };
  /** 주문 수량 */
  quantity: number;
  /** 주문 총 가격 */
  totalPrice: number;
  /** 주문 상태 (주문상품별) */
  orderItemStatus: OrderItemStatus;
  /** 유저 */
  user: {
    id: string;
    name: string;
  };
}
