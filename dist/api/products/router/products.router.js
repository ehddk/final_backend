"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
// import { ROUTES_INDEX } from "@/routers";
// import { extractPath } from "@/utils/path.util";
const express_1 = __importDefault(require("express"));
const product_controller_1 = __importDefault(require("../controller/product.controller"));
const products_service_1 = require("../service/products.service");
const mongooseProduct_repository_1 = require("../repository/mongooseProduct.repository");
const routers_1 = require("@/routers");
const path_util_1 = require("@/utils/path.util");
//import AdminProductController from "../controller/adminProduct.controller";
exports.productRouter = express_1.default.Router();
const PRODUCT_ROUTES = {
    GET_PRODUCTS: "/api/products",
    GET_PRODUCT_DETAILS: "/api/products/:productId",
    CREATE_PRODUCT: "/api/products",
    UPDATE_PRODUCT: "/api/products/:productId",
    DELETE_PRODUCT: "/api/products/:productId"
};
const productController = new product_controller_1.default(new products_service_1.ProductsServiceImpl(new mongooseProduct_repository_1.MongooseProductRepository));
exports.productRouter.get((0, path_util_1.extractPath)(PRODUCT_ROUTES.GET_PRODUCTS, routers_1.ROUTES_INDEX.PRODUCTS_API), productController.getProducts
// productController.getProducts
);
exports.productRouter.get((0, path_util_1.extractPath)(PRODUCT_ROUTES.GET_PRODUCT_DETAILS, routers_1.ROUTES_INDEX.PRODUCTS_API), productController.getProductDetail);
//# sourceMappingURL=products.router.js.map