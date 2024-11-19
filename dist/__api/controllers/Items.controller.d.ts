import { NextFunction, Request, Response } from "express";
/** 구매 목록 조회 (사용자) */
export declare const getBuyItems: (req: Request, res: Response, next: NextFunction) => void;
/** 구매 목록 상세 조회 (사용자) */
export declare const getBuyItem: (req: Request, res: Response, next: NextFunction) => void;
