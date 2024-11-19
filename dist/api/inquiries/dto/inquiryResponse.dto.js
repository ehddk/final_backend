"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquiryResponseDTO = void 0;
class InquiryResponseDTO {
    inquiryId;
    inquiryType;
    title;
    content;
    author;
    status;
    createdAt;
    constructor(params) {
        this.inquiryId = params.id;
        this.inquiryType = params.inquiryType;
        this.title = params.title;
        this.content = params.content;
        this.author = {
            id: params.author?.id,
            userName: params.author?.profile?.firstName,
        };
        this.status = params.status;
        this.createdAt = params.createdAt;
    }
}
exports.InquiryResponseDTO = InquiryResponseDTO;
//# sourceMappingURL=inquiryResponse.dto.js.map