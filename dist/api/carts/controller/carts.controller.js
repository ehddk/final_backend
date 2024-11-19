"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartsController {
    _cartsService;
    constructor(_cartsService) {
        this._cartsService = _cartsService;
        this.createCart = this.createCart.bind(this);
        this.getCart = this.getCart.bind(this);
        this.updateCart = this.updateCart.bind(this);
    }
    /** 장바구니 생성 */
    async createCart(req, res, next) {
        try {
            const cart = await this._cartsService.createCart({
                totalProductPrice: req.body.totalProductPrice,
                shippingFee: req.body.shippingFee,
                totalPaymentAmount: req.body.totalPaymentAmount,
                cartItem: req.body.cartItem || [],
                userId: req.user.userId,
            });
            res.send(cart);
        }
        catch (error) {
            next(error);
        }
    }
    /** 장바구니 조회 */
    async getCart(req, res, next) {
        try {
            const userId = req.user.userId;
            const cart = await this._cartsService.getCart(userId);
            res.send(cart);
        }
        catch (error) {
            next(error);
        }
    }
    /** 장바구니 업데이트 */
    async updateCart(req, res, next) {
        const { cartId } = req.params;
        try {
            const updatedCart = await this._cartsService.updateCart(cartId, req.body);
            res.send(updatedCart);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = CartsController;
//# sourceMappingURL=carts.controller.js.map