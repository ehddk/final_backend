import { IDelivery } from "../@types/delivery.type";
import { DeliveryResponseDTO } from "../dto/deliveryResponse.dto";
export interface DeliveryService {
    /**배송지 목록 조회 */
    getDeliveries(userId: string): Promise<DeliveryResponseDTO[]>;
    /**배송지 상세조회 */
    getDeliveryDetail(userId: string, deliveryId: string): Promise<DeliveryResponseDTO | null>;
    /**배송지 추가 */
    createDelivery(userId: string, delivery: Omit<IDelivery, "id" | "userId">): Promise<DeliveryResponseDTO>;
    /**배송지 삭제 */
    deleteDelivery(userId: string, deliveryId: string): Promise<void>;
    updateDelivery(userId: string, deliveryId: string, updatedDelivery: Omit<IDelivery, "id">): Promise<void>;
}
