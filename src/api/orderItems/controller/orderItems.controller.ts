import { NextFunction, Request, Response } from "express";
import { OrderItemsService } from "@/api/orderItems/service/orderItems.service.type";

export default class OrderItemsController {
  private readonly _orderItemsService: OrderItemsService;
  constructor(_orderItemsService: OrderItemsService) {
    this._orderItemsService = _orderItemsService;

    this.getOrderItems = this.getOrderItems.bind(this);
    this.createOrderItem = this.createOrderItem.bind(this);
    this.updateOrderItem = this.updateOrderItem.bind(this);
    this.deleteOrderItem = this.deleteOrderItem.bind(this);
  }

  /** 주문 상품 목록 조회 */
  async getOrderItems(
    req: Request<
      getOrderItemsRequest["path"],
      getOrderItemsResponse,
      getOrderItemsRequest["body"],
      getOrderItemsRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orderItems = await this._orderItemsService.getOrderItems();
      res.send(orderItems);
    } catch (error) {
      next(error);
    }
  }

  /** 주문 상품 작성 */
  async createOrderItem(
    req: Request<
      createOrderItemRequest["path"],
      createOrderItemResponse,
      createOrderItemRequest["body"],
      createOrderItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { product, quantity, totalPrice, productName, sales } =
      req.body;

    const orderItemStatus = "PAYMENT_PENDING";
    try {
      const createdOrderItem = await this._orderItemsService.createOrderItem(
        req.user.userId,
        {
          product,
          quantity,
          totalPrice,
          orderItemStatus,
          productName,
          sales,
        }
      );

      res.send(createdOrderItem);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  /** 주문 상품 수정 */
  async updateOrderItem(
    req: Request<
      updateOrderItemRequest["path"],
      updateOrderItemResponse,
      updateOrderItemRequest["body"],
      updateOrderItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderItemId } = req.params;
    try {
      const orderItem = await this._orderItemsService.updateOrderItem(
        orderItemId,
        req.body
      );

      res.send(orderItem);
    } catch (error) {
      next(error);
    }
  }

  /** 주문 상품 삭제 */
  async deleteOrderItem(
    req: Request<
      deleteOrderItemRequest["path"],
      deleteOrderItemResponse,
      deleteOrderItemRequest["body"],
      deleteOrderItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderItemId } = req.params;

    try {
      await this._orderItemsService.deleteOrderItem(orderItemId);

      res.send("삭제 성공");
    } catch (error) {
      next(error);
    }
  }
}
