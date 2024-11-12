// [관리자]
// 장치 목록 조회 - getDevices
// 장치 상세 조회 - getDevice
// 장치 생성 - createDevice
// 장치 수정 - updateDevice
// 장치 삭제 - deleteDevice

import { NextFunction, Request, Response } from "express";

/** 장치 목록 조회 (관리자) */
export const getDevices = (
req: Request<
    adminGetDevicesRequest["path"],
    adminGetDevicesResponse,
    adminGetDevicesRequest["body"],
    adminGetDevicesRequest["params"]
>,
res: Response,
next: NextFunction
) => {
res.send("장치 목록 조회 (관리자)");
};

/** 장치 상세 조회 (관리자) */
export const getDevice = (
req: Request<
    adminGetDeviceRequest["path"],
    adminGetDeviceResponse,
    adminGetDeviceRequest["body"],
    adminGetDeviceRequest["params"]
>,
res: Response,
next: NextFunction
) => {
console.log(req.params);
console.log(req.query);

res.send("장치 상세 조회 (관리자)");
};

/** 장치 생성 (관리자) */
export const createDevice = (
req: Request<
    adminCreateDeviceRequest["path"],
    adminCreateDeviceResponse,
    adminCreateDeviceRequest["body"],
    adminCreateDeviceRequest["params"]
>,
res: Response,
next: NextFunction
) => {
const { name } = req.body;
res.send("장치 생성 (관리자)");
};

/** 장치 수정 (관리자) */
export const updateDevice = (
req: Request<
    adminUpdateDeviceRequest["path"],
    adminUpdateDeviceResponse,
    adminUpdateDeviceRequest["body"],
    adminUpdateDeviceRequest["params"]
>,
res: Response,
next: NextFunction
) => {
console.log("body", req.body);
console.log(req.query);
console.log(req.cookies);
  // const { deviceId } = req.params;
  // const { name } = req.body;

res.send("장치 수정 (관리자)");
};

/** 장치 삭제 (관리자) */
export const deleteDevice = (
req: Request<
    adminDeleteDeviceRequest["path"],
    adminDeleteDeviceResponse,
    adminDeleteDeviceRequest["body"],
    adminDeleteDeviceRequest["params"]
>,
res: Response,
next: NextFunction
) => {
const { deviceId } = req.params;

res.send("장치 삭제 (관리자)");
};
