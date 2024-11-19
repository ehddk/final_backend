"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminShipSlots_controller_1 = __importDefault(require("@/api/ships/controller/adminShipSlots.controller"));
const adminShips_service_1 = __importDefault(require("@/api/ships/service/adminShips.service"));
const memoryShip_repository_1 = require("@/api/ships/repository/ship/memoryShip.repository");
const memoryShipType_repository_1 = require("@/api/ships/repository/shipType/memoryShipType.repository");
const memoryShipSlot_repository_1 = require("@/api/ships/repository/shipSlot/memoryShipSlot.repository");
const memoryShipStatus_repository_1 = require("@/api/ships/repository/shipStatus/memoryShipStatus.repository");
const ships_validation_1 = require("../dto/validations/ships.validation");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const adminShipSlotsRouter = express_1.default.Router();
const adminShipSlotsController = new adminShipSlots_controller_1.default(new adminShips_service_1.default(new memoryShip_repository_1.MemoryShipRepository(), new memoryShipType_repository_1.MemoryShipTypeRepository(), new memoryShipSlot_repository_1.MemoryShipSlotRepository(), new memoryShipStatus_repository_1.MemoryShipStatusRepository()));
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
};
/** 관리자 함선 슬롯 관련 API 경로 */
/** 함선 슬롯 상세 조회 (관리자) */
adminShipSlotsRouter.get(ADMIN_SHIP_SLOT_ROUTES.GET_SHIP_SLOT, authUser_middleware_1.authUserMiddleware, adminShipSlotsController.getAdminShipSlot);
/** 함선 슬롯 생성 (관리자) */
adminShipSlotsRouter.post(ADMIN_SHIP_SLOT_ROUTES.CREATE_SHIP_SLOT, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.createShipSlotValidator), adminShipSlotsController.createAdminShipSlot);
/** 함선 슬롯 수정 (관리자) */
adminShipSlotsRouter.put(ADMIN_SHIP_SLOT_ROUTES.UPDATE_SHIP_SLOT, authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(ships_validation_1.updateShipSlotValidator), adminShipSlotsController.updateAdminShipSlot);
/** 함선 슬롯 삭제 (관리자) */
adminShipSlotsRouter.delete(ADMIN_SHIP_SLOT_ROUTES.DELETE_SHIP_SLOT, authUser_middleware_1.authUserMiddleware, adminShipSlotsController.deleteAdminShipSlot);
exports.default = adminShipSlotsRouter;
//# sourceMappingURL=adminShipSlot.router.js.map