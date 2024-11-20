import { IProduct } from "../@types/product.type";

export class ProductResponseDTO{
    id:string;
    productName:string;
    price:number;
    sales:number;
    createdAt?:Date; //등록일
    thumbnail:string
    img:string
    delivery: string  //배송방법 
    seller ?: string  //판매자 
    description:  string //제품 상세설명 
    packageType?: string //( 선택 ) 포장타입
    detail?: string  //( 선택 )안내사항 ,
    category?:string;
    subCategory?:string;

    constructor(params:IProduct){
        this.id=params.id;
        this.productName=params.productName;
        this.price=params.price;
        this.sales=params.sales;
        this.createdAt=params.createdAt;
        this.thumbnail=params.thumbnail;
        this.img=params.img;
        this.delivery=params.delivery;
        this.seller=params.seller;
        this.description=params.description;
        this.packageType=params.packageType;
        this.detail = params.detail;
        this.category=params.category;
        this.subCategory=params.subCategory
    }
}