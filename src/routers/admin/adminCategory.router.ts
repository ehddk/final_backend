import {
  createCategory,
  deleteCategory,
  getAdminCategorys,
  getAdminCategoryDetail,
  updateCategory,
} from "@/api/controllers/admin/adminCategorys.controller";
import express from "express";

const adminCategorysRouter = express.Router();

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
} as const;

adminCategorysRouter.get(
  ADMIN_CATEGORY_ROUTES.GET_CATEGORYS,
  getAdminCategorys
);
adminCategorysRouter.get(
  ADMIN_CATEGORY_ROUTES.GET_CATEGORY,
  getAdminCategoryDetail
);
adminCategorysRouter.post(
  ADMIN_CATEGORY_ROUTES.CREATE_CATEGORY,
  createCategory
);
adminCategorysRouter.put(ADMIN_CATEGORY_ROUTES.UPDATE_CATEGORY, updateCategory);
adminCategorysRouter.delete(
  ADMIN_CATEGORY_ROUTES.DELETE_CATEGORY,
  deleteCategory
);

export default adminCategorysRouter;
