import express from "express";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  adminCreateInquiryValidator,
  adminDeleteInquiryValidator,
  adminGetInquiryDetailValidator,
  adminGetInquiriesValidator,
  adminUpdateInquiryValidator,
} from "@/api/inquiries/dto/validations/adminInquiry.validation";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseInquiryRepository } from "@/api/inquiries/repository/mongooseInquiry.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { InquiriesServiceImpl } from "@/api/inquiries/service/inquiries.service";
import AdminInquiriesController from "@/api/inquiries/controller/adminInquiries.controller";

const adminInquiryRouter = express.Router();

/*관리자 1:1 문의 관련 API 객체*/
const ADMIN_INQUIRY_ROUTES = {
  /**1:1 문의 목록 조회 (관리자) */
  GET_INQUIRIES: `/admin-api/inquiries`,
  /**1:1 문의 상세 조회 (관리자) */
  GET_INQUIRY: `/admin-api/inquiries/:inquiryId`,
  /**1:1 문의 생성 (관리자)  */
  CREATE_INQUIRY: `/admin-api/inquiries`,
  /**1:1 문의 수정 (관리자) */
  UPDATE_INQUIRY: `/admin-api/inquiries/:inquiryId`,
  /**1:1 문의 삭제 (관리자) */
  DELETE_INQUIRY: `/admin-api/inquiries/:inquiryId`,
} as const;

const adminInquiriesController = new AdminInquiriesController(
  new InquiriesServiceImpl(
    new MongooseInquiryRepository(),
    new MongooseUserRepository()
  )
);

adminInquiryRouter.get(
  extractPath(
    ADMIN_INQUIRY_ROUTES.GET_INQUIRIES,
    ROUTES_INDEX.ADMIN_INQUIRIES_API
  ),
  validate(adminGetInquiriesValidator),
  adminInquiriesController.getInquiries
);
adminInquiryRouter.get(
  extractPath(
    ADMIN_INQUIRY_ROUTES.GET_INQUIRY,
    ROUTES_INDEX.ADMIN_INQUIRIES_API
  ),
  validate(adminGetInquiryDetailValidator),
  authUserMiddleware,
  adminInquiriesController.getInquiryDetail
);

adminInquiryRouter.post(
  extractPath(
    ADMIN_INQUIRY_ROUTES.CREATE_INQUIRY,
    ROUTES_INDEX.ADMIN_INQUIRIES_API
  ),
  validate(adminCreateInquiryValidator),
  authUserMiddleware,
  adminInquiriesController.createInquiry
);
adminInquiryRouter.put(
  extractPath(
    ADMIN_INQUIRY_ROUTES.UPDATE_INQUIRY,
    ROUTES_INDEX.ADMIN_INQUIRIES_API
  ),
  validate(adminUpdateInquiryValidator),
  adminInquiriesController.updateInquiry
);
adminInquiryRouter.delete(
  extractPath(
    ADMIN_INQUIRY_ROUTES.DELETE_INQUIRY,
    ROUTES_INDEX.ADMIN_INQUIRIES_API
  ),
  validate(adminDeleteInquiryValidator),
  adminInquiriesController.deleteInquiry
);

export default adminInquiryRouter;
