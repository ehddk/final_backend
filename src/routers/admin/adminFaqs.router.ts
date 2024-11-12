import {
    createFaq,
    deleteFaq,
    getFaqDetail,
    getFaqs,
    updateFaq,
  } from "@/api/controllers/admin/adminFaqs.controller";
  import express from "express";
  
  const adminFaqsRouter = express.Router();
  
  /** 관리자 FAQ 관련 API 경로 객체  */
  const ADMIN_FAQ_ROUTES = {
    /** FAQ 목록 조회 (관리자) */
    GET_FAQS: `/admin-api/faqs`,
    /** FAQ 상세 조회 (관리자) */
    GET_FAQ_DETAIL: `/admin-api/faqs/:faqId`,
    /** FAQ 생성 (관리자) */
    CREATE_FAQ: `/admin-api/faqs`,
    /** FAQ 수정 (관리자) */
    UPDATE_FAQ: `/admin-api/faqs/:faqId`,
    /** FAQ 삭제 (관리자) */
    DELETE_FAQ: `/admin-api/faqs/:faqId`,
  } as const;
  
  adminFaqsRouter.get(ADMIN_FAQ_ROUTES.GET_FAQS, getFaqs);
  adminFaqsRouter.get(ADMIN_FAQ_ROUTES.GET_FAQ_DETAIL, getFaqDetail);
  adminFaqsRouter.post(ADMIN_FAQ_ROUTES.CREATE_FAQ, createFaq);
  adminFaqsRouter.put(ADMIN_FAQ_ROUTES.UPDATE_FAQ, updateFaq);
  adminFaqsRouter.delete(ADMIN_FAQ_ROUTES.DELETE_FAQ, deleteFaq);
  
  export default adminFaqsRouter;
  