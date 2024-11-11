// [유저]
// 예약 조회 - getMyReservations
// 예약상세 조회 - getMyReservationsDetail

import { NextFunction, Request, Response } from "express";

/* 예약 조회 */
export const getMyReservations = (req: Request, res: Response, next: NextFunction) => {
    res.send("예약조회 (사용자 페이지)");
}

/* 예약 상세 조회 */
export const getMyReservationsDetail = (req: Request, res: Response, next: NextFunction) => {
    res.send("예약 상세 조회 (사용자 페이지)");
}