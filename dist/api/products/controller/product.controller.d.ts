import { NextFunction, Request, Response } from "express";
import { ProductsService } from "../service/product.service.type";
export default class ProductController {
    private readonly _productsService;
    constructor(_productsService: ProductsService);
    /**제품 목록 조회 */
    getProducts(req: Request<getProductRequest["path"], getProductRequest["body"], getProductRequest["params"], getProductResponse>, res: Response, next: NextFunction): Promise<void>;
    /**제품 상세 조회 */
    getProductDetail(req: Request<getProductDetailRequestPath, getProductDetailResponse, getProductDetailRequestBody>, res: Response, next: NextFunction): Promise<void>;
}
