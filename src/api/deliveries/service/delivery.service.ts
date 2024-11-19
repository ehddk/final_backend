import HttpException from "@/api/common/exceptions/http.exception";
import { IDelivery } from "../@types/delivery.type";
import { DeliveryResponseDTO } from "../dto/deliveryResponse.dto";
import { DeliveryRepository } from "../repository/delivery.repository";
import { DeliveryService } from "./delivery.service.type";
import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { MongooseProfile } from "@/api/users/model/profile.schema";


export class DeliveryServicesImpl implements DeliveryService{

    private readonly _deliveryRepository:DeliveryRepository;
    private readonly _profileRepository:ProfileRepository;
    private _userRepository: UserRepository;
    constructor(deliveryRepository:DeliveryRepository,profileRepository:ProfileRepository,userRepository:UserRepository){
        this._deliveryRepository = deliveryRepository;
        this._profileRepository = profileRepository;
        this._userRepository = userRepository;
    }
    /**배송지 목록 조회 */
    async getDeliveries(userId: string):Promise<DeliveryResponseDTO[]>{
        try{
            const values=await this._deliveryRepository.findAll(userId);

            return values;
        }catch(error){
            throw  new Error(`배송지 목록 조회 중 오류가 발생했습니다`);
        }
    }
    async getDeliveryDetail(userId:string,deliveryId:string):Promise<DeliveryResponseDTO | null>{
        try{
            if(!deliveryId){
                throw new Error('해당 배송지ID가 없습니다.')
            }
            const delivery = await this._deliveryRepository.findById(userId,deliveryId);
            if(!delivery){
                throw new HttpException(404,"해당 배송지를 찾을 수 없습니다.")
            }
            return delivery || null;
        }catch(error){
            throw  new Error(`배송지 상세 조회 중 오류가 발생했습니다`);
        }
    }
    /**배송지 등록 */
    async createDelivery(userId: string,delivery:Omit<IDelivery,"_id">):Promise<DeliveryResponseDTO>{
        console.log('userId',userId)
        try{
            //유저 찾기
            const user = await this._userRepository.findById(userId);
             if (!user) {
            throw new Error('해당 유저를 찾을 수 없습니다.');
        }
         //   console.log('유저 찾기 :',user)
            //배송지 생성하기
            const newDelivery=await this._deliveryRepository.save(
                userId,
                delivery
            )
          //  console.log('new',newDelivery)
           // console.log('배송지의 userId:', newDelivery.userId);
            //user profile 찾기
            // const userProfile = await this._profileRepository.findByUserId(userId);
            // console.log('userprofile의 id :',userProfile)
            // console.log('user의 id : ',userProfile?.id)
            // if(!userProfile){
            //     throw new Error('해당 유저가 없습니다.')
            // }
         
            // //profile에 delivery업데이트
            // await this._profileRepository.update(userProfile.id,{
            //     delivery:newDelivery.id
            // })
            const updatedProfile = await MongooseProfile.findByIdAndUpdate(
                user.profile.id,
                
                { $push: { delivery:newDelivery} }, //delivery에 새로운배송지 등록.이때 $set 생략해도됨!!
                { new: true } // 새로운 내용을 반환
            ).exec();
           // console.log('user.profile.delivery',updatedProfile)
            //console.log('Updated profile:', updatedProfile);
            return newDelivery;
        }catch(error){
            throw new Error('배송지 등록 중 오류 발생하였습니다.')
        }
    }
    /**배송지 수정 */
    async updateDelivery(userId:string,deliveryId:string,updatedDeliveryInfo:Omit<IDelivery,"id">):Promise<void>{
       try{ //1.유저 찾기
        const user=await this._userRepository.findById(userId)
        if (!user) {
            throw new Error('해당 유저를 찾을 수 없습니다.');
        }
       // console.log('수정 ㅈ중 유저',user)
        //2.배송지 찾기
        const findDelivery = await this._deliveryRepository.findById(userId, deliveryId);
        if (!findDelivery) {
            throw new Error('해당 배송지를 찾을 수 없습니다.');
        }
        //console.log('수정 ㅈ중 배송지 찾기',findDelivery)
        //3.새로운 배송지로 수정하기
        await this._deliveryRepository.update(userId,deliveryId,updatedDeliveryInfo);
        // const updatedDelivery = await this._deliveryRepository.update(
        //     userId,
        //     deliveryId,
        //     updatedDeliveryInfo
        // )    
        // return;
        
    }catch(error){
        console.error('배송지 수정 중 에러:', error);
        throw new Error('배송지 수정 중 오류 발생!!')
    }
}
    /**배송지 삭제 */
    async deleteDelivery(userId: string,deliveryId:string):Promise<void>{
        await this._deliveryRepository.delete(userId,deliveryId);

    }
}