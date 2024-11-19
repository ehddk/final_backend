import { NextFunction, Request, Response } from "express";
import { OrdersService } from "@/api/orders/service/orders.service.type";
export default class AdminOrdersController {
    private readonly _ordersService;
    constructor(_ordersService: OrdersService);
    /** 주문 목록 조회 */
    getOrders(req: Request<adminGetOrdersRequest["path"], adminGetOrdersResponse, adminGetOrdersRequest["body"], adminGetOrdersRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 주문 상세 조회 */
    getOrderDetail(req: Request<adminGetOrderDetailRequest["path"], adminGetOrderDetailResponse, adminGetOrderDetailRequest["body"], adminGetOrderDetailRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 주문 생성 */
    createOrder(req: Request<adminCreateOrderRequest["path"], adminCreateOrderResponse, adminCreateOrderRequest["body"], adminCreateOrderRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 주문 수정 */
    updateOrder(req: Request<adminUpdateOrderRequest["path"], adminUpdateOrderResponse, adminUpdateOrderRequest["body"], adminUpdateOrderRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 주문 삭제 */
    deleteOrder(req: Request<adminDeleteOrderRequest["path"], adminDeleteOrderResponse, adminDeleteOrderRequest["body"], adminDeleteOrderRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
