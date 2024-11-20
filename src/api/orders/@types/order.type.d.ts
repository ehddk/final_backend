type PaymentMethod =
  | "CREDIT_CARD"
  | "SIMPLE_PAY"
  | "MOBILE_PAYMENT"
  | "KAKAO_PAY";

type OrderStatus =
  | "PAYMENT_PENDING"
  | "PAYMENT_COMPLETED"
  | "ORDER_CANCELED"
  | "PREPARING_FOR_SHIPPING"
  | "SHIPPING"
  | "SHIPPED"
  | "PARTIAL_REFUND_REQUESTED"
  | "FULL_REFUND_REQUESTED"
  | "PARTIAL_REFUNDED"
  | "FULL_REFUNDED"
  | "PARTIAL_EXCHANGE_REQUESTED"
  | "PARTIAL_EXCHANGED"
  | "FULL_EXCHANGE_REQUESTED"
  | "FULL_EXCHANGED";

interface IOrder {
  /** 주문 ID */
  id: string;
  userId: string;
  /** 주문 회원 정보  */
  userInfo: IProfile;
  /** 배송지 */
  deliveryAddress: string;
  /** 배송요청사항 */
  deliveryRequest?: string;
  /** 주문날짜 */
  createdAt: Date;
  /** 결제수단 */
  paymentMethod: PaymentMethod;
  /** 주문 상품 정보 (상품 정보, 가격정보) */
  orderItem: IOrderItem[];
  /** 총 상품 가격 */
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
  userId: string;
  /** 주문 회원정보 */
  userInfo: {
    firstName: string;
    phoneNum: string;
  };
  deliveryAddress: string;
  /** 배송요청사항 */
  deliveryRequest?: string;
  /** 주문날짜 */
  orderDate: string;
  /** 결제수단 */
  paymentMethod: PaymentMethod;
  /** 주문 상품 정보 (상품 정보, 가격정보) */
  orderItem: {
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
  };
  /** 총 상품 가격 */
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제예정금액 */
  totalPaymentAmount: number;
  /** 주문상태 */
  orderStatus: OrderStatus;
}
