declare type getOrdersRequestPath = {};

declare type getOrdersRequestBody = {};

declare type getOrdersRequestParams = {
  /** offset */
  offset?: number;
  /** limit */
  limit?: number;
};

/** 주문 목록 조회 요청 */
declare type getOrdersRequest = {
  params: getOrdersRequestParams;
  path?: getOrdersRequestPath;
  body?: getOrdersRequestBody;
};

/** 주문 목록 조회 응답 (DTO 참고) */
declare type getOrdersResponse = Array<IOrderResponseDTO>;

declare type getOrderDetailRequestPath = {
  /** 주문 ID */
  orderId: string;
};

declare type getOrderDetailRequestBody = {};

declare type getOrderDetailRequestParams = {};

/** 주문 상세 조회 요청 */
declare type getOrderDetailRequest = {
  params?: getOrderDetailRequestParams;
  path: getOrderDetailRequestPath;
  body?: getOrderDetailRequestBody;
};

/** 주문 상세 조회 응답 (DTO 참고) */
declare type getOrderDetailResponse = IOrderResponseDTO | null;

declare type createOrderRequestPath = {};

declare type createOrderRequestBody = {
  /** 배송지 */
  shippingAddress: IDelivery;
  /** 배송 요청 사항 */
  deliveryRequest?: string; // 선택 사항
  /** 결제 수단 */
  paymentMethod: PaymentMethod;
  /** 장바구니 정보 (상품 정보, 가격정보) */
  cart: ICart;
  /** 주문 상태 */
  orderStatus: OrderStatus;
};

declare type createOrderRequestParams = {};

/** 주문 생성 요청 */
declare type createOrderRequest = {
  params: createOrderRequestParams;
  path?: createOrderRequestPath;
  body: createOrderRequestBody;
};

/** 주문 생성 응답 */
declare type createOrderResponse = IOrderResponseDTO;

declare type updateOrderRequestPath = {
  /** 주문 ID */
  orderId: string;
};

declare type updateOrderRequestBody = {
  /** 배송지 */
  shippingAddress?: IDelivery;
  /** 배송 요청사항 */
  deliveryRequest?: string;
  /** 주문상태 */
  orderStatus?: OrderStatus;
};

declare type updateOrderRequestParams = {};

/** 주문 수정 요청 */
declare type updateOrderRequest = {
  params?: updateOrderRequestParams;
  path: updateOrderRequestPath;
  body: updateOrderRequestBody;
};

declare type updateOrderResponse = void;

declare type deleteOrderRequestPath = {
  /** 주문 ID */
  orderId: string;
};

declare type deleteOrderRequestBody = {};

declare type deleteOrderRequestParams = {};

/** 주문 삭제 요청 */
declare type deleteOrderRequest = {
  params?: deleteOrderRequestParams;
  path: deleteOrderRequestPath;
  body?: deleteOrderRequestBody;
};

/** 주문 삭제 응답 */
declare type deleteOrderResponse = void;
