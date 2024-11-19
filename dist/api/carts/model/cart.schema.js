"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseCart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const cartSchema = new mongoose_1.default.Schema({
    cartItem: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "CartItem",
        },
    ],
    totalProductPrice: {
        type: Number,
        required: true,
        default: 0, // 기본값을 0으로 설정
    },
    shippingFee: {
        type: Number,
        required: true,
        default: 0, // 기본값을 0으로 설정
    },
    totalPaymentAmount: {
        type: Number,
        required: true,
        default: 0, // 기본값을 0으로 설정
    },
    userId: {
        type: String,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
exports.MongooseCart = mongoose_1.default.model("Cart", cartSchema);
//# sourceMappingURL=cart.schema.js.map