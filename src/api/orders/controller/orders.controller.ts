import { NextFunction, Request, Response } from "express";
import { OrdersService } from "@/api/orders/service/orders.service.type";

export default class OrdersController {
  private readonly _ordersService: OrdersService;

  constructor(_ordersService: OrdersService) {
    this._ordersService = _ordersService;

    this.getOrders = this.getOrders.bind(this);
    this.getOrderDetail = this.getOrderDetail.bind(this);
    this.createOrder = this.createOrder.bind(this);
    this.updateOrder = this.updateOrder.bind(this);
  }

  /** 주문 목록 조회 */
  async getOrders(
    req: Request<
      getOrdersRequest["path"],
      getOrdersResponse,
      getOrdersRequest["body"],
      getOrdersRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { limit, offset } = req.query;

    const userId = req.user.userId;

    try {
      const orders = await this._ordersService.getOrders({
        userId,
        limit,
        offset,
      });

      res.send(orders);
    } catch (error) {
      next(error);
    }
  }

  /** 주문 상세 조회 */
  async getOrderDetail(
    req: Request<
      getOrderDetailRequest["path"],
      getOrderDetailResponse,
      getOrderDetailRequest["body"],
      getOrderDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderId } = req.params;
    try {
      const order = await this._ordersService.getOrderDetail(orderId);
      res.send(order);
    } catch (error) {
      next(error);
    }
  }

  /** 주문 생성 */
  async createOrder(
    req: Request<
      createOrderRequest["path"],
      createOrderResponse,
      createOrderRequest["body"],
      createOrderRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const orderStatus = "PAYMENT_PENDING";
    const {
      deliveryAddress,
      deliveryRequest,
      paymentMethod,
      orderItem,
      totalProductPrice,
      shippingFee,
      totalPaymentAmount,
    } = req.body;

    try {
      const order = await this._ordersService.createOrder(req.user.userId, {
        deliveryAddress,
        deliveryRequest,
        paymentMethod,
        orderItem,
        totalProductPrice,
        shippingFee,
        totalPaymentAmount,
        orderStatus,
      });

      // orderItem이 있는 경우 개별적으로 createOrderItem 호출
      // if (orderItem && Array.isArray(orderItem)) {
      //   for (const item of orderItem) {
      //     await this._orderItemsService.createOrderItem(order.orderId, item);
      //   }
      // }

      res.send(order);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  /** 주문 수정 */
  async updateOrder(
    req: Request<
      updateOrderRequest["path"],
      updateOrderResponse,
      updateOrderRequest["body"],
      updateOrderRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { orderId } = req.params;
    const { deliveryRequest, orderStatus } = req.body;
    try {
      await this._ordersService.updateOrder(orderId, {
        deliveryRequest,
        orderStatus,
      });
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
}
