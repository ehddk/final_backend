"use strict";
// [유저]
// 장치추가 - addDevice
// 내 장치 조회 - getMyDeviceInfo
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyDeviceInfo = exports.addDevice = void 0;
/** 장치추가 (장치페이지) */
const addDevice = (req, res, next) => {
    res.send("장치추가 (장치페이지)");
};
exports.addDevice = addDevice;
/** 내 장치 조회 (장치페이지) */
const getMyDeviceInfo = (req, res, next) => {
    res.send("내 장치 조회 (장치페이지)");
};
exports.getMyDeviceInfo = getMyDeviceInfo;
//# sourceMappingURL=devices.controller.js.map