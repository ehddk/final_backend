import { IDelivery } from "../@types/delivery.type";
import { DeliveryRepository } from "./delivery.repository";
import { MongooseDelivery } from "../model/delivery.schema";
import HttpException from "@/api/common/exceptions/http.exception";
import mongoose from "mongoose";
import { MongooseProfile } from "@/api/users/model/profile.schema";
import { MongooseUser } from "@/api/users/model/user.schema";

export class MongooseDeliveryRepository implements DeliveryRepository{

    async save(userId: string,delivery:Omit<IDelivery,"id" | "userId">):Promise<IDelivery>{

        try{
            const newDelivery = new MongooseDelivery({
                userId,
                ...delivery
            });
            await newDelivery.save();
            return newDelivery;
    }catch(error){
        throw new HttpException(500,'배송지 등록중에 오류 발생')
    }
    }
    async findAll(userId:string):Promise<IDelivery[]>{
      //return await this.MongooseDelivery.find({ user: userId }).lean();
         const deliveries=await MongooseDelivery.find({ userId: userId });
       return deliveries;
    }

    async findById(userId: string,deliveryId: string): Promise<IDelivery | null> {
      try{
        console.log('Finding delivery with:', { userId, deliveryId });
        const user=await MongooseUser.findById(userId)
          .populate({
            path:'profile',
            populate:{
              path:'delivery',
              model: 'Delivery' 
            }
          })
          .exec();
       console.log('Found user with profile:', user);
        //   if (!user?.profile.delivery) {
        //     console.log('No delivery found in profile');
        //     return null;
        // }
       // console.log('user?,.prof',user?.profile.delivery)
        const delivery= user?.profile.delivery.find(
          item=>item._id.toString() === deliveryId
        )
        //console.log('해당 배송지 내용',delivery)
        // const delivery= user.profile.delivery.find(
        //   item=>
        // )
        // const delivery= user
        // console.log('devsdsd',delivery)
        // return delivery || null;
          if(!delivery){
            throw new Error('해당 배송지ID가 없습니다. ')
          }
      return delivery || null;
      }
      catch(error){
        console.error('Error in findById:', error);
            throw error;
      }
         
    }

    async update(userId: string,deliveryId:string,updateDeliveryInfo:Partial<IDelivery>):Promise<IDelivery>{
        const results=await MongooseDelivery.findOneAndUpdate({ _id: deliveryId,userId:userId },updateDeliveryInfo);
        console.log('resuttt',results)
        console.log("deliveryId:", deliveryId, "userId:", userId);

        if(!results){
            throw new HttpException(404,"해당 배송지 수정을 할 수 없습니다.")
        }
        return results;
    }
    async delete(userId:string,deliveryId:string):Promise<void>{
        try {
            const result = await MongooseDelivery.deleteOne({
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