type getOrdersRequestPath = {};

type getOrdersRequestParams = {};

type getOrdersRequestBody = {};

/** 주문 목록 조회 요청 */
type getOrdersRequest = {
  body?: getOrdersRequestBody;
  params?: getOrdersRequestParams;
  path?: getOrdersRequestPath;
};

/** 주문 목록 조회 응답 */
type getOrdersResponse = {
  count: number;
  prev: string | null;
  next: string | null;
  results: IOrder[];
};

type getOrderDetailRequestPath = {
  orderId: string;
};

type getOrderDetailRequestParams = {};

type getOrderDetailRequestBody = {};

/** 주문 상세 조회 요청 */
type getOrderDetailRequest = {
  body?: getOrderDetailRequestBody;
  params?: getOrderDetailRequestParams;
  path: getOrderDetailRequestPath;
};

/** 주문 상세 조회 응답 */
type getOrderDetailResponse = IOrder;

type createOrderRequestPath = {};

type createOrderRequestParams = {};

type createOrderRequestBody = {
  /** 제품 ID */
  productId: string;
  /** 회원 ID */
  userId: string;
  /** 배송지 */
  shippingAddress: string;
  /** 배송 요청 사항 */
  deliveryRequest?: string; // 선택 사항
  /** 결제 수단 */
  paymentMethod: "신용카드" | "간편결제" | "휴대폰" | "카카오페이";
  /** 주문 상품 개수 */
  productQuantity: number;
  /** 상품 총 가격 */
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제 예정 금액 */
  totalPaymentAmount: number;
  /** 주문 상태 */
  orderStatus: "결제완료" | "배송준비중" | "배송중" | "배송완료" | "주문취소";
};

/** 주문 생성 요청 */
type createOrderRequest = {
  body: createOrderRequestBody;
  params?: createOrderRequestParams;
  path?: createOrderRequestPath;
};

/** 주문 생성 응답 */
type createOrderResponse = IOrder;

type updateOrderRequestPath = {
  orderId: string;
};

type updateOrderRequestParams = {};

type updateOrderRequestBody = Omit<{
  productId: string;
  userId: string;
}>;

/** 주문 수정 요청 */
type updateOrderRequest = {
  body: updateOrderRequestBody;
  params?: updateOrderRequestParams;
  path: updateOrderRequestPath;
};

/** 주문 수정 응답 */
type updateOrderResponse = void;

type deleteOrderRequestPath = {
  orderId: string;
};

type deleteOrderRequestParams = {};

type deleteOrderRequestBody = {};

/** 주문 삭제 요청 */
type deleteOrderRequest = {
  body?: deleteOrderRequestBody;
  params?: deleteOrderRequestParams;
  path: deleteOrderRequestPath;
};

/** 주문 삭제 응답 */
type deleteOrderResponse = void;
