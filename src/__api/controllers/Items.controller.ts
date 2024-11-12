// [유저]
// 구매 목록 조회 - getBuyItems
// 구매 목록 상세 조회 - getBuyItem

import { NextFunction, Request, Response } from "express";

/** 구매 목록 조회 (사용자) */
export const getBuyItems = (req: Request, res: Response, next: NextFunction) => {
  res.send("구매 목록 조회 (사용자)");
};

/** 구매 목록 상세 조회 (사용자) */
export const getBuyItem = (req: Request, res: Response, next: NextFunction) => {
  res.send("구매 목록 상세 조회 (사용자)");
};
