/**  주문 라우터 */
const ORDER_ROUTES = {
  /** 관리자 주문 API */
  ADMIN_ORDERS_API: "/admin-api/orders",
  /** 주문 API */
  ORDERS_API: "/api/orders",
} as const;

/**  상품 라우터 */
const PRODUCT_ROUTES = {
  /** 관리자 상품 API */
  ADMIN_PRODUCTS_API: "/admin-api/products",
  /** 상품 API */
  PRODUCTS_API: "/api/products",
} as const;

/** 인증 라우터 */
const AUTH_ROUTES = {
  /** Auth API */
  AUTH_API: "/api/auth",
} as const;

/** 사용자 라우터 */
const USER_ROUTES = {
  /** 유저 관리자 API */
  ADMIN_USERS_API: "/admin-api/users",
  /** 유저 API */
  USERS_API: "/api/users",
} as const;

/**  주문 상품 라우터 */
const ORDER_ITEM_ROUTES = {
  /** 관리자 주문 API */
  ADMIN_ORDER_ITEMS_API: "/admin-api/orderItems",
  /** 주문 API */
  ORDER_ITEMS_API: "/api/orderItems",
} as const;

/**  장바구니 라우터 */
const CART_ROUTES = {
  /** 장바구니 API */
  CARTS_API: "/api/carts",
} as const;

export const ROUTES_INDEX = {
  ...CART_ROUTES,
  ...ORDER_ITEM_ROUTES,
  ...ORDER_ROUTES,
  ...PRODUCT_ROUTES,
  ...AUTH_ROUTES,
  ...USER_ROUTES,
} as const;
