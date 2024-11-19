"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItemsController {
    _cartItemsService;
    constructor(_cartItemsService) {
        this._cartItemsService = _cartItemsService;
        this.getCartItems = this.getCartItems.bind(this);
        this.createCartItem = this.createCartItem.bind(this);
        this.updateCartItem = this.updateCartItem.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
    }
    /** 장바구니 주문 상품 목록 조회 */
    async getCartItems(req, res, next) {
        try {
            const cartItems = await this._cartItemsService.getCartItems();
            res.send(cartItems);
        }
        catch (error) {
            next(error);
        }
    }
    /** 장바구니 주문 상품 작성 */
    async createCartItem(req, res, next) {
        const { product, quantity, totalPrice, cartId } = req.body;
        try {
            const cartItem = await this._cartItemsService.createCartItem(req.user.userId, {
                product,
                quantity,
                totalPrice,
                cartId,
            });
            res.send(cartItem);
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    }
    /** 장바구니 주문 상품 수정 */
    async updateCartItem(req, res, next) {
        const { cartItemId } = req.params;
        try {
            const cartItem = await this._cartItemsService.updateCartItem(cartItemId, req.body);
            res.send(cartItem);
        }
        catch (error) {
            next(error);
        }
    }
    /** 장바구니 주문 상품 삭제 */
    async deleteCartItem(req, res, next) {
        const { cartItemId } = req.params;
        try {
            await this._cartItemsService.deleteCartItem(cartItemId);
            res.send("삭제 성공");
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = CartItemsController;
//# sourceMappingURL=cartItems.controller.js.map