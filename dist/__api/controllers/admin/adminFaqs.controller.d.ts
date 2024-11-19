import { NextFunction, Request, Response } from "express";
/** FAQ 목록 조회 (관리자) */
export declare const getFaqs: (req: Request<adminGetFaqsRequest["path"], adminGetFaqsResponse, adminGetFaqsRequest["body"], adminGetFaqsRequest["params"]>, res: Response, next: NextFunction) => void;
/** FAQ 상세 조회 (관리자) */
export declare const getFaqDetail: (req: Request<adminGetFaqDetailRequest["path"], adminGetFaqDetailResponse, adminGetFaqDetailRequest["body"], adminGetFaqDetailRequest["params"]>, res: Response, next: NextFunction) => void;
/** FAQ 생성 (관리자) */
export declare const createFaq: (req: Request<adminCreateFaqRequest["path"], adminCreateFaqResponse, adminCreateFaqRequest["body"], adminCreateFaqRequest["params"]>, res: Response, next: NextFunction) => void;
/** FAQ 수정 (관리자) */
export declare const updateFaq: (req: Request<adminUpdateFaqRequest["path"], adminUpdateFaqResponse, adminUpdateFaqRequest["body"], adminUpdateFaqRequest["params"]>, res: Response, next: NextFunction) => void;
/** FAQ 삭제 (관리자) */
export declare const deleteFaq: (req: Request<adminDeleteFaqRequest["path"], adminDeleteFaqResponse, adminDeleteFaqRequest["body"], adminDeleteFaqRequest["params"]>, res: Response, next: NextFunction) => void;
