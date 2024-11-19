"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModel = void 0;
const product_schema_1 = require("@/api/products/model/product.schema");
/**검색 기능 */
class SearchModel {
    async searchProducts(keyword) {
        try {
            //제품명에 검색
            const products = await product_schema_1.MongooseProduct.find({
                $or: [
                    {
                        productName: { $regex: keyword, $options: 'i' } //제품명에서 검색
                    }
                ]
            });
            return products;
        }
        catch (error) {
            console.log('제품명을 찾을 수 없음.', error);
            throw new Error('search 실패');
        }
    }
}
exports.SearchModel = SearchModel;
//# sourceMappingURL=search.model.js.map