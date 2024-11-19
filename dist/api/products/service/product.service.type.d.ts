import { IProduct } from "../@types/product.type";
import { ProductResponseDTO } from "../dto/productResponse.dto";
export interface ProductsService {
    /**제품 목록 조회 */
    getProducts(): Promise<IProduct[]>;
    /**제품 상세 조회 */
    getProductDetail(productId: string): Promise<ProductResponseDTO | null>;
}
