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
  /** 장바구니 정보 (상품 정보, 가격정보) */
  cart: ICart;
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
  /** 장바구니 정보 (상품 정보, 가격정보) */
  cart: {
    cartItem: {
      product: {
        productName: string;
        sales: number;
      };
      /** 주문 수량 */
      quantity: number;
      /** 주문 총 가격 */
      totalPrice: number;
    };
    /** 상품 총 가격 */
    totalProductPrice: number;
    /** 배송비 */
    shippingFee: number;
    /** 결제예정금액 */
    totalPaymentAmount: number;
  };
  /** 주문상태 */
  orderStatus: OrderStatus;
}
