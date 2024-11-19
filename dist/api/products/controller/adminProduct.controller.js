"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminProductController {
    _adminProductService;
    constructor(_adminProductService) {
        this._adminProductService = _adminProductService;
        this.getProducts = this.getProducts.bind(this);
        this.getProductDetail = this.getProductDetail.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }
    async getProducts(req, res, next) {
        try {
            const products = await this._adminProductService.getProducts();
            console.log('rpdi', products);
            res.send(products);
            // res.send('관리자 제품 목록 조회')
        }
        catch (error) {
            next(error);
        }
    }
    async getProductDetail(req, res, next) {
        try {
            const product = await this._adminProductService.getProductDetail(req.params.productId);
            console.log('productdetail', product);
            res.send(product);
        }
        catch (error) {
            next(error);
        }
    }
    async createProduct(req, res, next) {
        const { productName, price, sales, thumbnail, img, delivery, description, seller, packageType, detail, rdate, category } = req.body;
        try {
            const product = await this._adminProductService.createProduct({
                productName,
                price,
                sales,
                thumbnail,
                img,
                delivery,
                seller,
                description,
                packageType,
                detail,
                rdate,
                category
            });
            res.send(product);
            // console.log('dpro',product)
        }
        catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        const { productId } = req.params;
        try {
            await this._adminProductService.updateProduct(productId, req.body);
            res.send('수정 성공');
        }
        catch (error) {
            next(error);
        }
    }
    async deleteProduct(req, res, next) {
        const { productId } = req.params;
        try {
            await this._adminProductService.deleteProduct(productId);
            res.send("삭제 성공");
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminProductController;
//# sourceMappingURL=adminProduct.controller.js.map