declare type getCartItemsRequestPath = {};

declare type getCartItemsRequestBody = {};

declare type getCartItemsRequestParams = {};

/** 장바구니 주문 상품 목록 조회 요청 */
declare type getCartItemsRequest = {
  params?: getCartItemsRequestParams;
  path?: getCartItemsRequestPath;
  body?: getCartItemsRequestBody;
};

/** 장바구니 주문 상품 목록 조회 응답 (DTO 참고) */
declare type getCartItemsResponse = Array<ICartItemResponseDTO>;

declare type getCartItemDetailRequestPath = {
  /** 장바구니 주문 상품 ID */
  cartItemId: string;
};

declare type getCartItemDetailRequestBody = {};

declare type getCartItemDetailRequestParams = {};

/** 장바구니 주문 상품 상세 조회 요청 */
declare type getCartItemDetailRequest = {
  params?: getCartItemDetailRequestParams;
  path: getCartItemDetailRequestPath;
  body?: getCartItemDetailRequestBody;
};

/** 장바구니 주문 상품 상세 조회 응답 (DTO 참고) */
declare type getCartItemDetailResponse = ICartItemResponseDTO | null;

declare type createCartItemRequestPath = {};

declare type createCartItemRequestBody = {
  product: IProduct;
  productName: string;
  sales: number;
  quantity: number;
  totalPrice: number;
  cartId: string;
};

declare type createCartItemRequestParams = {};

/** 장바구니 주문 상품 생성 요청 */
declare type createCartItemRequest = {
  params?: createCartItemRequestParams;
  path?: createCartItemRequestPath;
  body: createCartItemRequestBody;
};

/** 장바구니 주문 상품 생성 응답 */
declare type createCartItemResponse = ICartItemResponseDTO;

declare type updateCartItemRequestPath = {
  /** 장바구니 주문 상품 ID */
  cartItemId: string;
};

declare type updateCartItemRequestBody = Omit<ICartItem, "id" | "product">;

declare type updateCartItemRequestParams = {};

/** 장바구니 주문 상품 수정 요청 */
declare type updateCartItemRequest = {
  params?: updateCartItemRequestParams;
  path: updateCartItemRequestPath;
  body: updateCartItemRequestBody;
};

declare type updateCartItemResponse = void;

declare type deleteCartItemRequestPath = {
  /** 장바구니 주문 상품 ID */
  cartItemId: string;
};

declare type deleteCartItemRequestBody = {};

declare type deleteCartItemRequestParams = {};

/** 장바구니 주문 상품 삭제 요청 */
declare type deleteCartItemRequest = {
  params?: deleteCartItemRequestParams;
  path: deleteCartItemRequestPath;
  body?: deleteCartItemRequestBody;
};

/** 장바구니 주문 상품 삭제 응답 */
declare type deleteCartItemResponse = void;
