"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [관리자]
// 주문 목록 조회 - getOrders
// 주문 상세 조회 - getOrderDetail
// 주문 생성 - createOrder
// 주문 수정 - updateOrder
// 주문 삭제 - deleteOrder
class AdminOrdersController {
    _ordersService;
    constructor(_ordersService) {
        this._ordersService = _ordersService;
        this.getOrders = this.getOrders.bind(this);
        this.getOrderDetail = this.getOrderDetail.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.updateOrder = this.updateOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }
    /** 주문 목록 조회 */
    async getOrders(req, res, next) {
        const userId = req.user.userId;
        try {
            const orders = await this._ordersService.getOrders({
                userId,
                limit: req.query.limit,
                offset: req.query.offset,
            });
            res.send(orders);
        }
        catch (error) {
            next(error);
        }
    }
    /** 주문 상세 조회 */
    async getOrderDetail(req, res, next) {
        try {
            const orderDetail = await this._ordersService.getOrderDetail(req.params.orderId);
            res.send(orderDetail);
        }
        catch (error) {
            next(error);
        }
    }
    /** 주문 생성 */
    async createOrder(req, res, next) {
        const { deliveryAddress, deliveryRequest, paymentMethod, orderItem, orderStatus, totalProductPrice, shippingFee, totalPaymentAmount, } = req.body;
        try {
            const createdOrder = await this._ordersService.createOrder(req.user.userId, {
                deliveryAddress,
                deliveryRequest,
                paymentMethod,
                orderItem,
                totalProductPrice,
                shippingFee,
                totalPaymentAmount,
                orderStatus,
            });
            res.send(createdOrder);
        }
        catch (error) {
            next(error);
        }
    }
    /** 주문 수정 */
    async updateOrder(req, res, next) {
        const { orderId } = req.params;
        try {
            await this._ordersService.updateOrder(orderId, req.body);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
    /** 주문 삭제 */
    async deleteOrder(req, res, next) {
        const { orderId } = req.params;
        try {
            await this._ordersService.deleteOrder(orderId);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminOrdersController;
//# sourceMappingURL=adminOrders.controller.js.map