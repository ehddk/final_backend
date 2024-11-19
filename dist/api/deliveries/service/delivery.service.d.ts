import { IDelivery } from "../@types/delivery.type";
import { DeliveryResponseDTO } from "../dto/deliveryResponse.dto";
import { DeliveryRepository } from "../repository/delivery.repository";
import { DeliveryService } from "./delivery.service.type";
import { ProfileRepository } from "@/api/users/repository/profile/profile.repository";
import { UserRepository } from "@/api/users/repository/user/user.repository";
export declare class DeliveryServicesImpl implements DeliveryService {
    private readonly _deliveryRepository;
    private readonly _profileRepository;
    private _userRepository;
    constructor(deliveryRepository: DeliveryRepository, profileRepository: ProfileRepository, userRepository: UserRepository);
    /**배송지 목록 조회 */
    getDeliveries(userId: string): Promise<DeliveryResponseDTO[]>;
    getDeliveryDetail(userId: string, deliveryId: string): Promise<DeliveryResponseDTO | null>;
    /**배송지 등록 */
    createDelivery(userId: string, delivery: Omit<IDelivery, "_id">): Promise<DeliveryResponseDTO>;
    /**배송지 수정 */
    updateDelivery(userId: string, deliveryId: string, updatedDeliveryInfo: Omit<IDelivery, "id">): Promise<void>;
    /**배송지 삭제 */
    deleteDelivery(userId: string, deliveryId: string): Promise<void>;
}
