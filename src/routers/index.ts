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

/**  장바구니 라우터 */
const CART_ROUTES = {
  /** 장바구니 API */
  CARTS_API: "/api/carts",
  /** 장바구니 API */
  ADMIN_CARTS_API: "/admin-api/carts",
} as const;

/**  장바구니 아이템 라우터 */
const CART_ITEM_ROUTES = {
  /** 장바구니 API */
  CART_ITEMS_API: "/api/cartItems",
  /** 장바구니 API */
  ADMIN_CART_ITEMS_API: "/admin-api/cartItems",
} as const;

/**  1:1문의 라우터 */
const INQUIRY_ROUTES = {
  /** 1:1문의 API */
  INQUIRIES_API: "/api/inquiries",
  /** 1:1문의 API */
  ADMIN_INQUIRIES_API: "/admin-api/inquiries",
} as const;

/**배송지 라우터 */
const DELIVERY_ROUTES = {
  DELIVERY_API: "/api/deliveries",
};
export const ROUTES_INDEX = {
  ...INQUIRY_ROUTES,
  ...CART_ITEM_ROUTES,
  ...CART_ROUTES,
  ...ORDER_ROUTES,
  ...PRODUCT_ROUTES,
  ...AUTH_ROUTES,
  ...USER_ROUTES,
  ...DELIVERY_ROUTES,
} as const;
