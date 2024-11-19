"use strict";
// [관리자]
// 예약 목록 조회 - getReservations
// 예약 상세 조회 - getReservationsDetail
// 예약 생성 - createReservation
// 예약 수정 - updateReservation
// 예약 삭제 - deleteReservation
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReservations = exports.updateReservations = exports.createReservations = exports.getReservationsDetail = exports.getReservations = void 0;
/** 예약 목록 조회 (관리자) */
const getReservations = (req, res, next) => {
    res.send("예약 목록 조회 (관리자)");
};
exports.getReservations = getReservations;
/** 예약 상세 조회 (관리자) */
const getReservationsDetail = (req, res, next) => {
    console.log(req.params);
    console.log(req.query);
    res.send("예약 상세 조회 (관리자)");
};
exports.getReservationsDetail = getReservationsDetail;
/** 예약 생성 (관리자) */
const createReservations = (req, res, next) => {
    const { name } = req.body;
    res.send("예약 생성 (관리자)");
};
exports.createReservations = createReservations;
/** 예약 수정 (관리자) */
const updateReservations = (req, res, next) => {
    console.log("body", req.body);
    console.log(req.query);
    console.log(req.cookies);
    // const { userId } = req.params;
    // const { name } = req.body;
    res.send("예약 수정 (관리자)");
};
exports.updateReservations = updateReservations;
/** 예약 삭제 (관리자) */
const deleteReservations = (req, res, next) => {
    const { userId } = req.params;
    res.send("예약 삭제 (관리자)");
};
exports.deleteReservations = deleteReservations;
//# sourceMappingURL=adminReservations.controller.js.map