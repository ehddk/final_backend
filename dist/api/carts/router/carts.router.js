"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carts_controller_1 = __importDefault(require("@/api/carts/controller/carts.controller"));
const carts_service_1 = require("@/api/carts/service/carts.service");
const mongooseCart_repository_1 = require("@/api/carts/repository/mongooseCart.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const cartRouter = express_1.default.Router();
const CART_ROUTES = {
    /** 장바구니 생성 */
    CREATE_CART: `/api/carts`,
    /** 장바구니 조회 */
    GET_CART: `/api/carts`,
    /** 장바구니 업데이트 */
    UPDATE_CART: `/api/carts/:cartId`,
};
const cartsController = new carts_controller_1.default(new carts_service_1.CartsServiceImpl(new mongooseCart_repository_1.MongooseCartRepository()));
// 장바구니 생성
cartRouter.post((0, path_util_1.extractPath)(CART_ROUTES.CREATE_CART, routers_1.ROUTES_INDEX.CARTS_API), authUser_middleware_1.authUserMiddleware, cartsController.createCart);
// 장바구니 조회
cartRouter.get((0, path_util_1.extractPath)(CART_ROUTES.GET_CART, routers_1.ROUTES_INDEX.CARTS_API), authUser_middleware_1.authUserMiddleware, cartsController.getCart);
// 장바구니 업데이트
cartRouter.put((0, path_util_1.extractPath)(CART_ROUTES.UPDATE_CART, routers_1.ROUTES_INDEX.CARTS_API), authUser_middleware_1.authUserMiddleware, 
// validate(updateCartValidator),
cartsController.updateCart);
exports.default = cartRouter;
//# sourceMappingURL=carts.router.js.map