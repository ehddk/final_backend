import express from "express";
import AdminOrdersController from "@/api/orders/controller/adminOrders.controller";
import { OrdersServiceImpl } from "@/api/orders/service/orders.service";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  adminCreateOrderValidator,
  adminDeleteOrderValidator,
  adminGetOrderDetailValidator,
  adminGetOrdersValidator,
  adminUpdateOrderValidator,
} from "@/api/orders/dto/validations/adminOrder.validation";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseOrderRepository } from "@/api/orders/repository/mongooseOrder.repository";
import { MongooseProductRepository } from "@/api/products/repository/mongooseProduct.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";

const adminOrderRouter = express.Router();

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
} as const;

const adminOrdersController = new AdminOrdersController(
  new OrdersServiceImpl(
    new MongooseOrderRepository(),
    new MongooseUserRepository(),
    new MongooseProductRepository()
  )
);

adminOrderRouter.get(
  extractPath(ADMIN_ORDER_ROUTES.GET_ORDERS, ROUTES_INDEX.ADMIN_ORDERS_API),
  validate(adminGetOrdersValidator),
  adminOrdersController.getOrders
);
adminOrderRouter.get(
  extractPath(ADMIN_ORDER_ROUTES.GET_ORDER, ROUTES_INDEX.ADMIN_ORDERS_API),
  validate(adminGetOrderDetailValidator),
  authUserMiddleware,
  adminOrdersController.getOrderDetail
);

adminOrderRouter.post(
  extractPath(ADMIN_ORDER_ROUTES.CREATE_ORDER, ROUTES_INDEX.ADMIN_ORDERS_API),
  validate(adminCreateOrderValidator),
  authUserMiddleware,
  adminOrdersController.createOrder
);
adminOrderRouter.put(
  extractPath(ADMIN_ORDER_ROUTES.UPDATE_ORDER, ROUTES_INDEX.ADMIN_ORDERS_API),
  validate(adminUpdateOrderValidator),
  adminOrdersController.updateOrder
);
adminOrderRouter.delete(
  extractPath(ADMIN_ORDER_ROUTES.DELETE_ORDER, ROUTES_INDEX.ADMIN_ORDERS_API),
  validate(adminDeleteOrderValidator),
  adminOrdersController.deleteOrder
);

export default adminOrderRouter;
