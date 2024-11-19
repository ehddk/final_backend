import type { Request,Response,NextFunction } from "express"

/** 재고 목록 조회(유저) */
export const getUsersInvens = (req:Request, res:Response, next:NextFunction) => {
   res.send('재고 목록 조회(유저)');
}
/** 재고 상세 조회(유저) */
export const getUsersInvenDetail = (req:Request, res:Response, next:NextFunction) =>{
   res.send('재고 목록 조회(유저)');
}
