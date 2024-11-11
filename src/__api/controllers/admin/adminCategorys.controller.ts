// [관리자]
// 카테고리 목록 조회 - getAdminCategorys
// 카테고리 상세 조회 - getAdminCategoryDetail
// 카테고리 생성 - createCategory
// 카테고리 수정 - updateCategory
// 카테고리 삭제 -deleteCategory

import { Request, Response, NextFunction } from "express";

/** 카테고리 목록 조회 (관리자) */
export const getAdminCategorys = (
  req: Request<
    adminGetCategorysRequest["path"],
    adminGetCategorysResponse,
    adminGetCategorysRequest["body"],
    adminGetCategorysRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  res.send("카테고리 목록 조회 (관리자)");
};

/** 하위 카테고리 조회 (관리자) */
export const getAdminCategoryDetail = (
  req: Request<
    adminGetCategoryRequest["path"],
    adminGetCategoryResponse,
    adminGetCategoryRequest["body"],
    adminGetCategoryRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  res.send("하위 카테고리 조회 (관리자)");
};

/** 카테고리 생성 (관리자) */
export const createCategory = (
  req: Request<
    adminCreateCategoryRequest["path"],
    adminCreateCategoryResponse,
    adminCreateCategoryRequest["body"],
    adminCreateCategoryRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { categoryname } = req.body;
  res.send("카테고리 생성 (관리자)");
};

/** 카테고리 수정 (관리자) */
export const updateCategory = (
  req: Request<
    adminUpdateCategoryRequest["path"],
    adminUpdateCategoryResponse,
    adminUpdateCategoryRequest["body"],
    adminUpdateCategoryRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  res.send("카테고리 수정 (관리자)");
};

/** 카테고리 삭제 (관리자) */
export const deleteCategory = (
  req: Request<
    adminDeleteCategoryRequest["path"],
    adminDeleteCategoryResponse,
    adminDeleteCategoryRequest["body"],
    adminDeleteCategoryRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { categoryId } = req.params;
  res.send("카테고리 삭제 (관리자)");
};
