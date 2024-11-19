"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemResponseDTO = void 0;
class CartItemResponseDTO {
    id;
    product;
    quantity;
    totalPrice;
    cartId;
    constructor(params) {
        this.id = params.id;
        this.product = {
            id: params.product.id,
            productName: params.product.productName,
            sales: params.product.sales,
        };
        this.quantity = params.quantity;
        this.totalPrice = params.totalPrice;
        this.cartId = params.cartId;
    }
}
exports.CartItemResponseDTO = CartItemResponseDTO;
//# sourceMappingURL=cartItemResponse.dto.js.map