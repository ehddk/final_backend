"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminCartItems_controller_1 = __importDefault(require("@/api/cartItems/controller/adminCartItems.controller"));
const cartItems_service_1 = require("@/api/cartItems/service/cartItems.service");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const cartItem_validation_1 = require("@/api/cartItems/dto/validations/cartItem.validation");
const mongooseCartItem_repository_1 = require("@/api/cartItems/repository/mongooseCartItem.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const mongooseCart_repository_1 = require("@/api/carts/repository/mongooseCart.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongooseProduct_repository_1 = require("@/api/products/repository/mongooseProduct.repository");
const adminCartItemRouter = express_1.default.Router();
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
};
const adminCartItemsController = new adminCartItems_controller_1.default(new cartItems_service_1.CartItemsServiceImpl(new mongooseCartItem_repository_1.MongooseCartItemRepository(), new mongooseCart_repository_1.MongooseCartRepository(), new mongooseUser_repository_1.MongooseUserRepository(), new mongooseProduct_repository_1.MongooseProductRepository()));
adminCartItemRouter.get((0, path_util_1.extractPath)(ADMIN_CART_ITEM_ROUTES.GET_CART_ITEMS, routers_1.ROUTES_INDEX.ADMIN_CART_ITEMS_API), (0, validation_middleware_1.validate)(cartItem_validation_1.getCartItemsValidator), adminCartItemsController.getCartItems);
adminCartItemRouter.get((0, path_util_1.extractPath)(ADMIN_CART_ITEM_ROUTES.GET_CART_ITEM, routers_1.ROUTES_INDEX.ADMIN_CART_ITEMS_API), (0, validation_middleware_1.validate)(cartItem_validation_1.getCartItemDetailValidator), authUser_middleware_1.authUserMiddleware, adminCartItemsController.getCartItemDetail);
adminCartItemRouter.post((0, path_util_1.extractPath)(ADMIN_CART_ITEM_ROUTES.CREATE_CART_ITEM, routers_1.ROUTES_INDEX.ADMIN_CART_ITEMS_API), (0, validation_middleware_1.validate)(cartItem_validation_1.createCartItemValidator), authUser_middleware_1.authUserMiddleware, adminCartItemsController.createCartItem);
adminCartItemRouter.put((0, path_util_1.extractPath)(ADMIN_CART_ITEM_ROUTES.UPDATE_CART_ITEM, routers_1.ROUTES_INDEX.ADMIN_CART_ITEMS_API), (0, validation_middleware_1.validate)(cartItem_validation_1.updateCartItemValidator), adminCartItemsController.updateCartItem);
adminCartItemRouter.delete((0, path_util_1.extractPath)(ADMIN_CART_ITEM_ROUTES.DELETE_CART_ITEM, routers_1.ROUTES_INDEX.ADMIN_CART_ITEMS_API), (0, validation_middleware_1.validate)(cartItem_validation_1.deleteCartItemValidator), adminCartItemsController.deleteCartItem);
exports.default = adminCartItemRouter;
//# sourceMappingURL=adminCartItem.router.js.map