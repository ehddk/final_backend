import express from "express";
import CartsController from "@/api/carts/controller/carts.controller";
import { CartsServiceImpl } from "@/api/carts/service/carts.service";
import {
  getCartValidator,
  updateCartValidator,
} from "@/api/carts/dto/validations/cart.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { MongooseCartRepository } from "@/api/carts/repository/mongooseCart.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
const cartRouter = express.Router();

const CART_ROUTES = {
  /** 장바구니 생성 */
  CREATE_CART: `/api/carts`,
  /** 장바구니 조회 */
  GET_CART: `/api/carts/:cartId`,
  /** 장바구니 업데이트 */
  UPDATE_CART: `/api/carts/:cartId`,
} as const;

const cartsController = new CartsController(
  new CartsServiceImpl(
    new MongooseCartRepository(),
  )
);

// 장바구니 생성
cartRouter.post(
  extractPath(CART_ROUTES.CREATE_CART, ROUTES_INDEX.CARTS_API),
  authUserMiddleware,
  cartsController.createCart
);

// 장바구니 조회
cartRouter.get(
  extractPath(CART_ROUTES.GET_CART, ROUTES_INDEX.CARTS_API),
  authUserMiddleware,
  validate(getCartValidator),
  cartsController.getCart
);

// 장바구니 업데이트
cartRouter.put(
  extractPath(CART_ROUTES.UPDATE_CART, ROUTES_INDEX.CARTS_API),
  authUserMiddleware,
  validate(updateCartValidator),
  cartsController.updateCart
);

export default cartRouter;
