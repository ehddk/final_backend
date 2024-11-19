"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseOrder = void 0;
const mongoose_1 = __importDefault(require("@/vendors/mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
    },
    userInfo: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
    },
    deliveryAddress: {
        type: String,
        required: true,
    },
    deliveryRequest: {
        type: String,
        required: false,
    },
    paymentMethod: {
        type: String,
        enum: ["CREDIT_CARD", "SIMPLE_PAY", "MOBILE_PAYMENT", "KAKAO_PAY"],
        required: true,
    },
    orderItem: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "OrderItem",
            required: true,
        },
    ],
    totalProductPrice: {
        type: Number,
        required: true,
    },
    shippingFee: {
        type: Number,
        required: true,
    },
    totalPaymentAmount: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        enum: [
            "PAYMENT_PENDING",
            "PAYMENT_COMPLETED",
            "PREPARING_FOR_SHIPPING",
            "SHIPPING",
            "SHIPPED",
            "ORDER_CANCELED",
            "PARTIAL_REFUND_REQUESTED",
            "FULL_REFUND_REQUESTED",
            "PARTIAL_REFUNDED",
            "FULL_REFUNDED",
            "PARTIAL_EXCHANGE_REQUESTED",
            "PARTIAL_EXCHANGED",
            "FULL_EXCHANGE_REQUESTED",
            "FULL_EXCHANGED",
        ],
        required: true,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
// Mongoose model creation
exports.MongooseOrder = mongoose_1.default.model("Order", orderSchema);
//# sourceMappingURL=order.schema.js.map