"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inquiry_validation_1 = require("@/api/inquiries/dto/validations/inquiry.validation");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const mongooseInquiry_repository_1 = require("@/api/inquiries/repository/mongooseInquiry.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const inquiries_service_1 = require("@/api/inquiries/service/inquiries.service");
const inquiries_controller_1 = __importDefault(require("@/api/inquiries/controller/inquiries.controller"));
const inquiryRouter = express_1.default.Router();
const INQUIRY_ROUTES = {
    /** 1:1 문의 목록 조회 */
    GET_INQUIRIES: `/api/inquiries`,
    /** 1:1 문의 상세 조회 */
    GET_INQUIRY: `/api/inquiries/:inquiryId`,
    /** 1:1 문의 생성 */
    CREATE_INQUIRY: `/api/inquiries`,
};
const inquiriesController = new inquiries_controller_1.default(new inquiries_service_1.InquiriesServiceImpl(new mongooseInquiry_repository_1.MongooseInquiryRepository(), new mongooseUser_repository_1.MongooseUserRepository()));
inquiryRouter.get((0, path_util_1.extractPath)(INQUIRY_ROUTES.GET_INQUIRIES, routers_1.ROUTES_INDEX.INQUIRIES_API), (0, validation_middleware_1.validate)(inquiry_validation_1.getInquiriesValidator), authUser_middleware_1.authUserMiddleware, inquiriesController.getInquiries);
inquiryRouter.get((0, path_util_1.extractPath)(INQUIRY_ROUTES.GET_INQUIRY, routers_1.ROUTES_INDEX.INQUIRIES_API), (0, validation_middleware_1.validate)(inquiry_validation_1.getInquiryDetailValidator), 
// authCookieViewMiddleware,
inquiriesController.getInquiryDetail);
inquiryRouter.post((0, path_util_1.extractPath)(INQUIRY_ROUTES.CREATE_INQUIRY, routers_1.ROUTES_INDEX.INQUIRIES_API), authUser_middleware_1.authUserMiddleware, inquiriesController.createInquiry);
exports.default = inquiryRouter;
//# sourceMappingURL=inquiry.router.js.map