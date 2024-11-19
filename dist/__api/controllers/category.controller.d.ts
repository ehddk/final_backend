import { NextFunction, Request, Response } from "express";
/** 카테고리 목록 조회 (사용자페이지) */
export declare const getCategory: (req: Request, res: Response, next: NextFunction) => void;
/** 하위 카테고리 조회 (사용자페이지) */
export declare const getCategoryDetail: (req: Request, res: Response, next: NextFunction) => void;
