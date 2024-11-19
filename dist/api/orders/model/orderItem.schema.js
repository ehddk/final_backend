"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseOrderItem = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const orderItemSchema = new mongoose_1.default.Schema({
    product: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
    },
    totalPrice: {
        type: Number,
        required: true,
        min: 0,
    },
    orderItemStatus: {
        type: String,
        enum: [
            "PAYMENT_PENDING",
            "PAYMENT_COMPLETED",
            "PREPARING_FOR_SHIPPING",
            "SHIPPING",
            "SHIPPED",
            "ORDER_CANCELED",
            "REFUND_REQUESTED",
            "REFUNDED",
            "EXCHANGE_REQUESTED",
            "EXCHANGED",
        ],
        required: true,
    },
});
exports.MongooseOrderItem = mongoose_1.default.model("OrderItem", orderItemSchema);
//# sourceMappingURL=orderItem.schema.js.map