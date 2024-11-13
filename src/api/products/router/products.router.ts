// import { ROUTES_INDEX } from "@/routers";
// import { extractPath } from "@/utils/path.util";
import express from "express";
import ProductController from "../controller/product.controller"
import { ProductsServiceImpl } from "../service/products.service";
import { MongooseProductRepository } from "../repository/mongooseProduct.repository";
import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
//import AdminProductController from "../controller/adminProduct.controller";

export const productRouter=express.Router();

const PRODUCT_ROUTES = {
    GET_PRODUCTS: "/api/products",
    GET_PRODUCT_DETAILS:"/api/products/:productId",
    CREATE_PRODUCT:"/api/products",
    UPDATE_PRODUCT:"/api/products/:productId",
    DELETE_PRODUCT:"/api/products/:productId"
   
  } as const;

const productController = new ProductController(
    new ProductsServiceImpl(new MongooseProductRepository)
);

productRouter.get(
    extractPath(PRODUCT_ROUTES.GET_PRODUCTS,ROUTES_INDEX.PRODUCTS_API),
    productController.getProducts
    // productController.getProducts
)
productRouter.get(
    extractPath(PRODUCT_ROUTES.GET_PRODUCT_DETAILS,ROUTES_INDEX.PRODUCTS_API),
    productController.getProductDetail
)
