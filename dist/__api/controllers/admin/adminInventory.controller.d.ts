import type { Request, Response, NextFunction } from "express";
/** 재고 목록 조회(관리자) */
export declare const getInvens: (req: Request, res: Response, next: NextFunction) => void;
/** 재고 상세 조회(관리자) */
export declare const getInvenDetail: (req: Request, res: Response, next: NextFunction) => void;
/** 재고 등록(관리자) */
export declare const createInven: (req: Request, res: Response, next: NextFunction) => void;
/** 재고 수정(관리자) */
export declare const editInven: (req: Request, res: Response, next: NextFunction) => void;
/** 재고 삭제(관리자) */
export declare const deleteInven: (req: Request, res: Response, next: NextFunction) => void;
