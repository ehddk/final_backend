import type { Request, Response, NextFunction } from "express";

// [사용자]
// 멤버십 목록 조회 - getMemberships
// 멤버십 가입 - joinMembership
// 멤버십 변경 - changeMembership
// 멤버십 취소 - cancelMembership

/** [사용자] 멤버십 목록 조회 */
export const getMemberships = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[사용자] 멤버십 목록 조회");
};

/** [사용자] 멤버십 가입 */
export const joinMembership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[사용자] 멤버십 가입");
};

/** [사용자] 멤버십 변경 */
export const changeMembership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[사용자] 멤버십 변경");
};

/** [사용자] 멤버십 취소 */
export const cancelMembership = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("[사용자] 멤버십 취소");
};

