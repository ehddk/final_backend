// 공실 목록 조회  - getVacancysList
// 내가 찜한 공실 조회 - getVacancysPickList

import { NextFunction, Request, Response } from "express";

/**공실 목록 조회 [사용자 페이지] */
export const getVacancysList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("공실 목록 조회 [사용자 페이지]");
};

/**내가 찜한 공실 조회 [사용자 페이지]*/
export const getVacancysPickList = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("내가 찜한 공실 조회 [사용자 페이지]");
};
