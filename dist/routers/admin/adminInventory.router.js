"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const invenCon = __importStar(require("@/api/controllers/admin/adminInventory.controller"));
const adminInventoryRouter = express_1.default.Router();
const BASE_PATH = '/admin-api/inven';
const ADMIN_INVEN_ROUTES = {
    /** 재고 목록 조회 */
    GET_INVENS: `${BASE_PATH}`,
    /** 재고 목록 상세 조회 */
    GET_INVEN: `${BASE_PATH}/:productId`,
    /** 재고 생성 */
    CREATE_INVEN: `${BASE_PATH}`,
    /** 재고 수정 */
    EDIT_INVEN: `${BASE_PATH}/:productId`,
    /** 재고 삭제 */
    DELETE_INVEN: `${BASE_PATH}/:productId`,
};
adminInventoryRouter.get(ADMIN_INVEN_ROUTES.GET_INVENS, invenCon.getInvens);
adminInventoryRouter.get(ADMIN_INVEN_ROUTES.GET_INVEN, invenCon.getInvenDetail);
adminInventoryRouter.post(ADMIN_INVEN_ROUTES.CREATE_INVEN, invenCon.createInven);
adminInventoryRouter.put(ADMIN_INVEN_ROUTES.EDIT_INVEN, invenCon.editInven);
adminInventoryRouter.delete(ADMIN_INVEN_ROUTES.DELETE_INVEN, invenCon.deleteInven);
exports.default = adminInventoryRouter;
//# sourceMappingURL=adminInventory.router.js.map