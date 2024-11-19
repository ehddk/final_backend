import { NextFunction, Request, Response } from "express";
/** 장치 목록 조회 (관리자) */
export declare const getDevices: (req: Request<adminGetDevicesRequest["path"], adminGetDevicesResponse, adminGetDevicesRequest["body"], adminGetDevicesRequest["params"]>, res: Response, next: NextFunction) => void;
/** 장치 상세 조회 (관리자) */
export declare const getDevice: (req: Request<adminGetDeviceRequest["path"], adminGetDeviceResponse, adminGetDeviceRequest["body"], adminGetDeviceRequest["params"]>, res: Response, next: NextFunction) => void;
/** 장치 생성 (관리자) */
export declare const createDevice: (req: Request<adminCreateDeviceRequest["path"], adminCreateDeviceResponse, adminCreateDeviceRequest["body"], adminCreateDeviceRequest["params"]>, res: Response, next: NextFunction) => void;
/** 장치 수정 (관리자) */
export declare const updateDevice: (req: Request<adminUpdateDeviceRequest["path"], adminUpdateDeviceResponse, adminUpdateDeviceRequest["body"], adminUpdateDeviceRequest["params"]>, res: Response, next: NextFunction) => void;
/** 장치 삭제 (관리자) */
export declare const deleteDevice: (req: Request<adminDeleteDeviceRequest["path"], adminDeleteDeviceResponse, adminDeleteDeviceRequest["body"], adminDeleteDeviceRequest["params"]>, res: Response, next: NextFunction) => void;
