import { NextFunction, Request, Response } from "express";
import { AdminProductService } from "../service/adminProduct.service.type"
import { faker } from "@faker-js/faker";
import { generateProducts } from "@/dummy/product.dummy";
import { getCategoriesRequest,getCategoriesResponse } from "../@types/product.api";

export default class AdminProductController{
    private readonly _adminProductService:AdminProductService;
    constructor(_adminProductService:AdminProductService){
        this._adminProductService = _adminProductService;

        this.getProducts=this.getProducts.bind(this);
        this.getProductDetail=this.getProductDetail.bind(this);
        this.createProduct=this.createProduct.bind(this);
        this.updateProduct=this.updateProduct.bind(this);
        this.deleteProduct=this.deleteProduct.bind(this);
        this.createDummy= this.createDummy.bind(this)
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
       // console.log('rpdi',products)
        res.send(products)
        // res.send('관리자 제품 목록 조회')
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
                products = await this._adminProductService.getProductsByCategory(category);
            } else {
                products = await this._adminProductService.getProducts();
            }
    
             res.json(products);
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
            const {productName,price,sales,thumbnail,img,delivery,description,seller,packageType,detail,createdAt,category}=req.body;
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
                createdAt,
                category
            })
            
            res.send(product)
           // console.log('dpro',product)
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
         res.send('수정 성공')
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
       
    async createDummy(req:Request,res:Response,next:NextFunction){
        try{
            const count = Number(req.query.count) || 10;
            const dummyProducts = generateProducts(count)

            //db에 데이터 저장 더미.
            const products=await Promise.all(
                dummyProducts.map(item=>
                    this._adminProductService.createProduct(item))
            )
            res.status(201).json({
                message:`${count}개의 제품데이터가 생성되었습니다.`,
                products
            })

        }catch(error){
            next(error)
        }
        
    }
}