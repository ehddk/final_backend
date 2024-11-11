// [유저]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail

import { NextFunction, Request, Response } from "express";

/** FAQ 목록 조회 (사용자페이지) */
export const getFaqs = (req: Request, res: Response, next: NextFunction) => {
  res.send("FAQ 목록 조회 (사용자페이지)");
};

/** FAQ 상세 조회 (사용자페이지) */
export const getFaqDetail = (req: Request, res: Response, next: NextFunction) => {
  res.send("FAQ 상세 조회 (사용자페이지)");
};
