import express from "express";
import AdminShipTypesController from "@/api/ships/controller/adminShipTypes.controller";
import AdminShipServiceImpl from "@/api/ships/service/adminShips.service";
import { MemoryShipRepository } from "@/api/ships/repository/ship/memoryShip.repository";
import { MemoryShipTypeRepository } from "@/api/ships/repository/shipType/memoryShipType.repository";
import { MemoryShipSlotRepository } from "@/api/ships/repository/shipSlot/memoryShipSlot.repository";
import { MemoryShipStatusRepository } from "@/api/ships/repository/shipStatus/memoryShipStatus.repository";

import {
  createShipTypeValidator,
  updateShipTypeValidator,
} from "@/api/ships/dto/validations/ships.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";

const adminShipTypesRouter = express.Router();

const adminShipTypesController = new AdminShipTypesController(
  new AdminShipServiceImpl(
    new MemoryShipRepository(),
    new MemoryShipTypeRepository(),
    new MemoryShipSlotRepository(),
    new MemoryShipStatusRepository()
  )
);
/** 관리자 함선 타입 관련 API 경로 객체  */
const ADMIN_SHIP_TYPE_ROUTES = {
  /** 함선 종류 조회 (관리자) */
  GET_SHIP_TYPE: `/admin-api/ships/types/:typeId`,
  /** 함선 종류 생성 (관리자) */
  CREATE_SHIP_TYPE: `/admin-api/ships/types`,
  /** 함선 종류 수정 (관리자) */
  UPDATE_SHIP_TYPE: `/admin-api/ships/types/:typeId`,
  /** 함선 종류 삭제 (관리자) */
  DELETE_SHIP_TYPE: `/admin-api/ships/types/:typeId`,
} as const;

/** 관리자 함선 타입 관련 API 경로 */

/** 함선 타입 조회 (관리자) */
adminShipTypesRouter.get(
  ADMIN_SHIP_TYPE_ROUTES.GET_SHIP_TYPE,
  authUserMiddleware,
  adminShipTypesController.getAdminShipType
);

/** 함선 타입 생성 (관리자) */
adminShipTypesRouter.post(
  ADMIN_SHIP_TYPE_ROUTES.CREATE_SHIP_TYPE,
  authUserMiddleware,
  validate(createShipTypeValidator),
  adminShipTypesController.createAdminShipType
);

/** 함선 타입 수정 (관리자) */
adminShipTypesRouter.put(
  ADMIN_SHIP_TYPE_ROUTES.UPDATE_SHIP_TYPE,
  authUserMiddleware,
  validate(updateShipTypeValidator),
  adminShipTypesController.updateAdminShipType
);

/** 함선 타입 삭제 (관리자) */
adminShipTypesRouter.delete(
  ADMIN_SHIP_TYPE_ROUTES.DELETE_SHIP_TYPE,
  authUserMiddleware,
  adminShipTypesController.deleteAdminShipType
);

export default adminShipTypesRouter;
