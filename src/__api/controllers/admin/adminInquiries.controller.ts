// [관리자]
// 문의 목록 조회 - getInquiries
// 문의 상세 조회 - getInquiry
// 문의 생성 - createInquiry
// 문의 수정 - updateInquiry
// 문의 삭제 - deleteInquiry

import { NextFunction, Request, Response } from "express";


/* 문의 목록 조회 (관리자) */
export const getInquiries = ( 
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("문의 목록 조회 (관리자)")
  };

/* 문의 상세 조회 (관리자) */
export const getInquiry = (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("문의 상세 조회 (관리자)")
  };

/* 문의 생성 (관리자) */
export const createInquiry = (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("문의 생성 (관리자)")
  };

/* 문의 수정 (관리자) */
export const updateInquiry = (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("문의 수정 (관리자)")
  };

/* 문의 삭제 (관리자) */
export const deleteInquiry = (
  req: Request, 
  res: Response, 
  next: NextFunction
  ) => {
    res.send("문의 삭제 (관리자)")
  };


