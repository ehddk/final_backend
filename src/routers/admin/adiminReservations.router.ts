import { createReservations, deleteReservations, getReservations, updateReservations } from "@/api/controllers/admin/adminReservations.controller";
import express from "express";

const adminReservationsRouter = express.Router();

/** 관리자 유저 관련 API 경로 객체*/
const ADMIN_RESERVATION_ROUTES = {
    /** 예약 목록 조회 (관리자) */
    GET_RESERVATIONS: `/admin-api/reservations`,
    /** 예약 상세 죄회 (관리자) */
    GET_RESERVATIONS_DETAIL : `/admin-api/reservations/:userId`,
    /** 예약 생성 (관리자)*/
    CREATE_RESERVATIONS: `/admin-api/reservations`,
    /** 예약 수정 (관리자) */
    UPDATE_RESERVATIONS : `/admin-api/reservations/:userId`,
    /** 예약 삭제 (관리자) */
    DELETE_RESERVATIONS : `/admin-api/reservations/:userId`,

} as const;

adminReservationsRouter.get(ADMIN_RESERVATION_ROUTES.GET_RESERVATIONS, getReservations);
adminReservationsRouter.get(ADMIN_RESERVATION_ROUTES.GET_RESERVATIONS_DETAIL, getReservations);
adminReservationsRouter.post(ADMIN_RESERVATION_ROUTES.CREATE_RESERVATIONS, createReservations);
adminReservationsRouter.put(ADMIN_RESERVATION_ROUTES.UPDATE_RESERVATIONS, updateReservations);
adminReservationsRouter.delete(ADMIN_RESERVATION_ROUTES.DELETE_RESERVATIONS, deleteReservations);

export default adminReservationsRouter;