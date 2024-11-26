import { IProductResponse } from "../@types/product.type";
import { ProductResponseDTO } from "../dto/productResponse.dto";
import { ProductsService } from "./product.service.type";
import { ProductRepository } from "../repository/product.repository";
import HttpException from "../../common/exceptions/http.exception";

export class ProductsServiceImpl implements ProductsService{
    private readonly _productRepository: ProductRepository;
constructor(productRepository:ProductRepository){
   this._productRepository=productRepository;
}
    /**제품 목록 조회 */
    async getProducts():Promise<ProductResponseDTO[]>{
      try{
         const products=await this._productRepository.findAll();
         return products;
      }catch(error){
         throw new Error('제품 목록 조회 중 오류가 발생했습니다.')
      }
    }
        /**제품 상세 조회 */
    async getProductDetail(productId:string):Promise<ProductResponseDTO | null>{
      try{
         const product=await this._productRepository.findById(productId);
         if(!product){
             throw new HttpException(404,"해당 제품을 찾을 수 없습니다.")
         }
         //const product=this.products.find(item=>item.id === productId);
         return product || null;
     }catch(error){
         throw  new Error(`해당 제품이 없습니다.`);
     }
     }
       /** 카테고리별 제품 목록 조회 */
    async getProductsByCategory(category: string): Promise<ProductResponseDTO[]> {
        try{
            // const {category,subCategory}=params;
           console.log('서비스에 카테고리 있?',category)
            const products=await this._productRepository.findByCategory(category);
         //   console.log('제품 있나요?서비스',products)
            return products;
        }catch(error){
            throw new Error('카테고리별 제품 목록 조회 중 오류 발생.')
        }
    }   
    async  getProductsBySubCategory(category: string, subCategory: string): Promise<ProductResponseDTO[]> {
        try{
           // console.log('category:서비스에 카테고리 있?',{category,subCategory})
            const products=await this._productRepository.findBySubCategory(category,subCategory);
            return products;
        }catch(error){
            throw new Error("서브카테고리별 제품 목록 조회 중 오류 발생")
        }
    }
    async getProductsBySearch(keyword: string): Promise<ProductResponseDTO[]> {
        try{
           // console.log('서비스 시작.키워드:',keyword )
            const products=await this._productRepository.search(keyword)
            //console.log('검색 후 제품?',products)
            if (!products || products.length === 0) {
                return [];
            }
            return products.map(product=> new ProductResponseDTO(product))
        }catch(error){
            throw new Error(" 제품 검색 조회 중 오류 발생")
        }
    }

}