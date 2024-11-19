import { ProductResponseDTO } from "../dto/productResponse.dto";
import { ProductsService } from "./product.service.type";
import { ProductRepository } from "../repository/product.repository";
export declare class ProductsServiceImpl implements ProductsService {
    private readonly _productRepository;
    constructor(productRepository: ProductRepository);
    /**제품 목록 조회 */
    getProducts(): Promise<ProductResponseDTO[]>;
    /**제품 상세 조회 */
    getProductDetail(productId: string): Promise<ProductResponseDTO | null>;
}
