import { NextFunction, Request, Response } from "express";
import { OrdersService } from "@/api/orders/service/orders.service.type";

// [관리자]
// 주문 목록 조회 - getOrders
// 주문 상세 조회 - getOrderDetail
// 주문 생성 - createOrder
// 주문 수정 - updateOrder
// 주문 삭제 - deleteOrder

export default class AdminOrdersController {
  private readonly _ordersService: OrdersService;

  constructor(_ordersService: OrdersService) {
    this._ordersService = _ordersService;

    this.getOrders = this.getOrders.bind(this);
    this.getOrderDetail = this.getOrderDetail.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  /** 주문 목록 조회 */
  async getOrders(
    req: Request<
      adminGetOrdersRequest["path"],
      adminGetOrdersResponse,
      adminGetOrdersRequest["body"],
      adminGetOrdersRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orders = await this._ordersService.getOrders({
        limit: req.query.limit,
        offset: req.query.offset,
      });
      res.send(orders);
    } catch (error) {
      next(error);
    }
  }

  /** 주문 상세 조회 */
  async getOrderDetail(
    req: Request<
      adminGetOrderDetailRequest["path"],
      adminGetOrderDetailResponse,
      adminGetOrderDetailRequest["body"],
      adminGetOrderDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const orderDetail = await this._ordersService.getOrderDetail(
        req.params.orderId
      );
      res.send(orderDetail);
    } catch (error) {
      next(error);
    }
  }

  /** 주문 생성 */
  async createOrder(
    req: Request<
      adminCreateOrderRequest["path"],
      adminCreateOrderResponse,
      adminCreateOrderRequest["body"],
      adminCreateOrderRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const {
      deliveryAddress,
      deliveryRequest,
      paymentMethod,
      orderItem,
      orderStatus,
      totalProductPrice,
      shippingFee,
      totalPaymentAmount,
    } = req.body;

    try {
      const createdOrder = await this._ordersService.createOrder(
        req.user.userId,
        {
          deliveryAddress,
          deliveryRequest,
          paymentMethod,
          totalProductPrice,
          shippingFee,
          totalPaymentAmount,
          orderStatus,
        }
      );
      res.send(createdOrder);
    } catch (error) {
      next(error);
    }
  }

  /** 주문 수정 */
  async updateOrder(
    req: Request<
      adminUpdateOrderRequest["path"],
      adminUpdateOrderResponse,
      adminUpdateOrderRequest["body"],
      adminUpdateOrderRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderId } = req.params;

    try {
      await this._ordersService.updateOrder(orderId, req.body);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  /** 주문 삭제 */
  async deleteOrder(
    req: Request<
      adminDeleteOrderRequest["path"],
      adminDeleteOrderResponse,
      adminDeleteOrderRequest["body"],
      adminDeleteOrderRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderId } = req.params;
    try {
      await this._ordersService.deleteOrder(orderId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
