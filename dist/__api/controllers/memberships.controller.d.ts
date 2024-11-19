import type { Request, Response, NextFunction } from "express";
/** [사용자] 멤버십 목록 조회 */
export declare const getMemberships: (req: Request, res: Response, next: NextFunction) => void;
/** [사용자] 멤버십 가입 */
export declare const joinMembership: (req: Request, res: Response, next: NextFunction) => void;
/** [사용자] 멤버십 변경 */
export declare const changeMembership: (req: Request, res: Response, next: NextFunction) => void;
/** [사용자] 멤버십 취소 */
export declare const cancelMembership: (req: Request, res: Response, next: NextFunction) => void;
