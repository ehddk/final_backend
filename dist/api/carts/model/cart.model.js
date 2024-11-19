"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
class Cart {
    id;
    cartItem;
    totalProductPrice;
    shippingFee;
    totalPaymentAmount;
    userId;
    constructor(params) {
        this.id = params.id;
        this.cartItem = params.cartItem;
        this.totalProductPrice = params.totalProductPrice;
        this.shippingFee = params.shippingFee;
        this.totalPaymentAmount = params.totalPaymentAmount;
        this.userId = params.userId;
    }
}
exports.Cart = Cart;
//# sourceMappingURL=cart.model.js.map