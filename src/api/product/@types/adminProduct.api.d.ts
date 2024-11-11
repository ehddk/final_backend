import { IProduct } from "./product.type";
import { ProductResponseDTO } from '../dto/productResponse.dto'

declare global {
    type adminGetProductsRequestPath = {};
    type adminGetProductsRequestBody = {};
    type adminGetProductsRequestParams = {};

    /** 제품 목록 조회 요청 */
    type adminGetProductsRequest = {
        params: adminGetProductsRequestParams;
        path?: adminGetProductsRequestPath;
        body?: adminGetProductsRequestBody;
    };

    /** 제품 목록 조회 응답 (DTO 참고) */
    type adminGetProductsResponse = Array<ProductResponseDTO>;

    type adminGetProductDetailRequestPath = {
        /** 제품 ID */
        ProductId: string;
    };

    type adminGetProductDetailRequestBody = {};
    type adminGetProductDetailRequestParams = {};

    /** 제품 상세 조회 요청 */
    type adminGetProductDetailRequest = {
        params?: adminGetProductDetailRequestParams;
        path: adminGetProductDetailRequestPath;
        body?: adminGetProductDetailRequestBody;
    };

    /** 제품 상세 조회 응답 (DTO 참고) */
    type adminGetProductDetailResponse = IProduct;

    /**제품 생성 요청 */
    type adminCreateProductRequestBody = Omit<IProduct, "id">;
    type adminCreateProductRequestPath = {};
    type adminCreateProductRequestParams = {};

    type adminCreateProductRequest = {
        params?: adminCreateProductRequestParams;
        path?: adminCreateProductRequestPath;
        body: adminCreateProductRequestBody;
    };

    /** 제품 생성 응답 */
    type adminCreateProductResponse = ProductResponseDTO;

    type adminUpdateProductRequestBody = IProduct
    type adminUpdateProductRequestPath = {
        /** 제품 ID */
        productId: string;
    };
    type adminUpdateProductRequestParams = {};

    /** 제품 수정 요청 */
    type adminUpdateProductRequest = {
        params?: adminUpdateProductRequestParams;
        path: adminUpdateProductRequestPath;
        body: adminUpdateProductRequestBody;
    };

    /** 제품 수정 응답 */
    type adminUpdateProductResponse = void;

    type adminDeleteProductRequestPath = {
        /** 제품 ID */
        productId: string;
    };
    type adminDeleteProductRequestBody = {};
    type adminDeleteProductRequestParams = {};

    /** 제품 삭제 요청 */
    type adminDeleteProductRequest = {
        params?: adminDeleteProductRequestParams;
        path: adminDeleteProductRequestPath;
        body?: adminDeleteProductRequestBody;
    };

    /** 제품 삭제 응답 */
    type adminDeleteProductResponse = void;
}

export {};