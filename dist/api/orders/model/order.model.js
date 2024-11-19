"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    id;
    userId;
    userInfo;
    deliveryAddress;
    deliveryRequest;
    createdAt;
    paymentMethod;
    orderItem;
    totalProductPrice;
    shippingFee;
    totalPaymentAmount;
    orderStatus;
    constructor(params) {
        this.id = params.id;
        this.userId = params.userId;
        this.userInfo = params.userInfo;
        this.deliveryAddress = params.deliveryAddress;
        this.deliveryRequest = params.deliveryRequest;
        this.createdAt = params.createdAt;
        this.paymentMethod = params.paymentMethod;
        this.orderItem = params.orderItem;
        this.totalProductPrice = params.totalProductPrice;
        this.shippingFee = params.shippingFee;
        this.totalPaymentAmount = params.totalPaymentAmount;
        this.orderStatus = params.orderStatus;
    }
}
exports.Order = Order;
//# sourceMappingURL=order.model.js.map