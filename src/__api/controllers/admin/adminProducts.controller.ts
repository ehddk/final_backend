// [관리자]
// 제품 목록 조회 - getProducts
// 제품 상세 조회 - getProductDetail
// 제품 생성 - createProduct
// 제품 수정 - updateProduct
// 제품 삭제 - deleteProduct

import { NextFunction, Request, Response } from "express";

/** 제품 목록 조회 [관리자] */
export const getProducts = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send("제품 목록 조회 [관리자]");
};

/** 제품 상세 조회 [관리자] */
export const getProductDetail = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send("제품 상세 조회 [관리자]");
};

/** 제품 생성 [관리자] */
export const createProduct = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send("제품 생성 [관리자]");
};

/** 제품 수정 [관리자] */
export const updateProduct = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send("제품 수정 [관리자]");
};

/** 제품 삭제 [관리자] */
export const deleteProduct = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send("제품 삭제 [관리자]");
};
