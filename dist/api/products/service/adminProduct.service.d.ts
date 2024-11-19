import { IProduct } from "../@types/product.type";
import { ProductResponseDTO } from "../dto/productResponse.dto";
import { ProductRepository } from "../repository/product.repository";
import { AdminProductService } from "./adminProduct.service.type";
export declare class AdminProductServiceImpl implements AdminProductService {
    private readonly _productRepository;
    constructor(productRepository: ProductRepository);
    /**제품 등록 */
    createProduct(product: Omit<IProduct, "id">): Promise<ProductResponseDTO>;
    /**제품 목록 조회 */
    getProducts(): Promise<ProductResponseDTO[]>;
    /**제품 상세 조회 */
    getProductDetail(productId: string): Promise<ProductResponseDTO | null>;
    /**제품 삭제 */
    deleteProduct(productId: string): Promise<void>;
    /**제품 수정 */
    updateProduct(productId: string, updateProduct: Omit<IProduct, "id">): Promise<void>;
}
