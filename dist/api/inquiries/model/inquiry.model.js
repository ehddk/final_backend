"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inquiry = void 0;
class Inquiry {
    id;
    inquiryType;
    title;
    content;
    author;
    status;
    createdAt;
    constructor(params) {
        this.id = params.id;
        this.inquiryType = params.inquiryType;
        this.title = params.title;
        this.content = params.content;
        this.author = params.author;
        this.status = params.status;
        this.createdAt = params.createdAt;
    }
}
exports.Inquiry = Inquiry;
//# sourceMappingURL=inquiry.model.js.map