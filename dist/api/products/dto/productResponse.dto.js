"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponseDTO = void 0;
class ProductResponseDTO {
    id;
    productName;
    price;
    sales;
    rdate; //등록일
    thumbnail;
    ; //대표이미지
    img; //상세 이미지
    delivery; //배송방법 
    seller; //판매자 
    description; //제품 상세설명 
    packageType; //( 선택 ) 포장타입
    detail; //( 선택 )안내사항 ,
    category;
    constructor(params) {
        this.id = params.id;
        this.productName = params.productName;
        this.price = params.price;
        this.sales = params.sales;
        this.rdate = params.rdate;
        this.thumbnail = params.thumbnail;
        this.img = params.img;
        this.delivery = params.delivery;
        this.seller = params.seller;
        this.description = params.description;
        this.packageType = params.packageType;
        this.detail = params.detail;
        this.category = params.category;
    }
}
exports.ProductResponseDTO = ProductResponseDTO;
//# sourceMappingURL=productResponse.dto.js.map