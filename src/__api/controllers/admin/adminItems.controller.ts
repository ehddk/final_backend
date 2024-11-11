// [관리자]
// 판매 목록 조회 - getSellItems
// 판매 목록 상세 조회 - getSellItem
// 판매 아이템 생성 - createItem
// 판매 아이템 수정 - updateItem
// 판매 아이템 삭제 -deleteItem

import { NextFunction, Request, Response } from "express";

/** 판매 목록 조회 (관리자) */
export const getSellItems = (
  req: Request<
    adminGetItemsRequest["path"],
    adminGetItemsResponse,
    adminGetItemsRequest["body"],
    adminGetItemsRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  res.send("판매 목록 조회 (관리자)");
};

/** 판매 목록 상세 조회 (관리자) */
export const getSellItem = (
  req: Request<
    adminGetItemRequest["path"],
    adminGetItemResponse,
    adminGetItemRequest["body"],
    adminGetItemRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  console.log(req.params);
  console.log(req.query);

  res.send("판매 목록 상세 조회 (관리자)");
};

/** 판매 아이템 생성 (관리자) */
export const createItem = (
  req: Request<
    adminCreateItemRequest["path"],
    adminCreateItemResponse,
    adminCreateItemRequest["body"],
    adminCreateItemRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  res.send("판매 아이템 생성 (관리자)");
};

/** 판매 아이템 수정 (관리자) */
export const updateItem = (
  req: Request<
    adminUpdateItemRequest["path"],
    adminUpdateItemResponse,
    adminUpdateItemRequest["body"],
    adminUpdateItemRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  console.log("body", req.body);
  console.log(req.query);
  console.log(req.cookies);
  // const { userId } = req.params;
  // const { name } = req.body;

  res.send("판매 아이템 수정 (관리자)");
};

/** 판매 아이템 삭제 (관리자) */
export const deleteItem = (
  req: Request<
    adminDeleteItemRequest["path"],
    adminDeleteItemResponse,
    adminDeleteItemRequest["body"],
    adminDeleteItemRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { ItemId } = req.params;

  res.send("판매 아이템 삭제 (관리자)");
};
