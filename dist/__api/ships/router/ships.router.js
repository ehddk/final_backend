"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memoryShip_repository_1 = require("@/api/ships/repository/ship/memoryShip.repository");
const ships_service_1 = __importDefault(require("@/api/ships/service/ships.service"));
const ships_controller_1 = __importDefault(require("@/api/ships/controller/ships.controller"));
const memoryShipType_repository_1 = require("@/api/ships/repository/shipType/memoryShipType.repository");
const memoryShipSlot_repository_1 = require("@/api/ships/repository/shipSlot/memoryShipSlot.repository");
const memoryUser_repository_1 = require("@/api/users/repository/user/memoryUser.repository");
const memoryShipStatus_repository_1 = require("@/api/ships/repository/shipStatus/memoryShipStatus.repository");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const ships_validation_1 = require("@/api/ships/dto/validations/ships.validation");
const shipsRouter = express_1.default.Router();
const shipController = new ships_controller_1.default(new ships_service_1.default(new memoryShip_repository_1.MemoryShipRepository(), new memoryShipType_repository_1.MemoryShipTypeRepository(), new memoryShipSlot_repository_1.MemoryShipSlotRepository(), new memoryUser_repository_1.MemoryUserRepository(), new memoryShipStatus_repository_1.MemoryShipStatusRepository()));
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
};
/** 함선 관련 API 경로 */
shipsRouter.get(SHIP_ROUTES.GET_FLEET_SHIPS, authUser_middleware_1.authUserMiddleware, shipController.getFleetShipsList);
shipsRouter.get(SHIP_ROUTES.GET_FLAGSHIP, authUser_middleware_1.authUserMiddleware, shipController.getFlagshipInfo);
shipsRouter.get(SHIP_ROUTES.GET_SHIP, authUser_middleware_1.authUserMiddleware, shipController.getShipInfo);
shipsRouter.post(SHIP_ROUTES.CREATE_SHIP, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.createShipValidator), shipController.createShip);
shipsRouter.put(SHIP_ROUTES.UPDATE_SHIP, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.updateShipValidator), shipController.updateShip);
shipsRouter.delete(SHIP_ROUTES.DELETE_SHIP, authUser_middleware_1.authUserMiddleware, shipController.deleteShip);
exports.default = shipsRouter;
//# sourceMappingURL=ships.router.js.map