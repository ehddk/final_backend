import {MongooseProduct} from '../model/product.schema'
import { IProduct } from '../@types/product.type'
import { ProductRepository } from './product.repository'
import HttpException from '../../common/exceptions/http.exception';

export class MongooseProductRepository implements ProductRepository{
    async findAll():Promise<IProduct[]>{
        const products= await MongooseProduct.find();
        return products;
    }

    async findById(productId:string):Promise<IProduct | null>{
        const product = await MongooseProduct.findById(productId);
        console.log('productfind',product)
        return product;
    }

    async save(product:Omit<IProduct,"id">):Promise<IProduct>{
        try {
            const newProduct = new MongooseProduct({
                ...product,
            });
            await newProduct.save();
            console.log('sdd', newProduct);
            return newProduct;
        } catch (error) {
            console.error("Error saving product:", error);
            throw new HttpException(500, "제품 저장 중 오류가 발생했습니다.");
        }
    }
    async update(productId:string,updatedProduct:Partial<IProduct>):Promise<IProduct>{
        const results = await MongooseProduct.findByIdAndUpdate(
            productId,
            updatedProduct,
            {new :true}
        )
        if(!results){
            throw new HttpException(404, "해당 제품을 수정 할 수 없습니다.");
        }
        return results;
    }

    async delete(productId:string):Promise<void>{
        await MongooseProduct.deleteOne({_id:productId})
        return;
    }
}