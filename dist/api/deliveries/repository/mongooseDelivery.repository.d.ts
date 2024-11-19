import { IDelivery } from "../@types/delivery.type";
import { DeliveryRepository } from "./delivery.repository";
export declare class MongooseDeliveryRepository implements DeliveryRepository {
    save(userId: string, delivery: Omit<IDelivery, "id" | "userId">): Promise<IDelivery>;
    findAll(userId: string): Promise<IDelivery[]>;
    findById(userId: string, deliveryId: string): Promise<IDelivery | null>;
    update(userId: string, deliveryId: string, updateDeliveryInfo: Partial<IDelivery>): Promise<IDelivery>;
    delete(userId: string, deliveryId: string): Promise<void>;
}
