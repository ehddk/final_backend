import { IProduct } from "../@types/product.type";

export class ProductResponseDTO{
    id:string;
    productName:string;
    price:number;
    sales:number;
    rdate:Date; //등록일
    thumbnail:string;  //대표이미지
    img: string       //상세 이미지
    delivery: string  //배송방법 
    seller ?: string  //판매자 
    description:  string //제품 상세설명 
    packageType?: string //( 선택 ) 포장타입
    detail: string  //( 선택 )안내사항 ,
    category?:string;

    constructor(params:IProduct){
        this.id=params.id;
        this.productName=params.productName;
        this.price=params.price;
        this.sales=params.sales;
        this.rdate=params.rdate;
        this.thumbnail=params.thumbnail;
        this.img=params.img;
        this.delivery=params.delivery;
        this.seller=params.seller;
        this.description=params.description;
        this.packageType=params.packageType;
        this.detail = params.detail;
        this.category=params.category;
    }
}