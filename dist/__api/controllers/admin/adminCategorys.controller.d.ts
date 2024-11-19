import { Request, Response, NextFunction } from "express";
/** 카테고리 목록 조회 (관리자) */
export declare const getAdminCategorys: (req: Request<adminGetCategorysRequest["path"], adminGetCategorysResponse, adminGetCategorysRequest["body"], adminGetCategorysRequest["params"]>, res: Response, next: NextFunction) => void;
/** 하위 카테고리 조회 (관리자) */
export declare const getAdminCategoryDetail: (req: Request<adminGetCategoryRequest["path"], adminGetCategoryResponse, adminGetCategoryRequest["body"], adminGetCategoryRequest["params"]>, res: Response, next: NextFunction) => void;
/** 카테고리 생성 (관리자) */
export declare const createCategory: (req: Request<adminCreateCategoryRequest["path"], adminCreateCategoryResponse, adminCreateCategoryRequest["body"], adminCreateCategoryRequest["params"]>, res: Response, next: NextFunction) => void;
/** 카테고리 수정 (관리자) */
export declare const updateCategory: (req: Request<adminUpdateCategoryRequest["path"], adminUpdateCategoryResponse, adminUpdateCategoryRequest["body"], adminUpdateCategoryRequest["params"]>, res: Response, next: NextFunction) => void;
/** 카테고리 삭제 (관리자) */
export declare const deleteCategory: (req: Request<adminDeleteCategoryRequest["path"], adminDeleteCategoryResponse, adminDeleteCategoryRequest["body"], adminDeleteCategoryRequest["params"]>, res: Response, next: NextFunction) => void;
