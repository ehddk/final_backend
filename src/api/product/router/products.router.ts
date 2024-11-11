// import { ROUTES_INDEX } from "@/routers";
// import { extractPath } from "@/utils/path.util";
import express from "express";
import ProductController from "../controller/product.controller"
import { ProductsServiceImpl } from "../service/products.service";
import { MongooseProductRepository } from "../repository/mongooseProduct.repository";
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

    PRODUCT_ROUTES.GET_PRODUCTS,productController.getProducts
    // productController.getProducts
)
productRouter.get(
    PRODUCT_ROUTES.GET_PRODUCT_DETAILS,productController.getProductDetail
)
