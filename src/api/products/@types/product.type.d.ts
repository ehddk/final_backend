interface IProduct{
    /*id */
    id:string;
    /*제품명 */
    productName:string;
    /*제품 가격 */
    price:number;
    /** 제품 판매가 */
    sales:number;
    /**등록일 */
    createdAt?:Date;
    /*상세 이미지 */
    thumbnail:string;
    /**제품 상세 이미지 */
    img:string;
    /* 배송방법  */
    delivery: string  
    /* 판매자  */
    seller ?: string 
    /**제품 상세설명  */
    description:  string
    /** ( 선택 ) 포장타입 */
    packageType?: string 
    /*( 선택 )안내사항 )  */
    detail?: string  
    /*상품 카테고리  */
    category?:string; 
    /* 상품 서브 카테고리 */
    subCategory?:string  

}

// 응답 타입을 위한 새로운 인터페이스 정의
export interface IProductResponse {
    message: string;
    data: IProduct[];
  }