import { IProduct } from "../@types/product.type";

export interface ProductRepository{
    /**제품 생성 */
    save(product:Omit<IProduct,"id">):Promise<IProduct>;
    /**제품 목록 조회 */
    findAll():Promise<IProduct[]>;
    /**카테고리별 제품 목록 조회 */
    findByCategory(category:string):Promise<IProduct[]>
    /**서브 카테고리별 제품 목록 조회 */
    findBySubCategory(category:string,subCategory:string):Promise<IProduct[]>
    /**제품 상세 조회 */
    findById(id:string):Promise<IProduct | null>;
    /**제품 수정 */
    update(productId:string,updateProductInfo:Partial<IProduct>):Promise<IProduct>;
    /**제품 삭제 */
    delete(productId:string):Promise<void>;
    /**제품 검색 */
    search(keyword:string):Promise<IProduct[]>
}