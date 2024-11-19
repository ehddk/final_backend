"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseCartRepository = void 0;
const cart_schema_1 = require("@/api/carts/model/cart.schema");
class MongooseCartRepository {
    /** 장바구니 생성 */
    async save(cart) {
        const newCart = new cart_schema_1.MongooseCart(cart);
        await newCart.save();
        return newCart;
    }
    async findAll() {
        const values = await cart_schema_1.MongooseCart.find().populate({
            path: "cartItem",
            populate: {
                path: "product",
            },
        });
        return values;
    }
    /** ID로 장바구니 조회 */
    async findById(id) {
        try {
            const findCart = await cart_schema_1.MongooseCart.findById(id).populate({
                path: "cartItem",
                populate: {
                    path: "product",
                },
            });
            return findCart;
        }
        catch (error) {
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
                return null;
            }
            throw error;
        }
    }
    /** userId로 장바구니 조회 */
    async findOneByUserId(userId) {
        try {
            const findCart = await cart_schema_1.MongooseCart.findOne({ userId }).populate({
                path: "cartItem",
                populate: {
                    path: "product",
                },
            });
            return findCart;
        }
        catch (error) {
            const message = error.message.toString();
            if (message.includes("Cast to ObjectId failed")) {
                return null;
            }
            throw error;
        }
    }
    /** 장바구니 업데이트 */
    async update(cartId, updateCartInfo) {
        await cart_schema_1.MongooseCart.findByIdAndUpdate(cartId, {
            ...updateCartInfo,
            cartItem: updateCartInfo.cartItem || undefined, // 예약 목록 업데이트
        }).populate({
            path: "cartItem",
            populate: {
                path: "product",
            },
        });
        return;
    }
    async delete(cartId) {
        await cart_schema_1.MongooseCart.deleteOne({ _id: cartId });
        return;
    }
}
exports.MongooseCartRepository = MongooseCartRepository;
//# sourceMappingURL=mongooseCart.repository.js.map