"use strict";
// [유저]
// 예약 조회 - getMyReservations
// 예약상세 조회 - getMyReservationsDetail
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMyReservationsDetail = exports.getMyReservations = void 0;
/* 예약 조회 */
const getMyReservations = (req, res, next) => {
    res.send("예약조회 (사용자 페이지)");
};
exports.getMyReservations = getMyReservations;
/* 예약 상세 조회 */
const getMyReservationsDetail = (req, res, next) => {
    res.send("예약 상세 조회 (사용자 페이지)");
};
exports.getMyReservationsDetail = getMyReservationsDetail;
//# sourceMappingURL=reservations.controller.js.map