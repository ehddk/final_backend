// [관리자]
// 예약 목록 조회 - getReservations
// 예약 상세 조회 - getReservationsDetail
// 예약 생성 - createReservation
// 예약 수정 - updateReservation
// 예약 삭제 - deleteReservation

import { NextFunction, Request, Response } from "express";

/** 예약 목록 조회 (관리자) */
export const getReservations = (
  req: Request<
    adminGetReservationsRequest["path"],
    adminGetReservationsResponse,
    adminGetReservationsRequest["body"],
    adminGetReservationsRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  res.send("예약 목록 조회 (관리자)");
};

/** 예약 상세 조회 (관리자) */
export const getReservationsDetail = (
  req: Request<
    adminGetReservationsDetailRequest["path"],
    adminGetReservationsDetailResponse,
    adminGetReservationsDetailRequest["body"],
    adminGetReservationsDetailRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  console.log(req.params);
  console.log(req.query);

  res.send("예약 상세 조회 (관리자)");
};

/** 예약 생성 (관리자) */
export const createReservations = (
  req: Request<
    adminCreateReservationsRequest["path"],
    adminCreateReservationsResponse,
    adminCreateReservationsRequest["body"],
    adminCreateReservationsRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  res.send("예약 생성 (관리자)");
};

/** 예약 수정 (관리자) */
export const updateReservations = (
  req: Request<
    adminUpdateReservationsRequest["path"],
    adminUpdateReservationsResponse,
    adminUpdateReservationsRequest["body"],
    adminUpdateReservationsRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  console.log("body", req.body);
  console.log(req.query);
  console.log(req.cookies);
  // const { userId } = req.params;
  // const { name } = req.body;

  res.send("예약 수정 (관리자)");
};

/** 예약 삭제 (관리자) */
export const deleteReservations = (
  req: Request<
    adminDeleteReservationsRequest["path"],
    adminDeleteReservationsResponse,
    adminDeleteReservationsRequest["body"],
    adminDeleteReservationsRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.params;

  res.send("예약 삭제 (관리자)");
};
