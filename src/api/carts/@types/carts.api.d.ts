// 장바구니 생성

declare type createCartRequestPath = {};

declare type createCartRequestBody = {
  /** 사용자 ID */
  userId: string;
};

declare type createCartRequestParams = {};

/** 장바구니 생성 요청 */
declare type createCartRequest = {
  params?: createCartRequestParams;
  path?: createCartRequestPath;
  body: createCartRequestBody;
};

/** 장바구니 생성 응답 */
declare type createCartResponse = ICartResponseDTO;

// 장바구니 업데이트

declare type updateCartRequestPath = {
  /** 장바구니 ID */
  cartId: string;
};

declare type updateCartRequestBody = Omit<ICart, "id" | "user">;

declare type updateCartRequestParams = {};

/** 장바구니 수정 요청 */
declare type updateCartRequest = {
  params?: updateCartRequestParams;
  path: updateCartRequestPath;
  body: updateCartRequestBody;
};

declare type updateCartResponse = void;

// 장바구니 조회

declare type getCartRequestPath = {
  /** 장바구니 ID */
  cartId: string;
};

declare type getCartRequestBody = {};

declare type getCartRequestParams = {};

/** 장바구니 목록 조회 요청 */
declare type getCartRequest = {
  params?: getCartRequestParams;
  path: getCartRequestPath;
  body?: getCartRequestBody;
};

/** 장바구니 목록 조회 응답 (DTO 참고) */
declare type getCartResponse = Array<ICartResponseDTO>;
