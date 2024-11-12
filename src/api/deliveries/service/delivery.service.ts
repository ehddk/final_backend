import HttpException from "@/api/common/exceptions/http.exception";
import { IDelivery } from "../@types/delivery.type";
import { DeliveryResponseDTO } from "../dto/deliveryResponse.dto";
import { DeliveryRepository } from "../repository/delivery.repository";
import { DeliveryService } from "./delivery.service.type";


export class DeliveryServicesImpl implements DeliveryService{

    private readonly _deliveryRepository:DeliveryRepository;
    constructor(deliveryRepository:DeliveryRepository){
        this._deliveryRepository = deliveryRepository;
    }
    /**배송지 목록 조회 */
    async getDeliveries(userId: string):Promise<DeliveryResponseDTO[]>{
        try{
            const values=await this._deliveryRepository.findAll(userId);
            //console.log('deliverySer',values)
            //res.status(200).json(values); 
            return values;
        }catch(error){
            throw  new Error(`배송지 목록 조회 중 오류가 발생했습니다`);
        }
    }
    async getDeliveryDetail(userId:string,deliveryId:string):Promise<DeliveryResponseDTO | null>{
        try{
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
    async createDelivery(userId: string,delivery:Omit<IDelivery,"id">):Promise<DeliveryResponseDTO>{
        try{
            const newDelivery=await this._deliveryRepository.save(
                userId,
                delivery
            )
            return newDelivery;
        }catch(error){
            throw new Error('배송지 등록 중 오류 발생하였습니다.')
        }
    }
    /**배송지 수정 */
    async updateDelivery(userId:string,deliveryId:string,updatedDeliveryInfo:Omit<IDelivery,"id">):Promise<void>{
        await this._deliveryRepository.update(userId,deliveryId,updatedDeliveryInfo);
        return;
    }
    /**배송지 삭제 */
    async deleteDelivery(userId: string,deliveryId:string):Promise<void>{
        await this._deliveryRepository.delete(userId,deliveryId);

    }
}