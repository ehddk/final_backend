import { NextFunction, Request, Response } from "express";
/** 공실 목록 조회 [관리자] */
export declare const getAdminVacancysList: (req: Request, res: Response, next: NextFunction) => void;
/** 공실 상세 조회 [관리자] */
export declare const getAdminVacancysDetail: (req: Request, res: Response, next: NextFunction) => void;
/** 공실 추가 [관리자] */
export declare const createAdminVacancys: (req: Request, res: Response, next: NextFunction) => void;
/** 공실 수정 [관리자] */
export declare const updateAdminVacancys: (req: Request, res: Response, next: NextFunction) => void;
/** 공실 삭제 [관리자] */
export declare const deleteAdminVacancys: (req: Request, res: Response, next: NextFunction) => void;
