interface IProduct{
    id:string;
    productName:string;
    price:number;
    sales:number;
    rdate:date;
    thumbnail:string;
    img?: string       //상세 이미지
    delivery: string  //배송방법 
    seller ?: string  //판매자 
    description?:  string //제품 상세설명 
    packageType?: string //( 선택 ) 포장타입
    detail: string  //( 선택 )안내사항 
}

// 응답 타입을 위한 새로운 인터페이스 정의
export interface IProductResponse {
    //status: boolean;
    message: string;
    data: IProduct[];
  }