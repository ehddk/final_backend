import express from "express";
import AdminShipSlotsController from "@/api/ships/controller/adminShipSlots.controller";
import AdminShipServiceImpl from "@/api/ships/service/adminShips.service";
import { MemoryShipRepository } from "@/api/ships/repository/ship/memoryShip.repository";
import { MemoryShipTypeRepository } from "@/api/ships/repository/shipType/memoryShipType.repository";
import { MemoryShipSlotRepository } from "@/api/ships/repository/shipSlot/memoryShipSlot.repository";
import { MemoryShipStatusRepository } from "@/api/ships/repository/shipStatus/memoryShipStatus.repository";
import {
  createShipSlotValidator,
  updateShipSlotValidator,
} from "../dto/validations/ships.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
const adminShipSlotsRouter = express.Router();

const adminShipSlotsController = new AdminShipSlotsController(
  new AdminShipServiceImpl(
    new MemoryShipRepository(),
    new MemoryShipTypeRepository(),
    new MemoryShipSlotRepository(),
    new MemoryShipStatusRepository()
  )
);
/** 관리자 함선 슬롯 관련 API 경로 객체  */
const ADMIN_SHIP_SLOT_ROUTES = {
  /** 함선 슬롯 조회 (관리자) */
  GET_SHIP_SLOT: `/admin-api/ships/slots/:slotId`,
  /** 함선 슬롯 생성 (관리자) */
  CREATE_SHIP_SLOT: `/admin-api/ships/slots`,
  /** 함선 슬롯 수정 (관리자) */
  UPDATE_SHIP_SLOT: `/admin-api/ships/slots/:slotId`,
  /** 함선 슬롯 삭제 (관리자) */
  DELETE_SHIP_SLOT: `/admin-api/ships/slots/:slotId`,
} as const;

/** 관리자 함선 슬롯 관련 API 경로 */

/** 함선 슬롯 상세 조회 (관리자) */
adminShipSlotsRouter.get(
  ADMIN_SHIP_SLOT_ROUTES.GET_SHIP_SLOT,
  authUserMiddleware,
  adminShipSlotsController.getAdminShipSlot
);

/** 함선 슬롯 생성 (관리자) */
adminShipSlotsRouter.post(
  ADMIN_SHIP_SLOT_ROUTES.CREATE_SHIP_SLOT,
  authUserMiddleware,
  validate(createShipSlotValidator),
  adminShipSlotsController.createAdminShipSlot
);

/** 함선 슬롯 수정 (관리자) */
adminShipSlotsRouter.put(
  ADMIN_SHIP_SLOT_ROUTES.UPDATE_SHIP_SLOT,
  authUserMiddleware,
  validate(updateShipSlotValidator),
  adminShipSlotsController.updateAdminShipSlot
);

/** 함선 슬롯 삭제 (관리자) */
adminShipSlotsRouter.delete(
  ADMIN_SHIP_SLOT_ROUTES.DELETE_SHIP_SLOT,
  authUserMiddleware,
  adminShipSlotsController.deleteAdminShipSlot
);

export default adminShipSlotsRouter;
