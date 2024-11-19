"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseOrderItemRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const orderItem_schema_1 = require("@/api/orders/model/orderItem.schema");
const product_schema_1 = require("@/api/products/model/product.schema");
class MongooseOrderItemRepository {
    async save(orderItem) {
        const productId = orderItem.product.id;
        const product = await product_schema_1.MongooseProduct.findById(productId);
        if (!product) {
            throw new Error(`Order with id ${productId} not found`);
        }
        const newOrderItem = new orderItem_schema_1.MongooseOrderItem({
            ...orderItem,
            product: product,
        });
        await newOrderItem.save();
        return newOrderItem;
    }
    async findAll() {
        return await orderItem_schema_1.MongooseOrderItem.find().populate("product");
    }
    async findById(id) {
        try {
            const orderItem = await orderItem_schema_1.MongooseOrderItem.findById(id)
                .populate({ path: "product" })
                .exec();
            return orderItem;
        }
        catch (error) {
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
                return null;
            }
            throw error;
        }
    }
    async update(orderItemId, updateOrderItemInfo) {
        const results = await orderItem_schema_1.MongooseOrderItem.findByIdAndUpdate(orderItemId, updateOrderItemInfo);
        if (!results) {
            throw new http_exception_1.default(404, "주문 상품을 찾을 수 없습니다.");
        }
        return results;
    }
    async delete(orderItemId) {
        await orderItem_schema_1.MongooseOrderItem.deleteOne({ _id: orderItemId });
        return;
    }
}
exports.MongooseOrderItemRepository = MongooseOrderItemRepository;
//# sourceMappingURL=mongooseOrderItem.repository.js.map