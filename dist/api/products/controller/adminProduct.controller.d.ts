import { NextFunction, Request, Response } from "express";
import { AdminProductService } from "../service/adminProduct.service.type";
export default class AdminProductController {
    private readonly _adminProductService;
    constructor(_adminProductService: AdminProductService);
    getProducts(req: Request<adminGetProductsRequest["path"], adminGetProductsResponse, adminGetProductsRequest["body"], adminGetProductsRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    getProductDetail(req: Request, res: Response, next: NextFunction): Promise<void>;
    createProduct(req: Request<adminCreateProductRequest["path"], adminCreateProductResponse, adminCreateProductRequest["body"], adminCreateProductRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    updateProduct(req: Request<adminUpdateProductRequest["path"], adminUpdateProductResponse, adminUpdateProductRequest["body"], adminUpdateProductRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    deleteProduct(req: Request<adminDeleteProductRequest["path"], adminDeleteProductResponse, adminDeleteProductRequest["body"], adminDeleteProductRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
