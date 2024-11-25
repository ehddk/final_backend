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
    async  findByCategory(category: string): Promise<IProduct[]> {
        return await MongooseProduct.find({category})
    }
    async  findBySubCategory(category: string,subCategory?:string): Promise<IProduct[]> {
        return await MongooseProduct.find({category,subCategory})
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

    async search(keyword:string):Promise<IProduct[]>{
        try{
            //처음엔 오직 정확히 키워드를 쳐야만 검색이 나옴.알고보니 정규식 검색부분을 
            // 쓰지 않고 $text로만 검색을 하고 있었던 것. $text는 정확한 단어 매칭만 함.
            // 해결: 부분 검색이 가능한 정규식 검색사용 => $regex
            const products = await MongooseProduct.find({
                productName: {
                    $regex: keyword,
                    $options: 'i'  // 대소문자 구분 안함
                }
            });
            
            return products;
         
        }catch(error){
            console.error('제품 검색 에러:',error)
            throw error;
        }
    }
}