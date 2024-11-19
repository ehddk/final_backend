"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InquiriesController {
    _inquiriesService;
    constructor(_inquiriesService) {
        this._inquiriesService = _inquiriesService;
        this.getInquiries = this.getInquiries.bind(this);
        this.getInquiryDetail = this.getInquiryDetail.bind(this);
        this.createInquiry = this.createInquiry.bind(this);
    }
    /** 1:1문의 목록 조회 */
    async getInquiries(req, res, next) {
        const { limit, offset } = req.query;
        try {
            const inquiries = await this._inquiriesService.getInquiries({
                limit,
                offset,
            });
            res.send(inquiries);
        }
        catch (error) {
            next(error);
        }
    }
    /** 1:1문의 상세 조회 */
    async getInquiryDetail(req, res, next) {
        const { inquiryId } = req.params;
        try {
            const inquiry = await this._inquiriesService.getInquiryDetail(inquiryId);
            res.send(inquiry);
        }
        catch (error) {
            next(error);
        }
    }
    /** 1:1문의 작성 */
    async createInquiry(req, res, next) {
        const status = "Processing";
        const { inquiryType, title, content } = req.body;
        try {
            const inquiry = await this._inquiriesService.createInquiry(req.user.userId, {
                inquiryType,
                title,
                content,
                status,
            });
            res.send(inquiry);
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    }
}
exports.default = InquiriesController;
//# sourceMappingURL=inquiries.controller.js.map