"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const adminInquiry_validation_1 = require("@/api/inquiries/dto/validations/adminInquiry.validation");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongooseInquiry_repository_1 = require("@/api/inquiries/repository/mongooseInquiry.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const inquiries_service_1 = require("@/api/inquiries/service/inquiries.service");
const adminInquiries_controller_1 = __importDefault(require("@/api/inquiries/controller/adminInquiries.controller"));
const adminInquiryRouter = express_1.default.Router();
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
};
const adminInquiriesController = new adminInquiries_controller_1.default(new inquiries_service_1.InquiriesServiceImpl(new mongooseInquiry_repository_1.MongooseInquiryRepository(), new mongooseUser_repository_1.MongooseUserRepository()));
adminInquiryRouter.get((0, path_util_1.extractPath)(ADMIN_INQUIRY_ROUTES.GET_INQUIRIES, routers_1.ROUTES_INDEX.ADMIN_INQUIRIES_API), (0, validation_middleware_1.validate)(adminInquiry_validation_1.adminGetInquiriesValidator), adminInquiriesController.getInquiries);
adminInquiryRouter.get((0, path_util_1.extractPath)(ADMIN_INQUIRY_ROUTES.GET_INQUIRY, routers_1.ROUTES_INDEX.ADMIN_INQUIRIES_API), (0, validation_middleware_1.validate)(adminInquiry_validation_1.adminGetInquiryDetailValidator), authUser_middleware_1.authUserMiddleware, adminInquiriesController.getInquiryDetail);
adminInquiryRouter.post((0, path_util_1.extractPath)(ADMIN_INQUIRY_ROUTES.CREATE_INQUIRY, routers_1.ROUTES_INDEX.ADMIN_INQUIRIES_API), (0, validation_middleware_1.validate)(adminInquiry_validation_1.adminCreateInquiryValidator), authUser_middleware_1.authUserMiddleware, adminInquiriesController.createInquiry);
adminInquiryRouter.put((0, path_util_1.extractPath)(ADMIN_INQUIRY_ROUTES.UPDATE_INQUIRY, routers_1.ROUTES_INDEX.ADMIN_INQUIRIES_API), (0, validation_middleware_1.validate)(adminInquiry_validation_1.adminUpdateInquiryValidator), adminInquiriesController.updateInquiry);
adminInquiryRouter.delete((0, path_util_1.extractPath)(ADMIN_INQUIRY_ROUTES.DELETE_INQUIRY, routers_1.ROUTES_INDEX.ADMIN_INQUIRIES_API), (0, validation_middleware_1.validate)(adminInquiry_validation_1.adminDeleteInquiryValidator), adminInquiriesController.deleteInquiry);
exports.default = adminInquiryRouter;
//# sourceMappingURL=adminInquiry.router.js.map