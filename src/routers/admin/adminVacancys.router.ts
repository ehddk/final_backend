import {
  createAdminVacancys,
  deleteAdminVacancys,
  getAdminVacancysList,
  getAdminVacancysDetail,
  updateAdminVacancys,
} from "@/api/controllers/admin/adminVacancys.controller";
import express from "express";

const adminVacancysRouter = express.Router();

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
} as const;

adminVacancysRouter.get(
  ADMIN_VACANCYS_ROUTES.GET_VACANCYS,
  getAdminVacancysList
);
adminVacancysRouter.get(
  ADMIN_VACANCYS_ROUTES.GET_VACANCY,
  getAdminVacancysDetail
);
adminVacancysRouter.post(
  ADMIN_VACANCYS_ROUTES.CREATE_VACANCY,
  createAdminVacancys
);
adminVacancysRouter.put(
  ADMIN_VACANCYS_ROUTES.UPDATE_VACANCY,
  updateAdminVacancys
);
adminVacancysRouter.delete(
  ADMIN_VACANCYS_ROUTES.DELETE_VACANCY,
  deleteAdminVacancys
);

export default adminVacancysRouter;
