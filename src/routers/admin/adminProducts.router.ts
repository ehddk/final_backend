import {
    getProducts,
    getProductDetail,
    createProduct,
    updateProduct,
    deleteProduct,
} from "@/api/controllers/admin/adminProducts.controller";
import express from "express";

const adminProductsRouter = express.Router();

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
} as const;

adminProductsRouter.get(ADMIN_PRODUCTS_ROUTES.GET_PRODUCTS, getProducts);
adminProductsRouter.get(
    ADMIN_PRODUCTS_ROUTES.GET_PRODUCTS_DETAIL,
    getProductDetail
);
adminProductsRouter.post(ADMIN_PRODUCTS_ROUTES.CREATE_PRODUCT, createProduct);
adminProductsRouter.put(ADMIN_PRODUCTS_ROUTES.UPDATE_PRODUCT, updateProduct);
adminProductsRouter.delete(ADMIN_PRODUCTS_ROUTES.DELETE_PRODUCT, deleteProduct);

export default adminProductsRouter;
