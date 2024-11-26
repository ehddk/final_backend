import express from "express";
import {
  getInquiryDetailValidator,
  getInquiriesValidator,
} from "@/api/inquiries/dto/validations/inquiry.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { MongooseInquiryRepository } from "@/api/inquiries/repository/mongooseInquiry.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
import { InquiriesServiceImpl } from "@/api/inquiries/service/inquiries.service";
import InquiriesController from "@/api/inquiries/controller/inquiries.controller";
const inquiryRouter = express.Router();

const INQUIRY_ROUTES = {
  /** 1:1 문의 목록 조회 */
  GET_INQUIRIES: `/api/inquiries`,
  /** 1:1 문의 상세 조회 */
  GET_INQUIRY: `/api/inquiries/:inquiryId`,
  /** 1:1 문의 생성 */
  CREATE_INQUIRY: `/api/inquiries`,
} as const;

const inquiriesController = new InquiriesController(
  new InquiriesServiceImpl(
    new MongooseInquiryRepository(),
    new MongooseUserRepository()
  )
);

inquiryRouter.get(
  extractPath(INQUIRY_ROUTES.GET_INQUIRIES, ROUTES_INDEX.INQUIRIES_API),
  validate(getInquiriesValidator),
  authUserMiddleware,
  inquiriesController.getInquiries
);
inquiryRouter.get(
  extractPath(INQUIRY_ROUTES.GET_INQUIRY, ROUTES_INDEX.INQUIRIES_API),
  validate(getInquiryDetailValidator),
  // authCookieViewMiddleware,
  inquiriesController.getInquiryDetail
);
inquiryRouter.post(
  extractPath(INQUIRY_ROUTES.CREATE_INQUIRY, ROUTES_INDEX.INQUIRIES_API),
  authUserMiddleware,
  inquiriesController.createInquiry
);

export default inquiryRouter;
