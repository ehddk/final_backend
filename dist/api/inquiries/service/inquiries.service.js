"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiriesServiceImpl = void 0;
const inquiryResponse_dto_1 = require("@/api/inquiries/dto/inquiryResponse.dto");
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
class InquiriesServiceImpl {
    _inquiryRepository;
    _userRepository;
    constructor(inquiryRepository, userRepository) {
        this._inquiryRepository = inquiryRepository;
        this._userRepository = userRepository;
    }
    async createInquiry(userId, inquiry) {
        const author = await this._userRepository.findById(userId);
        if (!author) {
            throw new http_exception_1.default(404, "작성자를 찾을 수 없습니다.");
        }
        const newInquiry = await this._inquiryRepository.save({
            ...inquiry,
            author,
        });
        const newInquiries = author.inquiries?.concat(newInquiry);
        await this._userRepository.update(author.id, {
            inquiries: newInquiries,
        });
        return new inquiryResponse_dto_1.InquiryResponseDTO(newInquiry);
    }
    async getInquiries({ limit, offset, }) {
        const inquiries = await this._inquiryRepository.findAllWithPagination({
            limit,
            offset,
        });
        return {
            totalCount: inquiries.totalCount,
            prev: inquiries.prev,
            results: inquiries.results.map((inquiry) => new inquiryResponse_dto_1.InquiryResponseDTO(inquiry)),
            next: inquiries.next,
        };
    }
    async getInquiryDetail(inquiryId) {
        const inquiry = await this._inquiryRepository.findById(inquiryId);
        if (!inquiry) {
            throw new http_exception_1.default(404, "1:1문의을 찾을 수 없습니다.");
        }
        return new inquiryResponse_dto_1.InquiryResponseDTO(inquiry);
    }
    async updateInquiry(inquiryId, updatedInquiry) {
        await this._inquiryRepository.update(inquiryId, updatedInquiry);
        return;
    }
    async deleteInquiry(inquiryId) {
        await this._inquiryRepository.delete(inquiryId);
    }
}
exports.InquiriesServiceImpl = InquiriesServiceImpl;
//# sourceMappingURL=inquiries.service.js.map