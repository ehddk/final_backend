import HttpException from "../../common/exceptions/http.exception";
import { IProduct } from "../@types/product.type";
import { ProductResponseDTO } from "../dto/productResponse.dto"
import { ProductRepository } from "../repository/product.repository";
import { AdminProductService } from "./adminProduct.service.type"

export class AdminProductServiceImpl implements AdminProductService{

    private readonly _productRepository:ProductRepository;
constructor(productRepository:ProductRepository){
    this._productRepository=productRepository;
}
    /**제품 등록 */
    async createProduct(product:Omit<IProduct,"id">):Promise<ProductResponseDTO>{
       try{
        // const newProduct ={
        //     id:'123',
        //     ...product
        // };
        const newProduct=await this._productRepository.save({
            ...product,
           // createdAt:new Date()
        })
        return newProduct
       
       } 
       catch(error){
        throw new Error(`제품 생성 중 오류가 발생했습니다`);
       }
    }
    /**제품 목록 조회 */
    async getProducts():Promise<ProductResponseDTO[]>{
        try{
            const products=await this._productRepository.findAll();
            return products;
          //  return [...this.products];
        }catch(error){
            throw  new Error(`제품 목록 조회 중 오류가 발생했습니다`);
        }
    }
    /** 카테고리별 제품 목록 조회 */
    async getProductsByCategory(category: string): Promise<ProductResponseDTO[]> {
        try{
            const products=await this._productRepository.findByCategory(category);
            return products;
        }catch(error){
            throw new Error('카테고리별 제품 목록 조회 중 오류 발생.')
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
    /**제품 삭제 */
    async deleteProduct(productId:string):Promise<void>{
        await this._productRepository.delete(productId)
    }
    /**제품 수정 */
    async updateProduct(productId:string,updateProduct:Omit<IProduct,"id">):Promise<void>{
      await this._productRepository.update(productId,updateProduct);
       return;

    }

}