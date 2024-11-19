"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memoryShipStatus_repository_1 = require("@/api/ships/repository/shipStatus/memoryShipStatus.repository");
const memoryShip_repository_1 = require("@/api/ships/repository/ship/memoryShip.repository");
const memoryShipSlot_repository_1 = require("@/api/ships/repository/shipSlot/memoryShipSlot.repository");
const memoryShipType_repository_1 = require("@/api/ships/repository/shipType/memoryShipType.repository");
const adminShips_service_1 = __importDefault(require("@/api/ships/service/adminShips.service"));
const adminShipStatus_controller_1 = __importDefault(require("@/api/ships/controller/adminShipStatus.controller"));
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const ships_validation_1 = require("@/api/ships/dto/validations/ships.validation");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const adminShipStatusRouter = express_1.default.Router();
const adminShipStatusController = new adminShipStatus_controller_1.default(new adminShips_service_1.default(new memoryShip_repository_1.MemoryShipRepository(), new memoryShipType_repository_1.MemoryShipTypeRepository(), new memoryShipSlot_repository_1.MemoryShipSlotRepository(), new memoryShipStatus_repository_1.MemoryShipStatusRepository()));
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
};
/** 함선 상태 조회 (관리자) */
adminShipStatusRouter.get(ADMIN_SHIP_STATUS_ROUTES.GET_SHIP_STATUS, authUser_middleware_1.authUserMiddleware, adminShipStatusController.getAdminShipStatus);
/** 함선 상태 생성 (관리자) */
adminShipStatusRouter.post(ADMIN_SHIP_STATUS_ROUTES.CREATE_SHIP_STATUS, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.createShipStatusValidator), adminShipStatusController.createAdminShipStatus);
/** 함선 상태 수정 (관리자) */
adminShipStatusRouter.put(ADMIN_SHIP_STATUS_ROUTES.UPDATE_SHIP_STATUS, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.createShipStatusValidator), adminShipStatusController.updateAdminShipStatus);
/** 함선 상태 삭제 (관리자) */
adminShipStatusRouter.delete(ADMIN_SHIP_STATUS_ROUTES.DELETE_SHIP_STATUS, authUser_middleware_1.authUserMiddleware, adminShipStatusController.deleteAdminShipStatus);
exports.default = adminShipStatusRouter;
//# sourceMappingURL=adminShipStatus.router.js.map