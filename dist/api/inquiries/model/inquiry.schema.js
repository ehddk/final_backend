"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseInquiry = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const inquirySchema = new mongoose_1.default.Schema({
    inquiryType: {
        type: String,
        enum: ["Cancel", "Refund", "Exchange", "etc."],
        required: true,
    },
    title: {
        type: String,
        required: true,
        length: 100,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    status: {
        type: String,
        enum: ["Processing", "completed"],
        required: true,
    },
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
exports.MongooseInquiry = mongoose_1.default.model("Inquiry", inquirySchema);
//# sourceMappingURL=inquiry.schema.js.map