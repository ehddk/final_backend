import { IProduct } from "../@types/product.type";
import { ProductResponseDTO } from "../dto/productResponse.dto"

export interface AdminProductService{
    /** 제품 등록 */
    createProduct(product:Omit<IProduct,"id">):Promise<ProductResponseDTO>;
    /**제품 목록 조회 */
    getProducts():Promise<ProductResponseDTO[]>;
     /**카테고리별 제품 목록 조회 */
    getProductsByCategory(category:string):Promise<ProductResponseDTO[]>;
     /**제품 상세 조회 */
    getProductDetail(productId:string):Promise<ProductResponseDTO | null>;
     /**제품 업데이트 */
    updateProduct(productId:string,updatedProduct:Omit<IProduct,"id">):Promise<void>;
    /**제품 삭제 */
    deleteProduct(productId:string):Promise<void>;
}