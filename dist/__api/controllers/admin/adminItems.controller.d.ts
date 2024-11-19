import { NextFunction, Request, Response } from "express";
/** 판매 목록 조회 (관리자) */
export declare const getSellItems: (req: Request<adminGetItemsRequest["path"], adminGetItemsResponse, adminGetItemsRequest["body"], adminGetItemsRequest["params"]>, res: Response, next: NextFunction) => void;
/** 판매 목록 상세 조회 (관리자) */
export declare const getSellItem: (req: Request<adminGetItemRequest["path"], adminGetItemResponse, adminGetItemRequest["body"], adminGetItemRequest["params"]>, res: Response, next: NextFunction) => void;
/** 판매 아이템 생성 (관리자) */
export declare const createItem: (req: Request<adminCreateItemRequest["path"], adminCreateItemResponse, adminCreateItemRequest["body"], adminCreateItemRequest["params"]>, res: Response, next: NextFunction) => void;
/** 판매 아이템 수정 (관리자) */
export declare const updateItem: (req: Request<adminUpdateItemRequest["path"], adminUpdateItemResponse, adminUpdateItemRequest["body"], adminUpdateItemRequest["params"]>, res: Response, next: NextFunction) => void;
/** 판매 아이템 삭제 (관리자) */
export declare const deleteItem: (req: Request<adminDeleteItemRequest["path"], adminDeleteItemResponse, adminDeleteItemRequest["body"], adminDeleteItemRequest["params"]>, res: Response, next: NextFunction) => void;
