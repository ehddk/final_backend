"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminCategorys_controller_1 = require("@/api/controllers/admin/adminCategorys.controller");
const express_1 = __importDefault(require("express"));
const adminCategorysRouter = express_1.default.Router();
/** 관리자 카테고리 관련 API 경로 객체  */
const ADMIN_CATEGORY_ROUTES = {
    /** 카테고리 목록 조회 (관리자) */
    GET_CATEGORYS: `/admin-api/categorys`,
    /** 하위 카테고리 조회 (관리자) */
    GET_CATEGORY: `/admin-api/categorys/:categoryId`,
    /** 카테고리 생성 (관리자) */
    CREATE_CATEGORY: `/admin-api/categorys`,
    /** 카테고리 수정 (관리자) */
    UPDATE_CATEGORY: `/admin-api/categorys/:categoryId`,
    /** 카테고리 삭제 (관리자) */
    DELETE_CATEGORY: `/admin-api/categorys/:categoryId`,
};
adminCategorysRouter.get(ADMIN_CATEGORY_ROUTES.GET_CATEGORYS, adminCategorys_controller_1.getAdminCategorys);
adminCategorysRouter.get(ADMIN_CATEGORY_ROUTES.GET_CATEGORY, adminCategorys_controller_1.getAdminCategoryDetail);
adminCategorysRouter.post(ADMIN_CATEGORY_ROUTES.CREATE_CATEGORY, adminCategorys_controller_1.createCategory);
adminCategorysRouter.put(ADMIN_CATEGORY_ROUTES.UPDATE_CATEGORY, adminCategorys_controller_1.updateCategory);
adminCategorysRouter.delete(ADMIN_CATEGORY_ROUTES.DELETE_CATEGORY, adminCategorys_controller_1.deleteCategory);
exports.default = adminCategorysRouter;
//# sourceMappingURL=adminCategory.router.js.map