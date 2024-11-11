import {
    createDevice,
    deleteDevice,
    getDevice,
    getDevices,
    updateDevice,
} from "@/api/controllers/admin/adminDevices.controller";
import express from "express";

const adminDevicesRouter = express.Router();

/** 관리자 장치 관련 API 경로 객체  */
const ADMIN_DEVICE_ROUTES = {
    /** 장치 목록 조회 (관리자) */
    GET_DEVICES: `/admin-api/devices`,
    /** 장치 상세 조회 (관리자) */
    GET_DEVICE: `/admin-api/devices/:deviceId`,
    /** 장치 생성 (관리자) */
    CREATE_DEVICE: `/admin-api/devices`,
    /** 장치 수정 (관리자) */
    UPDATE_DEVICE: `/admin-api/devices/:deviceId`,
    /** 장치 삭제 (관리자) */
    DELETE_DEVICE: `/admin-api/devices/:deviceId`,
} as const;

adminDevicesRouter.get(ADMIN_DEVICE_ROUTES.GET_DEVICES, getDevices);
adminDevicesRouter.get(ADMIN_DEVICE_ROUTES.GET_DEVICE, getDevice);
adminDevicesRouter.post(ADMIN_DEVICE_ROUTES.CREATE_DEVICE, createDevice);
adminDevicesRouter.put(ADMIN_DEVICE_ROUTES.UPDATE_DEVICE, updateDevice);
adminDevicesRouter.delete(ADMIN_DEVICE_ROUTES.DELETE_DEVICE, deleteDevice);

export default adminDevicesRouter;