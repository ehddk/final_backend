import type { Request, Response, NextFunction } from "express";

// [관리자]
// 멤버십 목록 조회 - getMemberships
// 멤버십 상세 조회 - getMembershipDetail
// 멤버십 생성 - createMembership
// 멤버십 변경 - modifyMembership
// 멤버십 삭제 - deleteMembership

/** [관리자] 멤버십 목록 조회 */
export const getMemberships = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[관리자] 멤버십 목록 조회");
};

/** [관리자] 멤버십 상세 조회 */
export const getMembershipDetail = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[관리자] 멤버십 상세 조회");
};

/** [관리자] 멤버십 생성 */
export const createMembership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[관리자] 멤버십 생성");
};

/** [관리자] 멤버십 수정 */
export const modifyMembership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[관리자] 멤버십 수정");
};

/** [관리자] 멤버십 삭제 */
export const deleteMembership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[관리자] 멤버십 삭제");
};