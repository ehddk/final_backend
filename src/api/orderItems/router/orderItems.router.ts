import express from "express";
import OrderItemsController from "@/api/orderItems/controller/orderItems.controller";
import { OrderItemsServiceImpl } from "@/api/orderItems/service/orderItems.service";
import {
  createOrderItemValidator,
  deleteOrderItemValidator,
  getOrderItemsValidator,
  updateOrderItemValidator,
} from "@/api/orderItems/dto/validations/orderItem.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { MongooseOrderItemRepository } from "@/api/orderItems/repository/mongooseOrderItem.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { MongooseOrderRepository } from "@/api/orders/repository/mongooseOrder.repository";

const orderItemRouter = express.Router();

const ORDER_ITEM_ROUTES = {
  /** 주문 상품 목록 조회 */
  GET_ORDER_ITEMS: `/api/orderItems`,
  /** 주문 상품 생성 */
  CREATE_ORDER_ITEM: `/api/orderItems`,
  /** 주문 상품 수정 */
  UPDATE_ORDER_ITEM: `/api/orderItems/:orderItemId`,
  /** 주문 상품 삭제 */
  DELETE_ORDER_ITEM: `/api/orderItems/:orderItemId`,
} as const;

const orderItemsController = new OrderItemsController(
  new OrderItemsServiceImpl(
    new MongooseOrderItemRepository(),
    new MongooseOrderRepository()
  )
);

orderItemRouter.get(
  extractPath(ORDER_ITEM_ROUTES.GET_ORDER_ITEMS, ROUTES_INDEX.ORDER_ITEMS_API),
  authUserMiddleware,
  validate(getOrderItemsValidator),
  orderItemsController.getOrderItems
);

orderItemRouter.post(
  extractPath(
    ORDER_ITEM_ROUTES.CREATE_ORDER_ITEM,
    ROUTES_INDEX.ORDER_ITEMS_API
  ),
  authUserMiddleware,
  validate(createOrderItemValidator),
  orderItemsController.createOrderItem
);

orderItemRouter.put(
  extractPath(
    ORDER_ITEM_ROUTES.UPDATE_ORDER_ITEM,
    ROUTES_INDEX.ORDER_ITEMS_API
  ),
  authUserMiddleware,
  validate(updateOrderItemValidator),
  orderItemsController.updateOrderItem
);

orderItemRouter.delete(
  extractPath(
    ORDER_ITEM_ROUTES.DELETE_ORDER_ITEM,
    ROUTES_INDEX.ORDER_ITEMS_API
  ),
  authUserMiddleware,
  validate(deleteOrderItemValidator),
  orderItemsController.deleteOrderItem
);

export default orderItemRouter;
