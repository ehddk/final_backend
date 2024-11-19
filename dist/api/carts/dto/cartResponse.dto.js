"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartResponseDTO = void 0;
const cartItemResponse_dto_1 = require("@/api/cartItems/dto/cartItemResponse.dto");
class CartResponseDTO {
    id;
    cartItem;
    totalProductPrice;
    shippingFee;
    totalPaymentAmount;
    userId;
    constructor(params) {
        this.id = params.id;
        this.cartItem = params.cartItem
            ? params.cartItem.map((cartItem) => new cartItemResponse_dto_1.CartItemResponseDTO(cartItem))
            : [];
        this.totalProductPrice = params.totalProductPrice;
        this.shippingFee = params.shippingFee;
        this.totalPaymentAmount = params.totalPaymentAmount;
        this.userId = params.userId;
    }
}
exports.CartResponseDTO = CartResponseDTO;
//# sourceMappingURL=cartResponse.dto.js.map