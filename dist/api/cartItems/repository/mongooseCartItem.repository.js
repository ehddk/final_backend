"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseCartItemRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const cartItem_schema_1 = require("@/api/cartItems/model/cartItem.schema");
const cart_schema_1 = require("@/api/carts/model/cart.schema");
const product_schema_1 = require("@/api/products/model/product.schema");
class MongooseCartItemRepository {
    async save(cartId, cartItem) {
        const cart = await cart_schema_1.MongooseCart.findById(cartId);
        if (!cart) {
            throw new Error(`Cart with id ${cartId} not found`);
        }
        const productId = cartItem.product.id || cartItem.product;
        const product = await product_schema_1.MongooseProduct.findById(productId);
        if (!product) {
            throw new Error(`Cart with id ${productId} not found`);
        }
        const newCartItem = new cartItem_schema_1.MongooseCartItem({
            ...cartItem,
            cartId: cart.id,
            product: product,
        });
        await newCartItem.save();
        return newCartItem;
    }
    async findAll() {
        return await cartItem_schema_1.MongooseCartItem.find().populate("product");
    }
    async findById(id) {
        try {
            const cartItem = await cartItem_schema_1.MongooseCartItem.findById(id)
                .populate({ path: "product" })
                .exec();
            return cartItem;
        }
        catch (error) {
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
                return null;
            }
            throw error;
        }
    }
    async update(cartItemId, updateCartItemInfo) {
        const results = await cartItem_schema_1.MongooseCartItem.findByIdAndUpdate(cartItemId, updateCartItemInfo);
        if (!results) {
            throw new http_exception_1.default(404, "주문 상품을 찾을 수 없습니다.");
        }
        return results;
    }
    async delete(cartItemId) {
        await cartItem_schema_1.MongooseCartItem.deleteOne({ _id: cartItemId });
        return;
    }
}
exports.MongooseCartItemRepository = MongooseCartItemRepository;
//# sourceMappingURL=mongooseCartItem.repository.js.map