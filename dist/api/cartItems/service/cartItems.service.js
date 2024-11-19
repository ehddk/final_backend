"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemsServiceImpl = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const cartItemResponse_dto_1 = require("@/api/cartItems/dto/cartItemResponse.dto");
class CartItemsServiceImpl {
    _cartItemRepository;
    _cartRepository;
    _productRepository;
    _userRepository;
    constructor(cartItemRepository, cartRepository, userRepository, productRepository) {
        this._cartItemRepository = cartItemRepository;
        this._cartRepository = cartRepository;
        this._userRepository = userRepository;
        this._productRepository = productRepository;
    }
    async createCartItem(userId, cartItem) {
        const cart = await this._cartRepository.findOneByUserId(userId);
        console.log("userId:", userId);
        console.log("cart:", cart);
        if (!cart) {
            throw new http_exception_1.default(404, "장바구니를 찾을 수 없습니다.");
        }
        console.log("cartItem:", cartItem);
        console.log("cartItem.product:", cartItem.product);
        const productId = typeof cartItem.product === "string"
            ? cartItem.product
            : cartItem.product?.id;
        if (!productId) {
            throw new http_exception_1.default(400, "상품 ID가 유효하지 않습니다.");
        }
        const product = await this._productRepository.findById(productId);
        console.log("product:", product);
        if (!product) {
            throw new http_exception_1.default(404, "해당 상품를 찾을 수 없습니다.");
        }
        const newCartItem = {
            id: "",
            ...cartItem,
            cartId: cart.id,
            product,
            quantity: cartItem.quantity,
            totalPrice: cartItem.totalPrice,
        };
        const savedCartItem = await this._cartItemRepository.save(cart.id, newCartItem);
        const updatedCartItem = cart.cartItem
            ? cart.cartItem.concat(savedCartItem)
            : [savedCartItem];
        await this._cartRepository.update(cart.id, {
            cartItem: updatedCartItem,
        });
        return new cartItemResponse_dto_1.CartItemResponseDTO(savedCartItem);
    }
    async getCartItems() {
        const cartItems = await this._cartItemRepository.findAll();
        const newList = await Promise.all(cartItems.map((cartItem) => new cartItemResponse_dto_1.CartItemResponseDTO(cartItem)));
        return newList;
    }
    async getCartItemDetail(cartItemId) {
        const cartItem = await this._cartItemRepository.findById(cartItemId);
        if (!cartItem) {
            throw new http_exception_1.default(404, "주문 상품을 찾을 수 없습니다.");
        }
        return new cartItemResponse_dto_1.CartItemResponseDTO(cartItem);
    }
    async updateCartItem(cartItemId, updatedCartItem) {
        await this._cartItemRepository.update(cartItemId, updatedCartItem);
    }
    async deleteCartItem(cartItemId) {
        await this._cartItemRepository.delete(cartItemId);
    }
}
exports.CartItemsServiceImpl = CartItemsServiceImpl;
//# sourceMappingURL=cartItems.service.js.map