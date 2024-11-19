import express from "express";
import { MemoryShipStatusRepository } from "@/api/ships/repository/shipStatus/memoryShipStatus.repository";
import { MemoryShipRepository } from "@/api/ships/repository/ship/memoryShip.repository";
import { MemoryShipSlotRepository } from "@/api/ships/repository/shipSlot/memoryShipSlot.repository";
import { MemoryShipTypeRepository } from "@/api/ships/repository/shipType/memoryShipType.repository";
import AdminShipServiceImpl from "@/api/ships/service/adminShips.service";
import AdminShipStatusController from "@/api/ships/controller/adminShipStatus.controller";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { createShipStatusValidator } from "@/api/ships/dto/validations/ships.validation";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";

const adminShipStatusRouter = express.Router();

const adminShipStatusController = new AdminShipStatusController(
  new AdminShipServiceImpl(
    new MemoryShipRepository(),
    new MemoryShipTypeRepository(),
    new MemoryShipSlotRepository(),
    new MemoryShipStatusRepository()
  )
);

/** 관리자 함선 상태 관련 API 경로 객체  */
const ADMIN_SHIP_STATUS_ROUTES = {
  /** 함선 상태 조회 (관리자) */
  GET_SHIP_STATUS: `/admin-api/ships/status/:statusId`,
  /** 함선 상태 생성 (관리자) */
  CREATE_SHIP_STATUS: `/admin-api/ships/status`,
  /** 함선 상태 수정 (관리자) */
  UPDATE_SHIP_STATUS: `/admin-api/ships/status/:statusId`,
  /** 함선 상태 삭제 (관리자) */
  DELETE_SHIP_STATUS: `/admin-api/ships/status/:statusId`,
} as const;

/** 함선 상태 조회 (관리자) */
adminShipStatusRouter.get(
  ADMIN_SHIP_STATUS_ROUTES.GET_SHIP_STATUS,
  authUserMiddleware,
  adminShipStatusController.getAdminShipStatus
);
/** 함선 상태 생성 (관리자) */
adminShipStatusRouter.post(
  ADMIN_SHIP_STATUS_ROUTES.CREATE_SHIP_STATUS,
  authUserMiddleware,
  validate(createShipStatusValidator),
  adminShipStatusController.createAdminShipStatus
);
/** 함선 상태 수정 (관리자) */
adminShipStatusRouter.put(
  ADMIN_SHIP_STATUS_ROUTES.UPDATE_SHIP_STATUS,
  authUserMiddleware,
  validate(createShipStatusValidator),
  adminShipStatusController.updateAdminShipStatus
);
/** 함선 상태 삭제 (관리자) */
adminShipStatusRouter.delete(
  ADMIN_SHIP_STATUS_ROUTES.DELETE_SHIP_STATUS,
  authUserMiddleware,
  adminShipStatusController.deleteAdminShipStatus
);

export default adminShipStatusRouter;
