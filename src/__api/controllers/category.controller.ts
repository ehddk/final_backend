// [유저]
// 카테고리 목록 조회 - getCategory
// 하위 카테고리 조회 - getCategoryDetail

import { NextFunction, Request, Response } from "express";

/** 카테고리 목록 조회 (사용자페이지) */
export const getCategory = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("카테고리 목록 조회 (사용자 페이지)");
};

/** 하위 카테고리 조회 (사용자페이지) */
export const getCategoryDetail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("하위 카테고리 조회 (사용자 페이지)");
};
