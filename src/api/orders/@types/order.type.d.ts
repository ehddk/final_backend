const PAYMENT_METHOD = {
  CREDIT_CARD: "신용카드",
  SIMPLE_PAY: "간편결제",
  MOBILE_PAYMENT: "휴대폰",
  KAKAO_PAY: "카카오페이",
} as const;
type PaymentMethod = keyof typeof PAYMENT_METHOD;

const ORDER_STATUS = {
  PAYMENT_PENDING: "결제대기중",
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_FOR_SHIPPING: "배송준비중",
  SHIPPING: "배송중",
  SHIPPED: "배송완료",
  ORDER_CANCELED: "주문취소",
  PARTIAL_REFUND_REQUESTED: "부분환불신청",
  FULL_REFUND_REQUESTED: "전체환불신청",
  PARTIAL_REFUNDED: "부분환불완료",
  FULL_REFUNDED: "전체환불완료",
  PARTIAL_EXCHANGE_REQUESTED: "부분교환신청",
  PARTIAL_EXCHANGED: "부분교환완료",
  FULL_EXCHANGE_REQUESTED: "전체교환신청",
  FULL_EXCHANGED: "전체교환완료",
} as const;

type OrderStatus = keyof typeof ORDER_STATUS;

interface IOrder {
  /** 주문 ID */
  id: string;
  /** 주문 상품 */
  orderItem: IOrderItem[];
  /** 주문 회원 정보  */
  user: IUser;
  /** 배송지 */
  shippingAddress: IShippingAddress[];
  /** 배송요청사항 */
  deliveryRequest?: string;
  /** 주문날짜 */
  createdAt: Date;
  /** 결제수단 */
  paymentMethod: PaymentMethod;
  /** 전체 주문 상품 총 합계 가격 */
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제예정금액 */
  totalPaymentAmount: number;
  /** 주문상태 */
  orderStatus: OrderStatus;
}

interface IOrderResponseDTO {
  /** 주문 ID */
  orderId: string;
  /** 주문 상품 정보*/
  orderItem: {
    product: {
      productName: string;
    };
    quantity: number;
    totalPrice: number;
  };
  /** 주문 회원정보 */
  user: {
    name: string;
    phoneNumber: number;
  };
  /** 배송지 */
  shippingAddress: {
    address: string;
  };
  /** 배송요청사항 */
  deliveryRequest?: string;
  /** 주문날짜 */
  orderDate: string;
  /** 결제수단 */
  paymentMethod: PaymentMethod;
  /** 전체 주문 상품 총 합계 가격 */
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제예정금액 */
  totalPaymentAmount: number;
  /** 주문상태 */
  orderStatus: OrderStatus;
}
