// 공실 목록 조회 - getAdminVacancysList
// 공실 상세 조회 - getAdminVacancysDetail
// 공실 추가 - createAdminVacancys
// 공실 수정 - updateAdminVacancys
// 공실 삭제 - deleteAdminVacancys

import { NextFunction, Request, response, Response } from "express";

/** 공실 목록 조회 [관리자] */

export const getAdminVacancysList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("공실 목록 조회 [관리자]");
};

/** 공실 상세 조회 [관리자] */
export const getAdminVacancysDetail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("공실 상세 조회 [관리자]");
};

/** 공실 추가 [관리자] */
export const createAdminVacancys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("공실 추가 [관리자]");
};

/** 공실 수정 [관리자] */
export const updateAdminVacancys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("공실 수정 [관리자]");
};

/** 공실 삭제 [관리자] */
export const deleteAdminVacancys = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("공실 삭제 [관리자]");
};
