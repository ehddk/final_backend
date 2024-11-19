"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminItems_controller_1 = require("@/api/controllers/admin/adminItems.controller");
const express_1 = __importDefault(require("express"));
const adminItemsRouter = express_1.default.Router();
/** 관리자 아이템 관련 API 경로 객체  */
const ADMIN_Item_ROUTES = {
    /** 아이템 조회 (관리자) */
    GET_ITEMS: `/admin-api/items`,
    /** 아이템 상세 조회 (관리자) */
    GET_ITEM: `/admin-api/item/:ItemId`,
    /** 아이템 생성 (관리자) */
    CREATE_ITEM: `/admin-api/items`,
    /** 아이템 수정 (관리자) */
    UPDATE_ITEM: `/admin-api/items/:ItemId`,
    /** 아이템 삭제 (관리자) */
    DELETE_ITEM: `/admin-api/items/:ItemId`,
};
adminItemsRouter.get(ADMIN_Item_ROUTES.GET_ITEMS, adminItems_controller_1.getSellItems);
adminItemsRouter.get(ADMIN_Item_ROUTES.GET_ITEM, adminItems_controller_1.getSellItem);
adminItemsRouter.post(ADMIN_Item_ROUTES.CREATE_ITEM, adminItems_controller_1.createItem);
adminItemsRouter.put(ADMIN_Item_ROUTES.UPDATE_ITEM, adminItems_controller_1.updateItem);
adminItemsRouter.delete(ADMIN_Item_ROUTES.DELETE_ITEM, adminItems_controller_1.deleteItem);
exports.default = adminItemsRouter;
//# sourceMappingURL=adminItems.router.js.map