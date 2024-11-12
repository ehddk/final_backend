import express from "express";
import { MemoryShipRepository } from "@/api/ships/repository/ship/memoryShip.repository";
import AdminShipsController from "@/api/ships/controller/adminShips.controller";
import AdminShipServiceImpl from "@/api/ships/service/adminShips.service";
import { MemoryShipTypeRepository } from "@/api/ships/repository/shipType/memoryShipType.repository";
import { MemoryShipSlotRepository } from "@/api/ships/repository/shipSlot/memoryShipSlot.repository";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  createShipValidator,
  updateShipValidator,
} from "@/api/ships/dto/validations/ships.validation";
import { MemoryShipStatusRepository } from "@/api/ships/repository/shipStatus/memoryShipStatus.repository";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";

const adminShipsRouter = express.Router();

const adminShipsController = new AdminShipsController(
  new AdminShipServiceImpl(
    new MemoryShipRepository(),
    new MemoryShipTypeRepository(),
    new MemoryShipSlotRepository(),
    new MemoryShipStatusRepository()
  )
);

/** 관리자 함선 관련 API 경로 객체  */
const ADMIN_SHIP_ROUTES = {
  /** 함선 목록 조회 (관리자) */
  GET_SHIPS: `/admin-api/ships`,
  /** 함선 상세 조회 (관리자) */
  GET_SHIP: `/admin-api/ships/:shipId`,
  /** 함선 생성 (관리자) */
  CREATE_SHIP: `/admin-api/ships`,
  /** 함선 수정 (관리자) */
  UPDATE_SHIP: `/admin-api/ships/:shipId`,
  /** 함선 삭제 (관리자) */
  DELETE_SHIP: `/admin-api/ships/:shipId`,
  /** 함선 다수 삭제 (관리자) */
  DELETE_SHIPS: `/admin-api/ships`,
} as const;

/** 관리자 함선 관련 API 경로 */

/** 함선 목록 조회 (관리자) */
adminShipsRouter.get(
  ADMIN_SHIP_ROUTES.GET_SHIPS,
  authUserMiddleware,
  adminShipsController.getAdminShipsList
);

/** 함선 상세 조회 (관리자) */
adminShipsRouter.get(
  ADMIN_SHIP_ROUTES.GET_SHIP,
  authUserMiddleware,
  adminShipsController.getAdminShipInfo
);

/** 함선 생성 (관리자) */
adminShipsRouter.post(
  ADMIN_SHIP_ROUTES.CREATE_SHIP,
  authUserMiddleware,
  validate(createShipValidator),
  adminShipsController.createAdminShip
);

/** 함선 수정 (관리자) */
adminShipsRouter.put(
  ADMIN_SHIP_ROUTES.UPDATE_SHIP,
  authUserMiddleware,
  validate(updateShipValidator),
  adminShipsController.updateAdminShip
);

/** 함선 다수 삭제 (관리자) */
adminShipsRouter.delete(
  ADMIN_SHIP_ROUTES.DELETE_SHIPS,
  authUserMiddleware,
  adminShipsController.deleteAdminShips
);

/** 함선 삭제 (관리자) */
adminShipsRouter.delete(
  ADMIN_SHIP_ROUTES.DELETE_SHIP,
  authUserMiddleware,
  adminShipsController.deleteAdminShip
);

export default adminShipsRouter;
