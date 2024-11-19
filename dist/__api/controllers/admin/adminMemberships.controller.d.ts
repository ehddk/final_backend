import type { Request, Response, NextFunction } from "express";
/** [관리자] 멤버십 목록 조회 */
export declare const getMemberships: (req: Request, res: Response, next: NextFunction) => void;
/** [관리자] 멤버십 상세 조회 */
export declare const getMembershipDetail: (req: Request, res: Response, next: NextFunction) => void;
/** [관리자] 멤버십 생성 */
export declare const createMembership: (req: Request, res: Response, next: NextFunction) => void;
/** [관리자] 멤버십 수정 */
export declare const modifyMembership: (req: Request, res: Response, next: NextFunction) => void;
/** [관리자] 멤버십 삭제 */
export declare const deleteMembership: (req: Request, res: Response, next: NextFunction) => void;
