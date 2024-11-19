import { NextFunction, Request, Response } from "express";
/** 제품 목록 조회 [관리자] */
export declare const getProducts: (req: Request, res: Response, next: NextFunction) => void;
/** 제품 상세 조회 [관리자] */
export declare const getProductDetail: (req: Request, res: Response, next: NextFunction) => void;
/** 제품 생성 [관리자] */
export declare const createProduct: (req: Request, res: Response, next: NextFunction) => void;
/** 제품 수정 [관리자] */
export declare const updateProduct: (req: Request, res: Response, next: NextFunction) => void;
/** 제품 삭제 [관리자] */
export declare const deleteProduct: (req: Request, res: Response, next: NextFunction) => void;
