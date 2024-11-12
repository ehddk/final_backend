type PaymentMethod =
  | "CREDIT_CARD"
  | "SIMPLE_PAY"
  | "MOBILE_PAYMENT"
  | "KAKAO_PAY";

type OrderStatus =
  | "PAYMENT_PENDING"
  | "PAYMENT_COMPLETED"
  | "PREPARING_FOR_SHIPPING"
  | "SHIPPING"
  | "SHIPPED"
  | "ORDER_CANCELED"
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
  /** 주문 회원 정보  */
  user: IUser;
  /** 배송지 */
  shippingAddress: IDelivery;
  /** 배송요청사항 */
  deliveryRequest?: string;
  /** 주문날짜 */
  createdAt: Date;
  /** 결제수단 */
  paymentMethod: PaymentMethod;
  /** 주문 상품 정보 (상품 정보, 가격정보) */
  orderItem: IOrderItem[];
  /** 장바구니->주문에 필요한 정보 */
  cartToOrder: ICart;
  /** 주문상태 */
  orderStatus: OrderStatus;
}

interface IOrderResponseDTO {
  /** 주문 ID */
  orderId: string;

  /** 주문 회원정보 */
  user: {
    firstName: string;
    phoneNum: string;
  };
  /** 배송지 */
  shippingAddress: {
    name: string; //배송지와 연결된 유저명
    postalCode: number; //우편번호
    defaultAddress: string; // 기본 주소
    detailAddress: string; // 상세 주소
    number: string; //폰번호
  };
  /** 배송요청사항 */
  deliveryRequest?: string;
  /** 주문날짜 */
  orderDate: string;
  /** 결제수단 */
  paymentMethod: PaymentMethod;
  /** 주문 상품 정보 (상품 정보, 가격정보) */
  orderItem: {
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
  };
  /** 장바구니->주문에 필요한 정보 */
  cartToOrder: {
    /** 총 상품 가격 */
    totalProductPrice: number;
    /** 배송비 */
    shippingFee: number;
    /** 결제예정금액 */
    totalPaymentAmount: number;
  };

  /** 주문상태 */
  orderStatus: OrderStatus;
}
