import {
  createInquiry,
  deleteInquiry,
  getInquiries,
  getInquiry,
  updateInquiry,
} from "@/api/controllers/admin/adminInquiries.controller";
import express from "express";

const adminInquiriesRouter = express.Router();


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
} as const;

adminInquiriesRouter.get(ADMIN_INQUIRY_ROUTES.GET_INQUIRIES, getInquiries);
adminInquiriesRouter.get(ADMIN_INQUIRY_ROUTES.GET_INQUIRY, getInquiry);
adminInquiriesRouter.post(ADMIN_INQUIRY_ROUTES.CREATE_INQUIRY, createInquiry);
adminInquiriesRouter.put(ADMIN_INQUIRY_ROUTES.UPDATE_INQUIRY, updateInquiry);
adminInquiriesRouter.delete(ADMIN_INQUIRY_ROUTES.DELETE_INQUIRY, deleteInquiry);

export default adminInquiriesRouter;