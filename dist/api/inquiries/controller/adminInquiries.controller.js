"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminInquiriesController {
    _inquiriesService;
    constructor(_inquiriesService) {
        this._inquiriesService = _inquiriesService;
        this.getInquiries = this.getInquiries.bind(this);
        this.getInquiryDetail = this.getInquiryDetail.bind(this);
        this.createInquiry = this.createInquiry.bind(this);
        this.updateInquiry = this.updateInquiry.bind(this);
        this.deleteInquiry = this.deleteInquiry.bind(this);
    }
    async getInquiries(req, res, next) {
        try {
            const inquiries = await this._inquiriesService.getInquiries({
                limit: req.query.limit,
                offset: req.query.offset,
            });
            res.send(inquiries);
        }
        catch (error) {
            next(error);
        }
    }
    async getInquiryDetail(req, res, next) {
        try {
            const inquiryDetail = await this._inquiriesService.getInquiryDetail(req.params.inquiryId);
            res.send(inquiryDetail);
        }
        catch (error) {
            next(error);
        }
    }
    async createInquiry(req, res, next) {
        const status = "Processing";
        const { inquiryType, title, content } = req.body;
        try {
            const createdInquiry = await this._inquiriesService.createInquiry(req.user.userId, {
                inquiryType,
                title,
                content,
                status,
            });
            res.send(createdInquiry);
        }
        catch (error) {
            next(error);
        }
    }
    async updateInquiry(req, res, next) {
        const { inquiryId } = req.params;
        try {
            await this._inquiriesService.updateInquiry(inquiryId, req.body);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
    async deleteInquiry(req, res, next) {
        const { inquiryId } = req.params;
        try {
            await this._inquiriesService.deleteInquiry(inquiryId);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminInquiriesController;
//# sourceMappingURL=adminInquiries.controller.js.map