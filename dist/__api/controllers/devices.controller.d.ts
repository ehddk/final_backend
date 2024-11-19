import { NextFunction, Request, Response } from "express";
/** 장치추가 (장치페이지) */
export declare const addDevice: (req: Request, res: Response, next: NextFunction) => void;
/** 내 장치 조회 (장치페이지) */
export declare const getMyDeviceInfo: (req: Request, res: Response, next: NextFunction) => void;
