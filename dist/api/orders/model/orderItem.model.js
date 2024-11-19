"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
class OrderItem {
    id;
    product;
    quantity;
    totalPrice;
    orderItemStatus;
    constructor(params) {
        this.id = params.id;
        this.product = params.product;
        this.quantity = params.quantity;
        this.totalPrice = params.totalPrice;
        this.orderItemStatus = params.orderItemStatus;
    }
}
exports.OrderItem = OrderItem;
//# sourceMappingURL=orderItem.model.js.map