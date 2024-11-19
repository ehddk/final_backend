"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminProductRouter = void 0;
const express_1 = __importDefault(require("express"));
const adminProduct_controller_1 = __importDefault(require("../controller/adminProduct.controller"));
const adminProduct_service_1 = require("../service/adminProduct.service");
const mongooseProduct_repository_1 = require("../repository/mongooseProduct.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const product_validation_1 = require("../dto/validations/product.validation");
exports.adminProductRouter = express_1.default.Router();
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
};
const adminProductController = new adminProduct_controller_1.default(new adminProduct_service_1.AdminProductServiceImpl(new mongooseProduct_repository_1.MongooseProductRepository()));
exports.adminProductRouter.get((0, path_util_1.extractPath)(ADMIN_PRODUCT_ROUTES.GET_PRODUCTS, routers_1.ROUTES_INDEX.ADMIN_PRODUCTS_API), adminProductController.getProducts);
exports.adminProductRouter.get((0, path_util_1.extractPath)(ADMIN_PRODUCT_ROUTES.GET_PRODUCTDETAIL, routers_1.ROUTES_INDEX.ADMIN_PRODUCTS_API), (0, validation_middleware_1.validate)(product_validation_1.adminGetProductDetailValidator), (req, res, next) => {
    console.log('dd');
    next();
}, adminProductController.getProductDetail);
exports.adminProductRouter.post((0, path_util_1.extractPath)(ADMIN_PRODUCT_ROUTES.CREATE_PRODUCT, routers_1.ROUTES_INDEX.ADMIN_PRODUCTS_API), (0, validation_middleware_1.validate)({ body: product_validation_1.adminCreateProductBodyValidator }), adminProductController.createProduct);
exports.adminProductRouter.delete((0, path_util_1.extractPath)(ADMIN_PRODUCT_ROUTES.DELETE_PRODUCT, routers_1.ROUTES_INDEX.ADMIN_PRODUCTS_API), (0, validation_middleware_1.validate)(product_validation_1.adminDeleteProductValidator), adminProductController.deleteProduct);
exports.adminProductRouter.put((0, path_util_1.extractPath)(ADMIN_PRODUCT_ROUTES.UPDATE_PRODUCT, routers_1.ROUTES_INDEX.ADMIN_PRODUCTS_API), (0, validation_middleware_1.validate)(product_validation_1.adminUpdateProductValidator), adminProductController.updateProduct);
//# sourceMappingURL=adminProduct.router.js.map