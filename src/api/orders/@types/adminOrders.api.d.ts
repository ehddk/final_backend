declare type adminGetOrdersRequestParams = {
  /** offset */
  offset?: number;
  /** limit */
  limit?: number;
};

/** 주문 목록 조회 요청 */
declare type adminGetOrdersRequest = {
  params: adminGetOrdersRequestParams;
  path?: adminGetOrdersRequestPath;
  body?: adminGetOrdersRequestBody;
};

/** 주문 목록 조회 응답 (DTO 참고) */
declare type adminGetOrdersResponse = Array<IOrderResponseDTO>;

declare type adminGetOrderDetailRequestPath = {
  /** 주문 ID */
  orderId: string;
};

declare type adminGetOrderDetailRequestBody = {};

declare type adminGetOrderDetailRequestParams = {};

/** 주문 상세 조회 요청 */
declare type adminGetOrderDetailRequest = {
  params?: adminGetOrderDetailRequestParams;
  path: adminGetOrderDetailRequestPath;
  body?: adminGetOrderDetailRequestBody;
};

/** 주문 상세 조회 응답 (DTO 참고) */
declare type adminGetOrderDetailResponse = IOrderResponseDTO | null;

declare type adminCreateOrderRequestBody = {
  /** 배송지 */
  shippingAddress: string;
  /** 배송 요청 사항 */
  deliveryRequest?: string; // 선택 사항
  /** 결제 수단 */
  paymentMethod: PaymentMethod;
  /** 주문 상품 개수 */
  productQuantity: number;
  /** 상품 총 가격 */
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제 예정 금액 */
  totalPaymentAmount: number;
  /** 주문 상태 */
  orderStatus: OrderStatus;
};

declare type adminCreateOrderRequestPath = {};

declare type adminCreateOrderRequestParams = {
  productId: string;
};

/** 주문 생성 요청 */
declare type adminCreateOrderRequest = {
  params: adminCreateOrderRequestParams;
  path?: adminCreateOrderRequestPath;
  body: adminCreateOrderRequestBody;
};

/** 주문 생성 응답 */
declare type adminCreateOrderResponse = IOrderResponseDTO;

declare type adminUpdateOrderRequestBody = {
  /** 배송지 */
  shippingAddress?: string;
  /** 배송 요청사항 */
  deliveryRequest?: string;
  /** 주문상태 */
  orderStatus?: OrderStatus;
};

declare type adminUpdateOrderRequestPath = {
  /** 주문 ID */
  orderId: string;
};

declare type adminUpdateOrderRequestParams = {};

/** 주문 수정 요청 */
declare type adminUpdateOrderRequest = {
  params?: adminUpdateOrderRequestParams;
  path: adminUpdateOrderRequestPath;
  body: adminUpdateOrderRequestBody;
};

/** 주문 수정 응답 */
declare type adminUpdateOrderResponse = void;

declare type adminDeleteOrderRequestPath = {
  /** 주문 ID */
  orderId: string;
};

declare type adminDeleteOrderRequestBody = {};

declare type adminDeleteOrderRequestParams = {};

/** 주문 삭제 요청 */
declare type adminDeleteOrderRequest = {
  params?: adminDeleteOrderRequestParams;
  path: adminDeleteOrderRequestPath;
  body?: adminDeleteOrderRequestBody;
};

/** 주문 삭제 응답 */
declare type adminDeleteOrderResponse = void;
