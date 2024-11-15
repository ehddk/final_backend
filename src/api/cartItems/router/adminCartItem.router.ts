import express from "express";
import AdminCartItemsController from "@/api/cartItems/controller/adminCartItems.controller";
import { CartItemsServiceImpl } from "@/api/cartItems/service/cartItems.service";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  createCartItemValidator,
  deleteCartItemValidator,
  getCartItemDetailValidator,
  getCartItemsValidator,
  updateCartItemValidator,
} from "@/api/cartItems/dto/validations/cartItem.validation";
import { MongooseCartItemRepository } from "@/api/cartItems/repository/mongooseCartItem.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { MongooseCartRepository } from "@/api/carts/repository/mongooseCart.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProductRepository } from "@/api/products/repository/mongooseProduct.repository";

const adminCartItemRouter = express.Router();

/*관리자 장바구니 주문 상품 관련 API 객체*/
const ADMIN_CART_ITEM_ROUTES = {
  /**장바구니 주문 상품 목록 조회 (관리자) */
  GET_CART_ITEMS: `/admin-api/cartItems`,
  /**장바구니 주문 상품 상세 조회 (관리자) */
  GET_CART_ITEM: `/admin-api/cartItems/:cartItemId`,
  /**장바구니 주문 상품 생성 (관리자)  */
  CREATE_CART_ITEM: `/admin-api/cartItems`,
  /**장바구니 주문 상품 수정 (관리자) */
  UPDATE_CART_ITEM: `/admin-api/cartItems/:cartItemId`,
  /**장바구니 주문 상품 삭제 (관리자) */
  DELETE_CART_ITEM: `/admin-api/cartItems/:cartItemId`,
} as const;

const adminCartItemsController = new AdminCartItemsController(
  new CartItemsServiceImpl(
    new MongooseCartItemRepository(),
    new MongooseCartRepository(),
    new MongooseUserRepository(),
    new MongooseProductRepository()
  )
);

adminCartItemRouter.get(
  extractPath(
    ADMIN_CART_ITEM_ROUTES.GET_CART_ITEMS,
    ROUTES_INDEX.ADMIN_CART_ITEMS_API
  ),
  validate(getCartItemsValidator),
  adminCartItemsController.getCartItems
);
adminCartItemRouter.get(
  extractPath(
    ADMIN_CART_ITEM_ROUTES.GET_CART_ITEM,
    ROUTES_INDEX.ADMIN_CART_ITEMS_API
  ),
  validate(getCartItemDetailValidator),
  authUserMiddleware,
  adminCartItemsController.getCartItemDetail
);
adminCartItemRouter.post(
  extractPath(
    ADMIN_CART_ITEM_ROUTES.CREATE_CART_ITEM,
    ROUTES_INDEX.ADMIN_CART_ITEMS_API
  ),
  validate(createCartItemValidator),
  authUserMiddleware,
  adminCartItemsController.createCartItem
);
adminCartItemRouter.put(
  extractPath(
    ADMIN_CART_ITEM_ROUTES.UPDATE_CART_ITEM,
    ROUTES_INDEX.ADMIN_CART_ITEMS_API
  ),
  validate(updateCartItemValidator),
  adminCartItemsController.updateCartItem
);
adminCartItemRouter.delete(
  extractPath(
    ADMIN_CART_ITEM_ROUTES.DELETE_CART_ITEM,
    ROUTES_INDEX.ADMIN_CART_ITEMS_API
  ),
  validate(deleteCartItemValidator),
  adminCartItemsController.deleteCartItem
);

export default adminCartItemRouter;
