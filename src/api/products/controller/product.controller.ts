import { NextFunction, Request, Response } from "express";
import { ProductsService } from "../service/product.service.type"
import { getCategoriesRequest, getCategoriesResponse, getProductsBySearchResponse, getSubCategoriesRequest, getSubCategoriesResponse,getProductsBySearchRequest } from "../@types/product.api";


export default class ProductController{
    private readonly _productsService: ProductsService;
    constructor(_productsService: ProductsService){
        this._productsService = _productsService;

        this.getProducts= this.getProducts.bind(this);
        this.getProductDetail=this.getProductDetail.bind(this);
        this.getProductsByCategory=this.getProductsByCategory.bind(this);
        this.getProductsBySubCategory=this.getProductsBySubCategory.bind(this);
        this.getProductsBySearch=this.getProductsBySearch.bind(this)
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
            console.log('물건있나??',products)
        } else {
            products = await this._productsService.getProducts();
        }

         res.json(products);
        }catch(error){
            next(error)
        }
    }

    /**서브카테고리별 목록 조회 */
    async getProductsBySubCategory(
        req:Request<
        getSubCategoriesRequest["path"],
        getSubCategoriesResponse,
        getSubCategoriesRequest["body"],
        getSubCategoriesRequest["query"]
        >,res:Response,next:NextFunction){
            try{
                console.log('query있음?',req.query)
                const {category, subCategory}=req.query;
                let products;

                if(category && subCategory){
                    const results= await this._productsService.getProductsBySubCategory(category,subCategory);
                 //   console.log('리절트',results)
                    res.json({results})
                }else if(category){
                    products = await this._productsService.getProductsByCategory(category)
                
                }else {
                    // 카테고리 정보가 없는 경우 전체 상품
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
/**제품 검색 조회 */
async getProductsBySearch(
    req:Request<getProductsBySearchRequest["path"],
    getProductsBySearchResponse,
    getProductsBySearchRequest["body"],
    getProductsBySearchRequest["query"]
    >,res:Response,next:NextFunction){
        try{
            console.log('컨트롤렂진입')
            const {keyword}=req.query;
            console.log('키워드지롱 ',keyword)
            if(!keyword){
                return res.status(400).json({ 
                    message: '검색어를 입력해주세요' 
                });
            }
            const products=await this._productsService.getProductsBySearch(
                keyword
            )
            res.json(products);
        }catch(error){
            res.status(500).json({ 
                message: '검색 중 오류가 발생했습니다' 
            });
        }
    }
}