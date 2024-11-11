import express from "express";
import { MemoryShipRepository } from "@/api/ships/repository/ship/memoryShip.repository";
import ShipServiceImpl from "@/api/ships/service/ships.service";
import ShipsController from "@/api/ships/controller/ships.controller";
import { MemoryShipTypeRepository } from "@/api/ships/repository/shipType/memoryShipType.repository";
import { MemoryShipSlotRepository } from "@/api/ships/repository/shipSlot/memoryShipSlot.repository";
import { MemoryUserRepository } from "@/api/users/repository/user/memoryUser.repository";
import { MemoryShipStatusRepository } from "@/api/ships/repository/shipStatus/memoryShipStatus.repository";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  createShipValidator,
  updateShipValidator,
} from "@/api/ships/dto/validations/ships.validation";

const shipsRouter = express.Router();

const shipController = new ShipsController(
  new ShipServiceImpl(
    new MemoryShipRepository(),
    new MemoryShipTypeRepository(),
    new MemoryShipSlotRepository(),
    new MemoryUserRepository(),
    new MemoryShipStatusRepository()
  )
);

/** 함선 관련 API 경로 객체  */
const SHIP_ROUTES = {
  /** 함대의 함선 리스트 조회 */
  GET_FLEET_SHIPS: `/api/ships/fleet/:fleetId`,
  /** 기함 정보 조회 */
  GET_FLAGSHIP: `/api/ships/flagship/:userId`,
  /** 특정 함선 정보 조회 */
  GET_SHIP: `/api/ships/:shipId`,
  /** 함선 만들기  */
  CREATE_SHIP: `/api/ships`,
  /** 함선 정보 수정 */
  UPDATE_SHIP: `/api/ships/:shipId`,
  /** 함선 삭제 */
  DELETE_SHIP: `/api/ships/:shipId`,
} as const;

/** 함선 관련 API 경로 */

shipsRouter.get(
  SHIP_ROUTES.GET_FLEET_SHIPS,
  authUserMiddleware,
  shipController.getFleetShipsList
);
shipsRouter.get(
  SHIP_ROUTES.GET_FLAGSHIP,
  authUserMiddleware,
  shipController.getFlagshipInfo
);
shipsRouter.get(
  SHIP_ROUTES.GET_SHIP,
  authUserMiddleware,
  shipController.getShipInfo
);
shipsRouter.post(
  SHIP_ROUTES.CREATE_SHIP,
  authUserMiddleware,
  validate(createShipValidator),
  shipController.createShip
);
shipsRouter.put(
  SHIP_ROUTES.UPDATE_SHIP,
  authUserMiddleware,
  validate(updateShipValidator),
  shipController.updateShip
);
shipsRouter.delete(
  SHIP_ROUTES.DELETE_SHIP,
  authUserMiddleware,
  shipController.deleteShip
);

export default shipsRouter;
