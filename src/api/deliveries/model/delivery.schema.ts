import mongoose, { Schema } from "mongoose"
import { IDelivery } from "../@types/delivery.type"

const deliverySchema = new mongoose.Schema<IDelivery>(
    {
        userId:{
            type:Schema.Types.ObjectId,
            ref:'User',
            required: true
        },
        //배송지와 연결된 유저명
        name:{
            type:String, 
        },
        //우편번호
        postalCode:{
            type:Number, 
        },
        defaultAddress: {
            type:String, // 기본 주소
            required:true,
        },
        // 상세 주소
        detailAddress: {
            type:String,
        },
        //폰번호
        number:{
            type:String 
        },
        //기본 배송지 여부
        isDefault:{
            type:Boolean, 
        },
    }
)

export const MongooseDelivery = mongoose.model<IDelivery>("Delivery",deliverySchema)