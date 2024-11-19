"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServiceImpl = void 0;
const http_exception_1 = __importDefault(require("../../common/exceptions/http.exception"));
class ProductsServiceImpl {
    _productRepository;
    constructor(productRepository) {
        this._productRepository = productRepository;
    }
    /**제품 목록 조회 */
    async getProducts() {
        try {
            const products = await this._productRepository.findAll();
            return products;
        }
        catch (error) {
            throw new Error('제품 목록 조회 중 오류가 발생했습니다.');
        }
    }
    /**제품 상세 조회 */
    async getProductDetail(productId) {
        try {
            const product = await this._productRepository.findById(productId);
            if (!product) {
                throw new http_exception_1.default(404, "해당 제품을 찾을 수 없습니다.");
            }
            //const product=this.products.find(item=>item.id === productId);
            return product || null;
        }
        catch (error) {
            throw new Error(`해당 제품이 없습니다.`);
        }
    }
}
exports.ProductsServiceImpl = ProductsServiceImpl;
//# sourceMappingURL=products.service.js.map