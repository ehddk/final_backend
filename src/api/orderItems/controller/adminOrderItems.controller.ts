import { NextFunction, Request, Response } from "express";
import { OrderItemsService } from "@/api/orderItems/service/orderItems.service.type";

export default class AdminOrderItemsController {
  private readonly _orderItemsService: OrderItemsService;
  constructor(_orderItemsService: OrderItemsService) {
    this._orderItemsService = _orderItemsService;

    this.getOrderItems = this.getOrderItems.bind(this);
    this.getOrderItemDetail = this.getOrderItemDetail.bind(this);
    this.createOrderItem = this.createOrderItem.bind(this);
    this.updateOrderItem = this.updateOrderItem.bind(this);
    this.deleteOrderItem = this.deleteOrderItem.bind(this);
  }

  async getOrderItems(
    req: Request<
      adminGetOrderItemsRequest["path"],
      adminGetOrderItemsResponse,
      adminGetOrderItemsRequest["body"],
      adminGetOrderItemsRequest["params"]
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

  async getOrderItemDetail(
    req: Request<
      adminGetOrderItemDetailRequest["path"],
      adminGetOrderItemDetailResponse,
      adminGetOrderItemDetailRequest["body"],
      adminGetOrderItemDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orderItemDetail = await this._orderItemsService.getOrderItemDetail(
        req.params.orderItemId
      );

      res.send(orderItemDetail);
    } catch (error) {
      next(error);
    }
  }

  async createOrderItem(
    req: Request<
      adminCreateOrderItemRequest["path"],
      adminCreateOrderItemResponse,
      adminCreateOrderItemRequest["body"],
      adminCreateOrderItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { quantity, totalPrice, orderId } = req.body;

    const orderItemStatus = "PAYMENT_PENDING";

    try {
      const createdOrderItem = await this._orderItemsService.createOrderItem(
        req.user.userId,
        { quantity, totalPrice, orderItemStatus, orderId}
      );
      res.send(createdOrderItem);
    } catch (error) {
      next(error);
    }
  }

  async updateOrderItem(
    req: Request<
      adminUpdateOrderItemRequest["path"],
      adminUpdateOrderItemResponse,
      adminUpdateOrderItemRequest["body"],
      adminUpdateOrderItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderItemId } = req.params;

    try {
      await this._orderItemsService.updateOrderItem(orderItemId, req.body);

      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  async deleteOrderItem(
    req: Request<
      adminDeleteOrderItemRequest["path"],
      adminDeleteOrderItemResponse,
      adminDeleteOrderItemRequest["body"],
      adminDeleteOrderItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderItemId } = req.params;
    try {
      await this._orderItemsService.deleteOrderItem(orderItemId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
