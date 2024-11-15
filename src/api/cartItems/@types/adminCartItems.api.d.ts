declare type adminGetCartItemsRequestPath = {};

declare type adminGetCartItemsRequestBody = {};

declare type adminGetCartItemsRequestParams = {};

/** 장바구니 주문 상품 목록 조회 요청 */
declare type adminGetCartItemsRequest = {
  params?: adminGetCartItemsRequestParams;
  path?: adminGetCartItemsRequestPath;
  body?: adminGetCartItemsRequestBody;
};

/** 장바구니 주문 상품 목록 조회 응답 (DTO 참고) */
declare type adminGetCartItemsResponse = Array<ICartItemResponseDTO>;
declare type adminGetCartItemDetailRequestPath = {
  /** 장바구니 주문 상품 ID */
  cartItemId: string;
};

declare type adminGetCartItemDetailRequestBody = {};

declare type adminGetCartItemDetailRequestParams = {};

/** 장바구니 주문 상품 상세 조회 요청 */
declare type adminGetCartItemDetailRequest = {
  params?: adminGetCartItemDetailRequestParams;
  path: adminGetCartItemDetailRequestPath;
  body?: adminGetCartItemDetailRequestBody;
};

/** 장바구니 주문 상품 상세 조회 응답 (DTO 참고) */
declare type adminGetCartItemDetailResponse = ICartItemResponseDTO | null;

declare type adminCreateCartItemRequestBody = {
  product: IProduct;
  productName: string;
  sales: number;
  quantity: number;
  totalPrice: number;
};

declare type adminCreateCartItemRequestPath = {};

declare type adminCreateCartItemRequestParams = {};

/** 장바구니 주문 상품 생성 요청 */
declare type adminCreateCartItemRequest = {
  params?: adminCreateCartItemRequestParams;
  path?: adminCreateCartItemRequestPath;
  body: adminCreateCartItemRequestBody;
};

/** 장바구니 주문 상품 생성 응답 */
declare type adminCreateCartItemResponse = ICartItemResponseDTO;

declare type adminUpdateCartItemRequestBody = Omit<ICartItem, "id" | "product">;

declare type adminUpdateCartItemRequestPath = {
  /** 장바구니 주문 상품 ID */
  cartItemId: string;
};

declare type adminUpdateCartItemRequestParams = {};

/** 장바구니 주문 상품 수정 요청 */
declare type adminUpdateCartItemRequest = {
  params?: adminUpdateCartItemRequestParams;
  path: adminUpdateCartItemRequestPath;
  body: adminUpdateCartItemRequestBody;
};

/** 장바구니 주문 상품 수정 응답 */
declare type adminUpdateCartItemResponse = void;

declare type adminDeleteCartItemRequestPath = {
  /** 장바구니 주문 상품 ID */
  cartItemId: string;
};

declare type adminDeleteCartItemRequestBody = {};

declare type adminDeleteCartItemRequestParams = {};

/** 장바구니 주문 상품 삭제 요청 */
declare type adminDeleteCartItemRequest = {
  params?: adminDeleteCartItemRequestParams;
  path: adminDeleteCartItemRequestPath;
  body?: adminDeleteCartItemRequestBody;
};

/** 장바구니 주문 상품 삭제 응답 */
declare type adminDeleteCartItemResponse = void;
