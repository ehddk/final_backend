"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminReservations_controller_1 = require("@/api/controllers/admin/adminReservations.controller");
const express_1 = __importDefault(require("express"));
const adminReservationsRouter = express_1.default.Router();
/** 관리자 유저 관련 API 경로 객체*/
const ADMIN_RESERVATION_ROUTES = {
    /** 예약 목록 조회 (관리자) */
    GET_RESERVATIONS: `/admin-api/reservations`,
    /** 예약 상세 죄회 (관리자) */
    GET_RESERVATIONS_DETAIL: `/admin-api/reservations/:userId`,
    /** 예약 생성 (관리자)*/
    CREATE_RESERVATIONS: `/admin-api/reservations`,
    /** 예약 수정 (관리자) */
    UPDATE_RESERVATIONS: `/admin-api/reservations/:userId`,
    /** 예약 삭제 (관리자) */
    DELETE_RESERVATIONS: `/admin-api/reservations/:userId`,
};
adminReservationsRouter.get(ADMIN_RESERVATION_ROUTES.GET_RESERVATIONS, adminReservations_controller_1.getReservations);
adminReservationsRouter.get(ADMIN_RESERVATION_ROUTES.GET_RESERVATIONS_DETAIL, adminReservations_controller_1.getReservations);
adminReservationsRouter.post(ADMIN_RESERVATION_ROUTES.CREATE_RESERVATIONS, adminReservations_controller_1.createReservations);
adminReservationsRouter.put(ADMIN_RESERVATION_ROUTES.UPDATE_RESERVATIONS, adminReservations_controller_1.updateReservations);
adminReservationsRouter.delete(ADMIN_RESERVATION_ROUTES.DELETE_RESERVATIONS, adminReservations_controller_1.deleteReservations);
exports.default = adminReservationsRouter;
//# sourceMappingURL=adiminReservations.router.js.map