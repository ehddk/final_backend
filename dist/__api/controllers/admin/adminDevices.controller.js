"use strict";
// [관리자]
// 장치 목록 조회 - getDevices
// 장치 상세 조회 - getDevice
// 장치 생성 - createDevice
// 장치 수정 - updateDevice
// 장치 삭제 - deleteDevice
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDevice = exports.updateDevice = exports.createDevice = exports.getDevice = exports.getDevices = void 0;
/** 장치 목록 조회 (관리자) */
const getDevices = (req, res, next) => {
    res.send("장치 목록 조회 (관리자)");
};
exports.getDevices = getDevices;
/** 장치 상세 조회 (관리자) */
const getDevice = (req, res, next) => {
    console.log(req.params);
    console.log(req.query);
    res.send("장치 상세 조회 (관리자)");
};
exports.getDevice = getDevice;
/** 장치 생성 (관리자) */
const createDevice = (req, res, next) => {
    const { name } = req.body;
    res.send("장치 생성 (관리자)");
};
exports.createDevice = createDevice;
/** 장치 수정 (관리자) */
const updateDevice = (req, res, next) => {
    console.log("body", req.body);
    console.log(req.query);
    console.log(req.cookies);
    // const { deviceId } = req.params;
    // const { name } = req.body;
    res.send("장치 수정 (관리자)");
};
exports.updateDevice = updateDevice;
/** 장치 삭제 (관리자) */
const deleteDevice = (req, res, next) => {
    const { deviceId } = req.params;
    res.send("장치 삭제 (관리자)");
};
exports.deleteDevice = deleteDevice;
//# sourceMappingURL=adminDevices.controller.js.map