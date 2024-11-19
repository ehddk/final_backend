import { NextFunction, Request, Response } from "express";
/** 제품 목록 조회 */
export declare const getProduct: (req: Request, res: Response, next: NextFunction) => void;
/** 제품 상세 조회 */
export declare const getProductDetail: (req: Request, res: Response, next: NextFunction) => void;
