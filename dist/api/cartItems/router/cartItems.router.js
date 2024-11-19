"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cartItems_controller_1 = __importDefault(require("@/api/cartItems/controller/cartItems.controller"));
const cartItems_service_1 = require("@/api/cartItems/service/cartItems.service");
const cartItem_validation_1 = require("@/api/cartItems/dto/validations/cartItem.validation");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const mongooseCartItem_repository_1 = require("@/api/cartItems/repository/mongooseCartItem.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const mongooseCart_repository_1 = require("@/api/carts/repository/mongooseCart.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongooseProduct_repository_1 = require("@/api/products/repository/mongooseProduct.repository");
const cartItemRouter = express_1.default.Router();
const CART_ITEM_ROUTES = {
    /** 장바구니 주문 상품 목록 조회 */
    GET_CART_ITEMS: `/api/cartItems`,
    /** 장바구니 주문 상품 생성 */
    CREATE_CART_ITEM: `/api/cartItems`,
    /** 장바구니 주문 상품 수정 */
    UPDATE_CART_ITEM: `/api/cartItems/:cartItemId`,
    /** 장바구니 주문 상품 삭제 */
    DELETE_CART_ITEM: `/api/cartItems/:cartItemId`,
};
const cartItemsController = new cartItems_controller_1.default(new cartItems_service_1.CartItemsServiceImpl(new mongooseCartItem_repository_1.MongooseCartItemRepository(), new mongooseCart_repository_1.MongooseCartRepository(), new mongooseUser_repository_1.MongooseUserRepository(), new mongooseProduct_repository_1.MongooseProductRepository()));
cartItemRouter.get((0, path_util_1.extractPath)(CART_ITEM_ROUTES.GET_CART_ITEMS, routers_1.ROUTES_INDEX.CART_ITEMS_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(cartItem_validation_1.getCartItemsValidator), cartItemsController.getCartItems);
cartItemRouter.post((0, path_util_1.extractPath)(CART_ITEM_ROUTES.CREATE_CART_ITEM, routers_1.ROUTES_INDEX.CART_ITEMS_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(cartItem_validation_1.createCartItemValidator), cartItemsController.createCartItem);
cartItemRouter.put((0, path_util_1.extractPath)(CART_ITEM_ROUTES.UPDATE_CART_ITEM, routers_1.ROUTES_INDEX.CART_ITEMS_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(cartItem_validation_1.updateCartItemValidator), cartItemsController.updateCartItem);
cartItemRouter.delete((0, path_util_1.extractPath)(CART_ITEM_ROUTES.DELETE_CART_ITEM, routers_1.ROUTES_INDEX.CART_ITEMS_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(cartItem_validation_1.deleteCartItemValidator), cartItemsController.deleteCartItem);
exports.default = cartItemRouter;
//# sourceMappingURL=cartItems.router.js.map