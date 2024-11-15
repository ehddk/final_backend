import express from "express";
import AdminOrderItemsController from "@/api/orderItems/controller/adminOrderItems.controller";
import { OrderItemsServiceImpl } from "@/api/orderItems/service/orderItems.service";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  createOrderItemValidator,
  deleteOrderItemValidator,
  getOrderItemDetailValidator,
  getOrderItemsValidator,
  updateOrderItemValidator,
} from "@/api/orderItems/dto/validations/orderItem.validation";
import { MongooseOrderItemRepository } from "@/api/orderItems/repository/mongooseOrderItem.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { MongooseOrderRepository } from "@/api/orders/repository/mongooseOrder.repository";
import { MongooseProductRepository } from "@/api/products/repository/mongooseProduct.repository";

const adminOrderItemRouter = express.Router();

/*관리자 주문 상품 관련 API 객체*/
const ADMIN_ORDER_ITEM_ROUTES = {
  /**주문 상품 목록 조회 (관리자) */
  GET_ORDER_ITEMS: `/admin-api/orderItems`,
  /**주문 상품 상세 조회 (관리자) */
  GET_ORDER_ITEM: `/admin-api/orderItems/:orderItemId`,
  /**주문 상품 생성 (관리자)  */
  CREATE_ORDER_ITEM: `/admin-api/orderItems`,
  /**주문 상품 수정 (관리자) */
  UPDATE_ORDER_ITEM: `/admin-api/orderItems/:orderItemId`,
  /**주문 상품 삭제 (관리자) */
  DELETE_ORDER_ITEM: `/admin-api/orderItems/:orderItemId`,
} as const;

const adminOrderItemsController = new AdminOrderItemsController(
  new OrderItemsServiceImpl(
    new MongooseOrderItemRepository(),
    new MongooseOrderRepository(),
    new MongooseProductRepository()
  )
);

adminOrderItemRouter.get(
  extractPath(
    ADMIN_ORDER_ITEM_ROUTES.GET_ORDER_ITEMS,
    ROUTES_INDEX.ADMIN_ORDER_ITEMS_API
  ),
  validate(getOrderItemsValidator),
  adminOrderItemsController.getOrderItems
);
adminOrderItemRouter.get(
  extractPath(
    ADMIN_ORDER_ITEM_ROUTES.GET_ORDER_ITEM,
    ROUTES_INDEX.ADMIN_ORDER_ITEMS_API
  ),
  validate(getOrderItemDetailValidator),
  authUserMiddleware,
  adminOrderItemsController.getOrderItemDetail
);
adminOrderItemRouter.post(
  extractPath(
    ADMIN_ORDER_ITEM_ROUTES.CREATE_ORDER_ITEM,
    ROUTES_INDEX.ADMIN_ORDER_ITEMS_API
  ),
  validate(createOrderItemValidator),
  authUserMiddleware,
  adminOrderItemsController.createOrderItem
);
adminOrderItemRouter.put(
  extractPath(
    ADMIN_ORDER_ITEM_ROUTES.UPDATE_ORDER_ITEM,
    ROUTES_INDEX.ADMIN_ORDER_ITEMS_API
  ),
  validate(updateOrderItemValidator),
  adminOrderItemsController.updateOrderItem
);
adminOrderItemRouter.delete(
  extractPath(
    ADMIN_ORDER_ITEM_ROUTES.DELETE_ORDER_ITEM,
    ROUTES_INDEX.ADMIN_ORDER_ITEMS_API
  ),
  validate(deleteOrderItemValidator),
  adminOrderItemsController.deleteOrderItem
);

export default adminOrderItemRouter;
