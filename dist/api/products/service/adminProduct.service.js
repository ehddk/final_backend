"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProductServiceImpl = void 0;
const http_exception_1 = __importDefault(require("../../common/exceptions/http.exception"));
class AdminProductServiceImpl {
    _productRepository;
    constructor(productRepository) {
        this._productRepository = productRepository;
    }
    /**제품 등록 */
    async createProduct(product) {
        try {
            // const newProduct ={
            //     id:'123',
            //     ...product
            // };
            const newProduct = await this._productRepository.save({
                ...product,
                // createdAt:new Date()
            });
            return newProduct;
        }
        catch (error) {
            throw new Error(`제품 생성 중 오류가 발생했습니다`);
        }
    }
    /**제품 목록 조회 */
    async getProducts() {
        try {
            const products = await this._productRepository.findAll();
            return products;
            //  return [...this.products];
        }
        catch (error) {
            throw new Error(`제품 목록 조회 중 오류가 발생했습니다`);
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
            throw new Error(`제품 상세 조회 중 오류가 발생했습니다`);
        }
    }
    /**제품 삭제 */
    async deleteProduct(productId) {
        await this._productRepository.delete(productId);
    }
    /**제품 수정 */
    async updateProduct(productId, updateProduct) {
        await this._productRepository.update(productId, updateProduct);
        return;
    }
}
exports.AdminProductServiceImpl = AdminProductServiceImpl;
//# sourceMappingURL=adminProduct.service.js.map