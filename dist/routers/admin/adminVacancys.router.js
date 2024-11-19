"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminVacancys_controller_1 = require("@/api/controllers/admin/adminVacancys.controller");
const express_1 = __importDefault(require("express"));
const adminVacancysRouter = express_1.default.Router();
/** 공실 관련 API 경로 객체 [관리자]  */
const ADMIN_VACANCYS_ROUTES = {
    /** 공실 목록 조회 [관리자] */
    GET_VACANCYS: `/admin-api/vacancys`,
    /** 공실 상세 조회 [관리자] */
    GET_VACANCY: `/admin-api/vacancys/:vacancyId`,
    /** 공실 생성 [관리자] */
    CREATE_VACANCY: `/admin-api/vacancys`,
    /** 공실 수정 [관리자] */
    UPDATE_VACANCY: `/admin-api/vacancys/:vacancyId`,
    /** 공실 삭제 [관리자] */
    DELETE_VACANCY: `/admin-api/vacancys/:vacancyId`,
};
adminVacancysRouter.get(ADMIN_VACANCYS_ROUTES.GET_VACANCYS, adminVacancys_controller_1.getAdminVacancysList);
adminVacancysRouter.get(ADMIN_VACANCYS_ROUTES.GET_VACANCY, adminVacancys_controller_1.getAdminVacancysDetail);
adminVacancysRouter.post(ADMIN_VACANCYS_ROUTES.CREATE_VACANCY, adminVacancys_controller_1.createAdminVacancys);
adminVacancysRouter.put(ADMIN_VACANCYS_ROUTES.UPDATE_VACANCY, adminVacancys_controller_1.updateAdminVacancys);
adminVacancysRouter.delete(ADMIN_VACANCYS_ROUTES.DELETE_VACANCY, adminVacancys_controller_1.deleteAdminVacancys);
exports.default = adminVacancysRouter;
//# sourceMappingURL=adminVacancys.router.js.map