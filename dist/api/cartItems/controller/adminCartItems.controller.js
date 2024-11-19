"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminCartItemsController {
    _cartItemsService;
    constructor(_cartItemsService) {
        this._cartItemsService = _cartItemsService;
        this.getCartItems = this.getCartItems.bind(this);
        this.getCartItemDetail = this.getCartItemDetail.bind(this);
        this.createCartItem = this.createCartItem.bind(this);
        this.updateCartItem = this.updateCartItem.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
    }
    async getCartItems(req, res, next) {
        try {
            const cartItems = await this._cartItemsService.getCartItems();
            res.send(cartItems);
        }
        catch (error) {
            next(error);
        }
    }
    async getCartItemDetail(req, res, next) {
        try {
            const cartItemDetail = await this._cartItemsService.getCartItemDetail(req.params.cartItemId);
            res.send(cartItemDetail);
        }
        catch (error) {
            next(error);
        }
    }
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
            next(error);
        }
    }
    async updateCartItem(req, res, next) {
        const { cartItemId } = req.params;
        try {
            await this._cartItemsService.updateCartItem(cartItemId, req.body);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
    async deleteCartItem(req, res, next) {
        const { cartItemId } = req.params;
        try {
            await this._cartItemsService.deleteCartItem(cartItemId);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminCartItemsController;
//# sourceMappingURL=adminCartItems.controller.js.map