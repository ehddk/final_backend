"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_validation_1 = require("@/api/orders/dto/validations/order.validation");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const orders_controller_1 = __importDefault(require("@/api/orders/controller/orders.controller"));
const orders_service_1 = require("@/api/orders/service/orders.service");
const mongooseOrder_repository_1 = require("@/api/orders/repository/mongooseOrder.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongooseOrderItem_repository_1 = require("../repository/mongooseOrderItem.repository");
const orderRouter = express_1.default.Router();
const ORDER_ROUTES = {
    /** 주문 목록 조회 */
    GET_ORDERS: `/api/orders`,
    /** 주문 상세 조회 */
    GET_ORDER: `/api/orders/:orderId`,
    /** 주문 생성 */
    CREATE_ORDER: `/api/orders`,
    /** 주문 수정 */
    UPDATE_ORDER: `/api/orders/:orderId`,
};
const ordersController = new orders_controller_1.default(new orders_service_1.OrdersServiceImpl(new mongooseOrder_repository_1.MongooseOrderRepository(), new mongooseUser_repository_1.MongooseUserRepository(), new mongooseOrderItem_repository_1.MongooseOrderItemRepository()));
orderRouter.get((0, path_util_1.extractPath)(ORDER_ROUTES.GET_ORDERS, routers_1.ROUTES_INDEX.ORDERS_API), (0, validation_middleware_1.validate)(order_validation_1.getOrdersValidator), authUser_middleware_1.authUserMiddleware, ordersController.getOrders);
orderRouter.get((0, path_util_1.extractPath)(ORDER_ROUTES.GET_ORDER, routers_1.ROUTES_INDEX.ORDERS_API), (0, validation_middleware_1.validate)(order_validation_1.getOrderDetailValidator), authUser_middleware_1.authUserMiddleware, ordersController.getOrderDetail);
orderRouter.post((0, path_util_1.extractPath)(ORDER_ROUTES.CREATE_ORDER, routers_1.ROUTES_INDEX.ORDERS_API), authUser_middleware_1.authUserMiddleware, ordersController.createOrder);
orderRouter.put((0, path_util_1.extractPath)(ORDER_ROUTES.UPDATE_ORDER, routers_1.ROUTES_INDEX.ORDERS_API), authUser_middleware_1.authUserMiddleware, ordersController.updateOrder);
exports.default = orderRouter;
//# sourceMappingURL=orders.router.js.map