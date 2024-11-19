import { NextFunction, Request, Response } from "express";
/** FAQ 목록 조회 (사용자페이지) */
export declare const getFaqs: (req: Request, res: Response, next: NextFunction) => void;
/** FAQ 상세 조회 (사용자페이지) */
export declare const getFaqDetail: (req: Request, res: Response, next: NextFunction) => void;
