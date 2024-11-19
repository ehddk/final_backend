"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseOrderRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const order_schema_1 = require("@/api/orders/model/order.schema");
class MongooseOrderRepository {
    async findAllWithPagination({ userId, offset, limit, }) {
        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 10;
        // 주문 목록 조회 및 페이지네이션 적용
        const list = await order_schema_1.MongooseOrder.find({ userId })
            .limit(limitValue)
            .skip(offsetValue)
            .populate({
            path: "orderItem",
            populate: {
                path: "product",
            },
        })
            .populate("userInfo")
            .sort({ createdAt: -1 });
        console.log("list:", list);
        const totalCount = await order_schema_1.MongooseOrder.find({ userId }).countDocuments();
        return {
            totalCount,
            results: list,
            prev: offsetValue - limitValue >= 0
                ? `?offset=${offsetValue - limitValue}&limit=${limitValue}`
                : null,
            next: offsetValue + limitValue < totalCount
                ? `?offset=${offsetValue + limitValue}&limit=${limitValue}`
                : null,
        };
    }
    async save(order) {
        const newOrder = new order_schema_1.MongooseOrder({
            ...order,
            userInfo: order.userInfo,
        });
        await newOrder.save();
        return newOrder;
    }
    async findAll(userId) {
        const orders = await order_schema_1.MongooseOrder.find({ userId })
            .populate({
            path: "orderItem",
            populate: {
                path: "product", // orderItem 안의 product를 populate
            },
        })
            .populate("userInfo");
        console.log("orders:", orders);
        return orders;
    }
    async findById(orderId) {
        const order = await order_schema_1.MongooseOrder.findById(orderId)
            .populate({
            path: "orderItem",
            populate: {
                path: "product", // orderItem 안의 product를 populate
            },
        })
            .populate("userInfo");
        if (!order) {
            throw new http_exception_1.default(404, "주문을 찾을 수 없습니다.");
        }
        return order;
    }
    async update(orderId, updateOrderInfo) {
        const updatedOrder = await order_schema_1.MongooseOrder.findByIdAndUpdate(orderId, updateOrderInfo, { new: true })
            .populate({
            path: "orderItem",
            populate: {
                path: "product", // orderItem 안의 product를 populate
            },
        })
            .populate("userInfo");
        if (!updatedOrder) {
            throw new http_exception_1.default(404, "주문을 찾을 수 없습니다.");
        }
        return updatedOrder;
    }
    async delete(orderId) {
        await order_schema_1.MongooseOrder.deleteOne({ _id: orderId });
        return;
    }
}
exports.MongooseOrderRepository = MongooseOrderRepository;
//# sourceMappingURL=mongooseOrder.repository.js.map