"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseInquiryRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const inquiry_schema_1 = require("@/api/inquiries/model/inquiry.schema");
class MongooseInquiryRepository {
    async findAllWithPagination({ offset, limit, }) {
        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 10;
        // throw new Error("Method not implemented.");
        const list = await inquiry_schema_1.MongooseInquiry.find()
            .limit(limitValue)
            .skip(offsetValue)
            .populate({
            path: "author",
            populate: {
                path: "profile",
            },
        })
            .sort({ createdAt: -1 });
        const totalCount = await inquiry_schema_1.MongooseInquiry.find().countDocuments();
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
    async save(inquiry) {
        const newInquiry = new inquiry_schema_1.MongooseInquiry({
            ...inquiry,
        });
        await newInquiry.save();
        return newInquiry;
    }
    async findAll() {
        const values = await inquiry_schema_1.MongooseInquiry.find().populate({
            path: "author",
            populate: {
                path: "profile",
            },
        });
        return values;
    }
    async findById(id) {
        const inquiry = await inquiry_schema_1.MongooseInquiry.findById(id).populate({
            path: "author",
            populate: {
                path: "profile",
            },
        });
        return inquiry;
    }
    async update(inquiryId, updateInquiryInfo) {
        const results = await inquiry_schema_1.MongooseInquiry.findByIdAndUpdate(inquiryId, updateInquiryInfo);
        if (!results) {
            throw new http_exception_1.default(404, "1:1문의을 찾을 수 없습니다.");
        }
        return results;
    }
    async delete(inquiryId) {
        await inquiry_schema_1.MongooseInquiry.deleteOne({ _id: inquiryId });
        return;
    }
}
exports.MongooseInquiryRepository = MongooseInquiryRepository;
//# sourceMappingURL=mongooseInquiry.repository.js.map