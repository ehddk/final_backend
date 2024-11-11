// [유저]
// 장치추가 - addDevice
// 내 장치 조회 - getMyDeviceInfo

import { NextFunction, Request, Response } from "express";

/** 장치추가 (장치페이지) */
export const addDevice = (req: Request, res: Response, next: NextFunction) => {
    res.send("장치추가 (장치페이지)");
};

/** 내 장치 조회 (장치페이지) */
export const getMyDeviceInfo = (req: Request, res: Response, next: NextFunction) => {
    res.send("내 장치 조회 (장치페이지)");
};
