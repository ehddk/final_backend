import express from "express";
import AdminProductController from "../controller/adminProduct.controller"
import { AdminProductServiceImpl } from "../service/adminProduct.service"
import { MongooseProductRepository } from "../repository/mongooseProduct.repository";

export const adminProductRouter = express.Router();

/*제품 관련 API 객체*/
const ADMIN_PRODUCT_ROUTES = {
  /**제품 목록 조회 (관리자) */
  GET_PRODUCTS: `/admin-api/products`,
  /**제품 상세 조회 (관리자) */
  GET_PRODUCTDETAIL: `/admin-api/products/:productId`,
  /**제품 생성 (관리자)  */
  CREATE_PRODUCT: `/admin-api/products`,
  /**제품 수정 (관리자) */
  UPDATE_PRODUCT: `/admin-api/products/:productId`,
  /**제품 삭제 (관리자) */
  DELETE_PRODUCT: `/admin-api/products/:productId`,
  /** 더미데이터 생성 */
  CREATE_DUMMY: `/admin-api/products/dummy`,
} as const;

const adminProductController = new AdminProductController(
    new AdminProductServiceImpl(new MongooseProductRepository())
);

adminProductRouter.get(
    ADMIN_PRODUCT_ROUTES.GET_PRODUCTS,adminProductController.getProducts
)
adminProductRouter.get(
    ADMIN_PRODUCT_ROUTES.GET_PRODUCTDETAIL,adminProductController.getProductDetail
)
adminProductRouter.post(
    ADMIN_PRODUCT_ROUTES.CREATE_PRODUCT,adminProductController.createProduct
)

adminProductRouter.delete(
    ADMIN_PRODUCT_ROUTES.DELETE_PRODUCT,adminProductController.deleteProduct
)
adminProductRouter.put(
    ADMIN_PRODUCT_ROUTES.UPDATE_PRODUCT,adminProductController.updateProduct
)