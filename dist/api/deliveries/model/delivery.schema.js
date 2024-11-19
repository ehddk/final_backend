"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseDelivery = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const deliverySchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    //배송지와 연결된 유저명
    name: {
        type: String,
    },
    //우편번호
    postalCode: {
        type: Number,
    },
    defaultAddress: {
        type: String, // 기본 주소
        required: true,
    },
    // 상세 주소
    detailAddress: {
        type: String,
    },
    //폰번호
    number: {
        type: String
    },
    //기본 배송지 여부
    isDefault: {
        type: Boolean,
    },
});
exports.MongooseDelivery = mongoose_1.default.model("Delivery", deliverySchema);
//# sourceMappingURL=delivery.schema.js.map