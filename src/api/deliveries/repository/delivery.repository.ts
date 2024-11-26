import { IDelivery } from "../@types/delivery.type";


export interface DeliveryRepository{
    /**배송지 등록 */
    save(userId: string, delivery:Omit<IDelivery,"id">):Promise<IDelivery>;
     /**배송지 상세 조회 */
    findById(userId:string,deliveryId:string):Promise<IDelivery | null >;
    /**배송지 목록 조회 */
    findAll(userId: string):Promise<IDelivery[]>;
    /**배송지 수정 */
    update(userId:string,deliveryId:string,updateDeliveryInfo:Partial<IDelivery>):Promise<IDelivery>;
    /**배송지 삭제 */
    delete(userId: string,deliveryId:string):Promise<void>;

   
}