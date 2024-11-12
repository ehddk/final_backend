// [관리자]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail
// FAQ 생성 - createFaq
// FAQ 수정 - updateFaq
// FAQ 삭제 - deleteFaq

import { NextFunction, Request, Response } from "express";

/** FAQ 목록 조회 (관리자) */
export const getFaqs = (
  req: Request<
    adminGetFaqsRequest["path"],
    adminGetFaqsResponse,
    adminGetFaqsRequest["body"],
    adminGetFaqsRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  res.send("FAQ 목록 조회 (관리자)");
};

/** FAQ 상세 조회 (관리자) */
export const getFaqDetail = (
  req: Request<
    adminGetFaqDetailRequest["path"],
    adminGetFaqDetailResponse,
    adminGetFaqDetailRequest["body"],
    adminGetFaqDetailRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
//   console.log(req.params);
  console.log(req.query);

  res.send("FAQ 상세 조회 (관리자)");
};

/** FAQ 생성 (관리자) */
export const createFaq = (
  req: Request<
    adminCreateFaqRequest["path"],
    adminCreateFaqResponse,
    adminCreateFaqRequest["body"],
    adminCreateFaqRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { question, answer } = req.body;
  res.send("FAQ 생성 (관리자)");
};

/** FAQ 수정 (관리자) */
export const updateFaq = (
  req: Request<
    adminUpdateFaqRequest["path"],
    adminUpdateFaqResponse,
    adminUpdateFaqRequest["body"],
    adminUpdateFaqRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { question, answer } = req.body;
  console.log(req.query);
  console.log(req.cookies);

  res.send("FAQ 수정 (관리자)");
};

/** FAQ 삭제 (관리자) */
export const deleteFaq = (
  req: Request<
    adminDeleteFaqRequest["path"],
    adminDeleteFaqResponse,
    adminDeleteFaqRequest["body"],
    adminDeleteFaqRequest["params"]
  >,
  res: Response,
  next: NextFunction
) => {
  const { faqId } = req.params;

  res.send("FAQ 삭제 (관리자)");
};
