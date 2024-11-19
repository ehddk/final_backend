"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminInquiries_controller_1 = require("@/api/controllers/admin/adminInquiries.controller");
const express_1 = __importDefault(require("express"));
const adminInquiriesRouter = express_1.default.Router();
/**관리자 문의 관련 API 경로 객체(엔드포인트들) */
const ADMIN_INQUIRY_ROUTES = {
    /** 문의 목록 조회 (관리자) */
    GET_INQUIRIES: `/admin-api/inquiries`,
    /** 문의 상세 조회 (관리자) */
    GET_INQUIRY: `/admin-api/inquiries/:inquiryID`,
    /** 문의 생성 (관리자) */
    CREATE_INQUIRY: `/admin-api/inquiries`,
    /** 문의 수정 (관리자) */
    UPDATE_INQUIRY: `/admin-api/inquiries/:inquiryID`,
    /** 문의 삭제 (관리자) */
    DELETE_INQUIRY: `/admin-api/inquiries/:inquiryID`,
};
adminInquiriesRouter.get(ADMIN_INQUIRY_ROUTES.GET_INQUIRIES, adminInquiries_controller_1.getInquiries);
adminInquiriesRouter.get(ADMIN_INQUIRY_ROUTES.GET_INQUIRY, adminInquiries_controller_1.getInquiry);
adminInquiriesRouter.post(ADMIN_INQUIRY_ROUTES.CREATE_INQUIRY, adminInquiries_controller_1.createInquiry);
adminInquiriesRouter.put(ADMIN_INQUIRY_ROUTES.UPDATE_INQUIRY, adminInquiries_controller_1.updateInquiry);
adminInquiriesRouter.delete(ADMIN_INQUIRY_ROUTES.DELETE_INQUIRY, adminInquiries_controller_1.deleteInquiry);
exports.default = adminInquiriesRouter;
//# sourceMappingURL=adminInquiries.router.js.map