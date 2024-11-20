interface IProduct{
    id:string;
    productName:string;
    price:number;
    sales:number;
    createdAt?:Date;
    // thumbnail:File | Blob | null; 
    // img: File | Blob | null;      //상세 이미지
    thumbnail:string;
    img:string;
    delivery: string  //배송방법 
    seller ?: string  //판매자 
    description:  string //제품 상세설명 
    packageType?: string //( 선택 ) 포장타입
    detail?: string  //( 선택 )안내사항 
    category?:string; //상품 카테고리
    subCategory?:string  //상품 서브 카테고리

}

// 응답 타입을 위한 새로운 인터페이스 정의
export interface IProductResponse {
    //status: boolean;
    message: string;
    data: IProduct[];
  }