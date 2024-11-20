import { NextFunction, Request, Response } from "express";
import { ProductsService } from "../service/product.service.type"
import { getCategoriesRequest, getCategoriesResponse } from "../@types/product.api";


export default class ProductController{
    private readonly _productsService: ProductsService;
    constructor(_productsService: ProductsService){
        this._productsService = _productsService;

        this.getProducts= this.getProducts.bind(this);
        this.getProductDetail=this.getProductDetail.bind(this);
        this.getProductsByCategory=this.getProductsByCategory.bind(this);
    }
       /**제품 목록 조회 */
   async getProducts(
        req:Request<getProductRequest["path"],
        getProductRequest["body"],
        getProductRequest["params"],
        getProductResponse>,
        res:Response,
        next:NextFunction
   ){
    try{
        const products = await this._productsService.getProducts();
        res.send(products);
       // res.send('목록 조회')
    }catch(error){
        next(error)
    }
   }

   async getProductsByCategory(
    req:Request<getCategoriesRequest["path"],
    getCategoriesResponse,
    getCategoriesRequest["body"],
    getCategoriesRequest["query"]
    >,res:Response,next:NextFunction){
        try{
            const {category}=req.query;
            let products;
            console.log('카테고리 뜨나요??',category)
        if (category) {
            products = await this._productsService.getProductsByCategory(category);
        } else {
            products = await this._productsService.getProducts();
        }

         res.json(products);
        }catch(error){
            next(error)
        }
    }
   /**제품 상세 조회 */
  

   async getProductDetail(
    req: Request<getProductDetailRequestPath, getProductDetailResponse, getProductDetailRequestBody>,
     res: Response,
    next: NextFunction
) {
    try {
        const product = await this._productsService.getProductDetail(req.params.productId)
           // req.params.productId // productId가 params에서 올바르게 가져와지도록 수정됨
      
       res.send(product);
    } catch (error) {
        next(error);
    }
}
}