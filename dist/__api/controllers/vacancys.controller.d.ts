import { NextFunction, Request, Response } from "express";
/**공실 목록 조회 [사용자 페이지] */
export declare const getVacancysList: (req: Request, res: Response, next: NextFunction) => void;
/**내가 찜한 공실 조회 [사용자 페이지]*/
export declare const getVacancysPickList: (req: Request, res: Response, next: NextFunction) => void;
