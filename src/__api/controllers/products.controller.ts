// [유저]
// 제품 목록 조회 - getProduct
// 제품 상세 조회 - getProductDetail

import { NextFunction, Request, Response } from "express";

/** 제품 목록 조회 */
export const getProduct = (req: Request, res: Response, next: NextFunction) => {
    res.send("제품 목록 조회");
};

/** 제품 상세 조회 */
export const getProductDetail = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.send("제품 상세 조회");
};
