import { NextFunction, Request, Response } from "express";
import { OrdersService } from "@/api/orders/service/orders.service.type";
export default class OrdersController {
    private readonly _ordersService;
    constructor(_ordersService: OrdersService);
    /** 주문 목록 조회 */
    getOrders(req: Request<getOrdersRequest["path"], getOrdersResponse, getOrdersRequest["body"], getOrdersRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 주문 상세 조회 */
    getOrderDetail(req: Request<getOrderDetailRequest["path"], getOrderDetailResponse, getOrderDetailRequest["body"], getOrderDetailRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 주문 생성 */
    createOrder(req: Request<createOrderRequest["path"], createOrderResponse, createOrderRequest["body"], createOrderRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 주문 수정 */
    updateOrder(req: Request<updateOrderRequest["path"], updateOrderResponse, updateOrderRequest["body"], updateOrderRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
