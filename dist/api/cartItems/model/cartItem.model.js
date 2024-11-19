"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
class CartItem {
    id;
    product;
    quantity;
    totalPrice;
    cartId;
    constructor(params) {
        this.id = params.id;
        this.product = params.product;
        this.quantity = params.quantity;
        this.totalPrice = params.totalPrice;
        this.cartId = params.cartId;
    }
}
exports.CartItem = CartItem;
//# sourceMappingURL=cartItem.model.js.map