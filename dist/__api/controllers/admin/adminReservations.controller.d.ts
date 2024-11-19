import { NextFunction, Request, Response } from "express";
/** 예약 목록 조회 (관리자) */
export declare const getReservations: (req: Request<adminGetReservationsRequest["path"], adminGetReservationsResponse, adminGetReservationsRequest["body"], adminGetReservationsRequest["params"]>, res: Response, next: NextFunction) => void;
/** 예약 상세 조회 (관리자) */
export declare const getReservationsDetail: (req: Request<adminGetReservationsDetailRequest["path"], adminGetReservationsDetailResponse, adminGetReservationsDetailRequest["body"], adminGetReservationsDetailRequest["params"]>, res: Response, next: NextFunction) => void;
/** 예약 생성 (관리자) */
export declare const createReservations: (req: Request<adminCreateReservationsRequest["path"], adminCreateReservationsResponse, adminCreateReservationsRequest["body"], adminCreateReservationsRequest["params"]>, res: Response, next: NextFunction) => void;
/** 예약 수정 (관리자) */
export declare const updateReservations: (req: Request<adminUpdateReservationsRequest["path"], adminUpdateReservationsResponse, adminUpdateReservationsRequest["body"], adminUpdateReservationsRequest["params"]>, res: Response, next: NextFunction) => void;
/** 예약 삭제 (관리자) */
export declare const deleteReservations: (req: Request<adminDeleteReservationsRequest["path"], adminDeleteReservationsResponse, adminDeleteReservationsRequest["body"], adminDeleteReservationsRequest["params"]>, res: Response, next: NextFunction) => void;
