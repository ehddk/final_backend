"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminDevices_controller_1 = require("@/api/controllers/admin/adminDevices.controller");
const express_1 = __importDefault(require("express"));
const adminDevicesRouter = express_1.default.Router();
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
};
adminDevicesRouter.get(ADMIN_DEVICE_ROUTES.GET_DEVICES, adminDevices_controller_1.getDevices);
adminDevicesRouter.get(ADMIN_DEVICE_ROUTES.GET_DEVICE, adminDevices_controller_1.getDevice);
adminDevicesRouter.post(ADMIN_DEVICE_ROUTES.CREATE_DEVICE, adminDevices_controller_1.createDevice);
adminDevicesRouter.put(ADMIN_DEVICE_ROUTES.UPDATE_DEVICE, adminDevices_controller_1.updateDevice);
adminDevicesRouter.delete(ADMIN_DEVICE_ROUTES.DELETE_DEVICE, adminDevices_controller_1.deleteDevice);
exports.default = adminDevicesRouter;
//# sourceMappingURL=adminDevices.router.js.map