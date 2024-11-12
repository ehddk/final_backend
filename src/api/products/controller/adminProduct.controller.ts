import { NextFunction, Request, Response } from "express";
import { AdminProductService } from "../service/adminProduct.service.type"

export default class AdminProductController{
    private readonly _adminProductService:AdminProductService;
    constructor(_adminProductService:AdminProductService){
        this._adminProductService = _adminProductService;

        this.getProducts=this.getProducts.bind(this);
        this.getProductDetail=this.getProductDetail.bind(this);
        this.createProduct=this.createProduct.bind(this);
        this.updateProduct=this.updateProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);

    }
    async getProducts(req:Request<
            adminGetProductsRequest["path"],
            adminGetProductsResponse,
            adminGetProductsRequest["body"],
            adminGetProductsRequest["params"]
        >,
        res:Response,next:NextFunction){
    try{
        const products= await this._adminProductService.getProducts()
        console.log('rpdi',products)
        res.send(products)
        // res.send('관리자 제품 목록 조회')
    }catch(error){
        next(error)
    }
    }      
    async getProductDetail(req:Request,res:Response,next:NextFunction){
        try{
           const product= await this._adminProductService.getProductDetail(req.params.productId)
           console.log('productdetail',product)
           res.send(product)
        }catch(error){
            next(error)
        }
    
    }
    async createProduct(req:Request<
            adminCreateProductRequest["path"],
            adminCreateProductResponse,
            adminCreateProductRequest["body"],
            adminCreateProductRequest["params"]
        >,res:Response,
        next:NextFunction){
            const {productName,price,sales,thumbnail,img,delivery,description,seller,packageType,detail,rdate,category}=req.body;
        try{
            const product=await this._adminProductService.createProduct({
                productName,
                price,
                sales,
                thumbnail,
                img,
                delivery,
                seller,
                description,
                packageType,
                detail,
                rdate,
                category
            })
            
            res.send(product)
            console.log('dpro',product)
        }catch(error){
            next(error)
        }
    
    }
    async updateProduct(req:Request<
        adminUpdateProductRequest["path"],
        adminUpdateProductResponse,
        adminUpdateProductRequest["body"],
        adminUpdateProductRequest["params"]>,
        res:Response,next:NextFunction){
            const {productId}= req.params;
        try{
           await this._adminProductService.updateProduct(productId,req.body);
           res.status(204).json();
        }catch(error){
            next(error)
        }
    
    }
    async deleteProduct(req:Request<
            adminDeleteProductRequest["path"],
            adminDeleteProductResponse,
            adminDeleteProductRequest["body"],
            adminDeleteProductRequest["params"]
        >,res:Response,next:NextFunction){
        const {productId}=req.params;
        try{
            await this._adminProductService.deleteProduct(productId);
            res.send("삭제 성공")
        }catch(error){
            next(error)
        }
    
    }
}