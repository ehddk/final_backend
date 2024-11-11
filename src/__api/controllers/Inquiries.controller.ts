// [유저]
// 내 문의 목록 조회 - getMyInquiries
// 내 문의 조회 - getMyInquiry

import { NextFunction, Request, Response } from "express";


/* 내 문의 목록 조회 (사용자페이지) */
export const getMyInquiries = ( 
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("내 문의 목록 조회 (사용자페이지)")
  };

/* 내 문의 조회 (사용자페이지) */
export const getMyInquiry = ( 
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("내 문의 조회 (사용자페이지)")
  };

/* 내 문의 생성 (사용자페이지) */
export const createMyInquiry = ( 
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("내 문의 생성 (사용자페이지)")
  };

/* 내 문의 수정 (사용자페이지) */
export const updateMyInquiry = ( 
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("내 문의 수정 (사용자페이지)")
  };

/* 내 문의 삭제 (사용자페이지) */
export const deleteMyInquiry = ( 
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("내 문의 삭제 (사용자페이지)")
  };