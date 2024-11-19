import type { Request,Response,NextFunction } from "express"

/** 재고 목록 조회(관리자) */
export const getInvens = (req:Request, res:Response, next:NextFunction) => {
   res.send('재고 목록 조회(관리자)')
}
/** 재고 상세 조회(관리자) */
export const getInvenDetail = (req:Request, res:Response, next:NextFunction) => {
   res.send('재고 상세 조회(관리자)')
}
/** 재고 등록(관리자) */
export const createInven = (req:Request, res:Response, next:NextFunction) => {
   res.send('재고 등록(관리자)')
}
/** 재고 수정(관리자) */
export const editInven = (req:Request, res:Response, next:NextFunction) => {
   res.send('재고 수정(관리자)')
}
/** 재고 삭제(관리자) */
export const deleteInven = (req:Request, res:Response, next:NextFunction) => {
   res.send('재고 삭제(관리자)')
}