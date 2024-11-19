import { IProduct } from '../@types/product.type';
import { ProductRepository } from './product.repository';
export declare class MongooseProductRepository implements ProductRepository {
    findAll(): Promise<IProduct[]>;
    findById(productId: string): Promise<IProduct | null>;
    save(product: Omit<IProduct, "id">): Promise<IProduct>;
    update(productId: string, updatedProduct: Partial<IProduct>): Promise<IProduct>;
    delete(productId: string): Promise<void>;
}
