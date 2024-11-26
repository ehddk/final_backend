import express from "express";

import {
  getOrderDetailValidator,
  getOrdersValidator,
} from "@/api/orders/dto/validations/order.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";

import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import OrdersController from "@/api/orders/controller/orders.controller";
import { OrdersServiceImpl } from "@/api/orders/service/orders.service";
import { MongooseOrderRepository } from "@/api/orders/repository/mongooseOrder.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseOrderItemRepository } from "../repository/mongooseOrderItem.repository";

const orderRouter = express.Router();

const ORDER_ROUTES = {
  /** 주문 목록 조회 */
  GET_ORDERS: `/api/orders`,
  /** 주문 상세 조회 */
  GET_ORDER: `/api/orders/:orderId`,
  /** 주문 생성 */
  CREATE_ORDER: `/api/orders`,
  /** 주문 수정 */
  UPDATE_ORDER: `/api/orders/:orderId`,

} as const;

const ordersController = new OrdersController(
  new OrdersServiceImpl(
    new MongooseOrderRepository(),
    new MongooseUserRepository(),
    new MongooseOrderItemRepository()
  )
);

orderRouter.get(
  extractPath(ORDER_ROUTES.GET_ORDERS, ROUTES_INDEX.ORDERS_API),
  validate(getOrdersValidator),
  authUserMiddleware,
  ordersController.getOrders
);
orderRouter.get(
  extractPath(ORDER_ROUTES.GET_ORDER, ROUTES_INDEX.ORDERS_API),
  validate(getOrderDetailValidator),
  authUserMiddleware,
  ordersController.getOrderDetail
);
orderRouter.post(
  extractPath(ORDER_ROUTES.CREATE_ORDER, ROUTES_INDEX.ORDERS_API),
  authUserMiddleware,
  ordersController.createOrder
);

orderRouter.put(
  extractPath(ORDER_ROUTES.UPDATE_ORDER, ROUTES_INDEX.ORDERS_API),
  authUserMiddleware,
  ordersController.updateOrder
);

export default orderRouter;
