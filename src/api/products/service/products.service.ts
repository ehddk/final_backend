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
         throw  new Error(`제품 상세 조회 중 오류가 발생했습니다`);
     }
     }
  

}