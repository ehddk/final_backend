"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memoryShip_repository_1 = require("@/api/ships/repository/ship/memoryShip.repository");
const adminShips_controller_1 = __importDefault(require("@/api/ships/controller/adminShips.controller"));
const adminShips_service_1 = __importDefault(require("@/api/ships/service/adminShips.service"));
const memoryShipType_repository_1 = require("@/api/ships/repository/shipType/memoryShipType.repository");
const memoryShipSlot_repository_1 = require("@/api/ships/repository/shipSlot/memoryShipSlot.repository");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const ships_validation_1 = require("@/api/ships/dto/validations/ships.validation");
const memoryShipStatus_repository_1 = require("@/api/ships/repository/shipStatus/memoryShipStatus.repository");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const adminShipsRouter = express_1.default.Router();
const adminShipsController = new adminShips_controller_1.default(new adminShips_service_1.default(new memoryShip_repository_1.MemoryShipRepository(), new memoryShipType_repository_1.MemoryShipTypeRepository(), new memoryShipSlot_repository_1.MemoryShipSlotRepository(), new memoryShipStatus_repository_1.MemoryShipStatusRepository()));
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
};
/** 관리자 함선 관련 API 경로 */
/** 함선 목록 조회 (관리자) */
adminShipsRouter.get(ADMIN_SHIP_ROUTES.GET_SHIPS, authUser_middleware_1.authUserMiddleware, adminShipsController.getAdminShipsList);
/** 함선 상세 조회 (관리자) */
adminShipsRouter.get(ADMIN_SHIP_ROUTES.GET_SHIP, authUser_middleware_1.authUserMiddleware, adminShipsController.getAdminShipInfo);
/** 함선 생성 (관리자) */
adminShipsRouter.post(ADMIN_SHIP_ROUTES.CREATE_SHIP, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.createShipValidator), adminShipsController.createAdminShip);
/** 함선 수정 (관리자) */
adminShipsRouter.put(ADMIN_SHIP_ROUTES.UPDATE_SHIP, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.updateShipValidator), adminShipsController.updateAdminShip);
/** 함선 다수 삭제 (관리자) */
adminShipsRouter.delete(ADMIN_SHIP_ROUTES.DELETE_SHIPS, authUser_middleware_1.authUserMiddleware, adminShipsController.deleteAdminShips);
/** 함선 삭제 (관리자) */
adminShipsRouter.delete(ADMIN_SHIP_ROUTES.DELETE_SHIP, authUser_middleware_1.authUserMiddleware, adminShipsController.deleteAdminShip);
exports.default = adminShipsRouter;
//# sourceMappingURL=adminShip.router.js.map