"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseProductRepository = void 0;
const product_schema_1 = require("../model/product.schema");
const http_exception_1 = __importDefault(require("../../common/exceptions/http.exception"));
class MongooseProductRepository {
    async findAll() {
        const products = await product_schema_1.MongooseProduct.find();
        return products;
    }
    async findById(productId) {
        const product = await product_schema_1.MongooseProduct.findById(productId);
        console.log('productfind', product);
        return product;
    }
    async save(product) {
        try {
            const newProduct = new product_schema_1.MongooseProduct({
                ...product,
            });
            await newProduct.save();
            console.log('sdd', newProduct);
            return newProduct;
        }
        catch (error) {
            console.error("Error saving product:", error);
            throw new http_exception_1.default(500, "제품 저장 중 오류가 발생했습니다.");
        }
    }
    async update(productId, updatedProduct) {
        const results = await product_schema_1.MongooseProduct.findByIdAndUpdate(productId, updatedProduct, { new: true });
        if (!results) {
            throw new http_exception_1.default(404, "해당 제품을 수정 할 수 없습니다.");
        }
        return results;
    }
    async delete(productId) {
        await product_schema_1.MongooseProduct.deleteOne({ _id: productId });
        return;
    }
}
exports.MongooseProductRepository = MongooseProductRepository;
//# sourceMappingURL=mongooseProduct.repository.js.map