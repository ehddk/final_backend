import { IDelivery } from "../@types/delivery.type";
import { DeliveryRepository } from "./delivery.repository";
import {MonoogseDelivery} from "../model/delivery.schema";
import HttpException from "@/api/common/exceptions/http.exception";
import mongoose from "mongoose";

export class MongooseDeliveryRepository implements DeliveryRepository{

    async save(userId: string,delivery:Omit<IDelivery,"id" | "userId">):Promise<IDelivery>{

        try{
            const newDelivery = new MonoogseDelivery({
                userId,
                ...delivery
            });
            await newDelivery.save();
            return newDelivery;
    }catch(error){
        throw new HttpException(500,'배송지 등록중에 오류 발생')
    }
    }
    async findAll(userId: string):Promise<IDelivery[]>{
        const deliveries=await MonoogseDelivery.find();
        return deliveries;
    }

    async findById(userId: string,deliveryId: string): Promise<IDelivery | null> {
            const delivery= await MonoogseDelivery.findById(deliveryId);
            return delivery;
    }

    async update(userId: string,deliveryId:string,updateDeliveryInfo:Partial<IDelivery>):Promise<IDelivery>{
        const results=await MonoogseDelivery.findOneAndUpdate({ _id: deliveryId,userId:userId },updateDeliveryInfo);
        console.log('resuttt',results)
        console.log("deliveryId:", deliveryId, "userId:", userId);

        if(!results){
            throw new HttpException(404,"해당 배송지 수정을 할 수 없습니다.")
        }
        return results;
    }
    async delete(userId:string,deliveryId:string):Promise<void>{
        try {
            const result = await MonoogseDelivery.deleteOne({
              _id: new mongoose.Types.ObjectId(deliveryId),
              userId: userId 
            });
        
            // 삭제된 문서가 없는 경우 처리
            if (result.deletedCount === 0) {
              throw new Error('배송지를 찾을 수 없습니다.');
            }
        
          } catch (error) {
            if (error instanceof mongoose.Error.CastError) {
              throw new Error('잘못된 배송지 ID 형식입니다.');
            }
            throw error;
          }
    }
}