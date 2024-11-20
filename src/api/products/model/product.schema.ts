import mongoose from "mongoose";
import { IProduct } from "../@types/product.type"

const productSchema = new mongoose.Schema<IProduct>(
    {
    productName:{
       type:String,
       required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    sales:{
        type:Number,
        required:true,
    },

    // rdate:{ 
    //     type:Date,
    //     required:true,
    //     default:()=> new Date()
    // },
    //대표 이미지
    thumbnail:{
        type:String,
        required:true,
    },
    //상세 이미지
    img:{
        type:String,
        required:true,
    },  
    //배송방법 
    delivery:{
        type:String,
        required:true,
    } ,
    seller:{
        type:String,
        default:'컬리'
    } ,
    description:{
        type:String,
    },
    //( 선택 ) 포장타입
    packageType:{
        type:String
    },

    detail:{
        type:String  //( 선택 )안내사항 
    },
    category:{
        type:String 
    },
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