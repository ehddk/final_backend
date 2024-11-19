"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductController {
    _productsService;
    constructor(_productsService) {
        this._productsService = _productsService;
        this.getProducts = this.getProducts.bind(this);
        this.getProductDetail = this.getProductDetail.bind(this);
    }
    /**제품 목록 조회 */
    async getProducts(req, res, next) {
        try {
            const products = await this._productsService.getProducts();
            res.send(products);
            // res.send('목록 조회')
        }
        catch (error) {
            next(error);
        }
    }
    /**제품 상세 조회 */
    async getProductDetail(req, res, next) {
        try {
            const product = await this._productsService.getProductDetail(req.params.productId);
            // req.params.productId // productId가 params에서 올바르게 가져와지도록 수정됨
            res.send(product);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map