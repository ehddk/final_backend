"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseProduct = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    sales: {
        type: Number,
        required: true,
    },
    rdate: {
        type: Date,
        required: true,
    },
    //대표 이미지
    thumbnail: {
        type: String,
        required: true,
    },
    //상세 이미지
    img: {
        type: String,
        required: true,
    },
    //배송방법 
    delivery: {
        type: String,
        required: true,
    },
    seller: {
        type: String,
    },
    description: {
        type: String,
    },
    //( 선택 ) 포장타입
    packageType: {
        type: String
    },
    detail: {
        type: String //( 선택 )안내사항 
    },
    category: {
        type: String
    }
});
exports.MongooseProduct = mongoose_1.default.model("Product", productSchema);
//# sourceMappingURL=product.schema.js.map