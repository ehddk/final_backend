type getProductRequestPath={};

type getProductRequestBody={};
type getProductRequestParams={};
type getProductRequest={
    path?:getProductRequestPath;
    body?:getProductRequestBody;
    params?:getProductRequestParams
}

type getProductResponse=IProduct;

/*상품 상세 조회 */
type getProductDetailRequestPath={
    productId:string;
};
type getProductDetailRequestBody={};
type getProductDetailRequestParams={};
type getProductDetailRequest={
    path?:getProductDetailRequestPath;
    body?:getProductDetailRequestBody;
    params?:getProductDetailRequestParams;

}
/*상품 상세 조회 응답*/
type getProductDetailResponse=IProduct;

/**제품 등록 요청*/
type createProductRequestPath={};
type createProductRequestParams={

};
type createProductRequestBody=IProduct;

type createProductRequest={
    path?:createProductRequestPath;
    body:createProductRequestBody;
    params?:createProductRequestParams
}
/**제품 등록 응답*/
type createProductResponse=IProduct;


 /**제품 수정 요청*/
 type updateProductRequestPath={};
 type updateProductRequestParams={};
 type updateProductRequestBody=Omit<{
    productId:string;
    
 }>

 type updateProductRequest={
    path?:updateProductRequestPath;
    params?:updateProductRequestParams;
    body:updateProductRequestBody;

 }
 /**제품 수정 응답*/
 type updateProductResponse=void;

/**제품 삭제 요청*/
type deleteProductRequestPath={
    productId:string;
};
type deleteProductRequestBody={};
type deleteProductRequestParams={};

type deleteProductRequest={
    body?:deleteProductRequestBody;
    params?:deleteProductRequestParams;
    path:deleteProductRequestPath;
}
/**제품 삭제 응답*/
type deleteProductResponse=void;