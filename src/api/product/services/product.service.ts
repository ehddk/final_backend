import { AxiosInstance } from "axios";
import { pathToUrl } from "../../../utils/url"

const PRODUCT_ROUTES = {
    GET_PRODUCTS: "/api/products",
    GET_PRODUCT_DETAILS:"/api/products/:productId",
    CREATE_PRODUCT:"/api/products",
    UPDATE_PRODUCT:"/api/products/:productId",
    DELETE_PRODUCT:"/api/products/:productId"
   
  } as const;

export default class ProductService{
    constructor(private _ajax:AxiosInstance){}

     /**제품 목록 조회 */
    async getProducts(req:getProductRequest){
        const {path,params,body}=req;

        const url= pathToUrl(PRODUCT_ROUTES.GET_PRODUCTS,path);
        const {data}=await this._ajax.get<getProductResponse>(
            url,
            {
                params,
                data:body
                
            }
        )
        return data;
    }
     /**제품 상세 조회 */
    async getDetailProduct(req:getProductDetailRequest){
        const {path,params,body}=req;

        const url= pathToUrl(PRODUCT_ROUTES.GET_PRODUCT_DETAILS,path);
        const {data}=await this._ajax.get<getProductDetailResponse>(
            url,
            {
                params,
                data:body
                
            }
        )
        return data;
    }
     /**제품 등록 */
    async createProduct(req:createProductRequest){
        const {path,params,body}=req;

        const url= pathToUrl(PRODUCT_ROUTES.CREATE_PRODUCT,path);
        const {data}=await this._ajax.post<createProductResponse>(
            url,
            {
                params,
                data:body
                
            }
        )
        return data;
    }
     /**제품 수정 */
    async updateProduct(req:updateProductRequest){
        const {path,params,body}=req;

        const url= pathToUrl(PRODUCT_ROUTES.UPDATE_PRODUCT,path);
        const {data}=await this._ajax.put<updateProductResponse>(
            url,
            {
                params,
                data:body
                
            }
        )
        return data;
    }

    /**제품 삭제 */
    async deleteProduct(req:deleteProductRequest){
        const {path,params,body}=req;

        const url= pathToUrl(PRODUCT_ROUTES.DELETE_PRODUCT,path);
        const {data}=await this._ajax.delete<deleteProductResponse>(
            url,
            {
                params,
                data:body
                
            }
        )
        return data;
    }
}