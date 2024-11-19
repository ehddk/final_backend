"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminProducts_controller_1 = require("@/api/controllers/admin/adminProducts.controller");
const express_1 = __importDefault(require("express"));
const adminProductsRouter = express_1.default.Router();
/** 관리자 제품 관련 API 경로 객체 */
const ADMIN_PRODUCTS_ROUTES = {
    /** 제품 목록 조회 [관리자] */
    GET_PRODUCTS: `/admin-api/products`,
    /** 제품 상세 조회 [관리자] */
    GET_PRODUCTS_DETAIL: `/admin-api/productId`,
    /** 제품 생성 [관리자] */
    CREATE_PRODUCT: `/admin-api/products`,
    /** 제품 수정 [관리자] */
    UPDATE_PRODUCT: `/admin-api/productId`,
    /** 제품 삭제 [관리자] */
    DELETE_PRODUCT: `/admin-api/productId`,
};
adminProductsRouter.get(ADMIN_PRODUCTS_ROUTES.GET_PRODUCTS, adminProducts_controller_1.getProducts);
adminProductsRouter.get(ADMIN_PRODUCTS_ROUTES.GET_PRODUCTS_DETAIL, adminProducts_controller_1.getProductDetail);
adminProductsRouter.post(ADMIN_PRODUCTS_ROUTES.CREATE_PRODUCT, adminProducts_controller_1.createProduct);
adminProductsRouter.put(ADMIN_PRODUCTS_ROUTES.UPDATE_PRODUCT, adminProducts_controller_1.updateProduct);
adminProductsRouter.delete(ADMIN_PRODUCTS_ROUTES.DELETE_PRODUCT, adminProducts_controller_1.deleteProduct);
exports.default = adminProductsRouter;
//# sourceMappingURL=adminProducts.router.js.map