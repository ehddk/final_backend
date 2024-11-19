"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminShipTypes_controller_1 = __importDefault(require("@/api/ships/controller/adminShipTypes.controller"));
const adminShips_service_1 = __importDefault(require("@/api/ships/service/adminShips.service"));
const memoryShip_repository_1 = require("@/api/ships/repository/ship/memoryShip.repository");
const memoryShipType_repository_1 = require("@/api/ships/repository/shipType/memoryShipType.repository");
const memoryShipSlot_repository_1 = require("@/api/ships/repository/shipSlot/memoryShipSlot.repository");
const memoryShipStatus_repository_1 = require("@/api/ships/repository/shipStatus/memoryShipStatus.repository");
const ships_validation_1 = require("@/api/ships/dto/validations/ships.validation");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const adminShipTypesRouter = express_1.default.Router();
const adminShipTypesController = new adminShipTypes_controller_1.default(new adminShips_service_1.default(new memoryShip_repository_1.MemoryShipRepository(), new memoryShipType_repository_1.MemoryShipTypeRepository(), new memoryShipSlot_repository_1.MemoryShipSlotRepository(), new memoryShipStatus_repository_1.MemoryShipStatusRepository()));
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
};
/** 관리자 함선 타입 관련 API 경로 */
/** 함선 타입 조회 (관리자) */
adminShipTypesRouter.get(ADMIN_SHIP_TYPE_ROUTES.GET_SHIP_TYPE, authUser_middleware_1.authUserMiddleware, adminShipTypesController.getAdminShipType);
/** 함선 타입 생성 (관리자) */
adminShipTypesRouter.post(ADMIN_SHIP_TYPE_ROUTES.CREATE_SHIP_TYPE, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.createShipTypeValidator), adminShipTypesController.createAdminShipType);
/** 함선 타입 수정 (관리자) */
adminShipTypesRouter.put(ADMIN_SHIP_TYPE_ROUTES.UPDATE_SHIP_TYPE, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.updateShipTypeValidator), adminShipTypesController.updateAdminShipType);
/** 함선 타입 삭제 (관리자) */
adminShipTypesRouter.delete(ADMIN_SHIP_TYPE_ROUTES.DELETE_SHIP_TYPE, authUser_middleware_1.authUserMiddleware, adminShipTypesController.deleteAdminShipType);
exports.default = adminShipTypesRouter;
//# sourceMappingURL=adminShipType.router.js.map