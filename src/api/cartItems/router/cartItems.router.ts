import express from "express";
import CartItemsController from "@/api/cartItems/controller/cartItems.controller";
import { CartItemsServiceImpl } from "@/api/cartItems/service/cartItems.service";
import {
  createCartItemValidator,
  deleteCartItemValidator,
  getCartItemsValidator,
  updateCartItemValidator,
} from "@/api/cartItems/dto/validations/cartItem.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { MongooseCartItemRepository } from "@/api/cartItems/repository/mongooseCartItem.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { MongooseCartRepository } from "@/api/carts/repository/mongooseCart.repository";

const cartItemRouter = express.Router();

const CART_ITEM_ROUTES = {
  /** 장바구니 주문 상품 목록 조회 */
  GET_CART_ITEMS: `/api/cartItems`,
  /** 장바구니 주문 상품 생성 */
  CREATE_CART_ITEM: `/api/cartItems`,
  /** 장바구니 주문 상품 수정 */
  UPDATE_CART_ITEM: `/api/cartItems/:cartItemId`,
  /** 장바구니 주문 상품 삭제 */
  DELETE_CART_ITEM: `/api/cartItems/:cartItemId`,
} as const;

const cartItemsController = new CartItemsController(
  new CartItemsServiceImpl(
    new MongooseCartItemRepository(),
    new MongooseCartRepository()
  )
);

cartItemRouter.get(
  extractPath(CART_ITEM_ROUTES.GET_CART_ITEMS, ROUTES_INDEX.CART_ITEMS_API),
  authUserMiddleware,
  validate(getCartItemsValidator),
  cartItemsController.getCartItems
);

cartItemRouter.post(
  extractPath(CART_ITEM_ROUTES.CREATE_CART_ITEM, ROUTES_INDEX.CART_ITEMS_API),
  authUserMiddleware,
  validate(createCartItemValidator),
  cartItemsController.createCartItem
);

cartItemRouter.put(
  extractPath(CART_ITEM_ROUTES.UPDATE_CART_ITEM, ROUTES_INDEX.CART_ITEMS_API),
  authUserMiddleware,
  validate(updateCartItemValidator),
  cartItemsController.updateCartItem
);

cartItemRouter.delete(
  extractPath(CART_ITEM_ROUTES.DELETE_CART_ITEM, ROUTES_INDEX.CART_ITEMS_API),
  authUserMiddleware,
  validate(deleteCartItemValidator),
  cartItemsController.deleteCartItem
);

export default cartItemRouter;
