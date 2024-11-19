import { IProduct } from "../@types/product.type";
import { ProductResponseDTO } from "../dto/productResponse.dto"

export interface AdminProductService{
    createProduct(product:Omit<IProduct,"id">):Promise<ProductResponseDTO>;
    getProducts():Promise<ProductResponseDTO[]>;
    getProductsByCategory(category:string):Promise<ProductResponseDTO[]>;
    getProductDetail(productId:string):Promise<ProductResponseDTO | null>;
    updateProduct(productId:string,updatedProduct:Omit<IProduct,"id">):Promise<void>;
    deleteProduct(productId:string):Promise<void>;
}