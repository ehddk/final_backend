"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartsServiceImpl = void 0;
const cartResponse_dto_1 = require("@/api/carts/dto/cartResponse.dto");
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
class CartsServiceImpl {
    _cartRepository;
    constructor(_cartRepository) {
        this._cartRepository = _cartRepository;
    }
    /** 장바구니 생성 */
    async createCart(params) {
        const cart = await this._cartRepository.save({
            ...params,
            userId: params.userId,
            cartItem: params.cartItem || [],
        });
        return new cartResponse_dto_1.CartResponseDTO(cart);
    }
    /** 장바구니 조회 */
    async getCart(userId) {
        const cart = await this._cartRepository.findOneByUserId(userId);
        if (!cart) {
            throw new http_exception_1.default(404, "아이디를 찾을 수 없습니다.");
        }
        return new cartResponse_dto_1.CartResponseDTO(cart);
    }
    /** 장바구니 업데이트 */
    async updateCart(cartId, updatedCart) {
        const findCart = await this._cartRepository.findById(cartId);
        if (!findCart)
            throw new http_exception_1.default(404, "장바구니를 찾을 수 없습니다.");
        await this._cartRepository.update(cartId, {
            ...updatedCart,
            cartItem: updatedCart?.cartItem || findCart.cartItem,
        });
        return;
    }
    async deleteCart(cartId) {
        await this._cartRepository.delete(cartId);
    }
}
exports.CartsServiceImpl = CartsServiceImpl;
//# sourceMappingURL=carts.service.js.map