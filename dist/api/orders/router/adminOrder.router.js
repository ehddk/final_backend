"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminOrders_controller_1 = __importDefault(require("@/api/orders/controller/adminOrders.controller"));
const orders_service_1 = require("@/api/orders/service/orders.service");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const adminOrder_validation_1 = require("@/api/orders/dto/validations/adminOrder.validation");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongooseOrder_repository_1 = require("@/api/orders/repository/mongooseOrder.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const mongooseOrderItem_repository_1 = require("@/api/orders/repository/mongooseOrderItem.repository");
const adminOrderRouter = express_1.default.Router();
/*관리자 주문 관련 API 객체*/
const ADMIN_ORDER_ROUTES = {
    /**주문 목록 조회 (관리자) */
    GET_ORDERS: `/admin-api/orders`,
    /**주문 상세 조회 (관리자) */
    GET_ORDER: `/admin-api/orders/:orderId`,
    /**주문 생성 (관리자)  */
    CREATE_ORDER: `/admin-api/orders`,
    /**주문 수정 (관리자) */
    UPDATE_ORDER: `/admin-api/orders/:orderId`,
    /**주문 삭제 (관리자) */
    DELETE_ORDER: `/admin-api/orders/:orderId`,
};
const adminOrdersController = new adminOrders_controller_1.default(new orders_service_1.OrdersServiceImpl(new mongooseOrder_repository_1.MongooseOrderRepository(), new mongooseUser_repository_1.MongooseUserRepository(), new mongooseOrderItem_repository_1.MongooseOrderItemRepository()));
adminOrderRouter.get((0, path_util_1.extractPath)(ADMIN_ORDER_ROUTES.GET_ORDERS, routers_1.ROUTES_INDEX.ADMIN_ORDERS_API), (0, validation_middleware_1.validate)(adminOrder_validation_1.adminGetOrdersValidator), adminOrdersController.getOrders);
adminOrderRouter.get((0, path_util_1.extractPath)(ADMIN_ORDER_ROUTES.GET_ORDER, routers_1.ROUTES_INDEX.ADMIN_ORDERS_API), (0, validation_middleware_1.validate)(adminOrder_validation_1.adminGetOrderDetailValidator), authUser_middleware_1.authUserMiddleware, adminOrdersController.getOrderDetail);
adminOrderRouter.post((0, path_util_1.extractPath)(ADMIN_ORDER_ROUTES.CREATE_ORDER, routers_1.ROUTES_INDEX.ADMIN_ORDERS_API), (0, validation_middleware_1.validate)(adminOrder_validation_1.adminCreateOrderValidator), authUser_middleware_1.authUserMiddleware, adminOrdersController.createOrder);
adminOrderRouter.put((0, path_util_1.extractPath)(ADMIN_ORDER_ROUTES.UPDATE_ORDER, routers_1.ROUTES_INDEX.ADMIN_ORDERS_API), (0, validation_middleware_1.validate)(adminOrder_validation_1.adminUpdateOrderValidator), adminOrdersController.updateOrder);
adminOrderRouter.delete((0, path_util_1.extractPath)(ADMIN_ORDER_ROUTES.DELETE_ORDER, routers_1.ROUTES_INDEX.ADMIN_ORDERS_API), (0, validation_middleware_1.validate)(adminOrder_validation_1.adminDeleteOrderValidator), adminOrdersController.deleteOrder);
exports.default = adminOrderRouter;
//# sourceMappingURL=adminOrder.router.js.map