import type { Request, Response, NextFunction } from "express";
/** 재고 목록 조회(유저) */
export declare const getUsersInvens: (req: Request, res: Response, next: NextFunction) => void;
/** 재고 상세 조회(유저) */
export declare const getUsersInvenDetail: (req: Request, res: Response, next: NextFunction) => void;
