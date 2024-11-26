import mongoose from "mongoose";
import { IProduct } from "../@types/product.type"

const productSchema = new mongoose.Schema<IProduct>(
    {
    /**제품명 */
    productName:{
       type:String,
       required:true,
    },
    /**제품 정가 */
    price:{
        type:Number,
        required:true,
    },
     /**제품 할인가 */
    sales:{
        type:Number,
        required:true,
    },
    /*대표 이미지*/
    thumbnail:{
        type:String,
        required:true,
    },
    /*상세 이미지 */
    img:{
        type:String,
        required:true,
    },  
    /*배송방법 */
    delivery:{
        type:String,
        required:true,
    } ,
    /* 판매자 */
    seller:{
        type:String,
        default:'컬리'
    } ,
    /*제품 설명 */
    description:{
        type:String,
    },
    /*( 선택 ) 포장타입 */
    packageType:{
        type:String
    },
    /* ( 선택 )안내사항  */
    detail:{
        type:String  
    },
    /** 카테고리 */
    category:{
        type:String 
    },
    /** 서브 카테고리 */
    subCategory:{
        type:String,
        required: false  
    }
    },
    {
        timestamps:true
    }

)

export const MongooseProduct = mongoose.model<IProduct>("Product",productSchema)
productSchema.index({"productName":"text"})