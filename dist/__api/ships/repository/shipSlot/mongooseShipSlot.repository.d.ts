import { ShipSlotRepository } from "@/api/ships/repository/shipSlot/shipSlot.repository";
export declare class MongooseShipSlotRepository implements ShipSlotRepository {
    save(shipSlot: Omit<IShipSlot, "id">): Promise<IShipSlot>;
    findAll(): Promise<IShipSlot[]>;
    findById(id: string): Promise<IShipSlot | null>;
    update(shipSlotId: string, updateShipSlotInfo: Partial<Omit<IShipSlot, "id">>): Promise<void>;
    delete(shipSlotId: string): Promise<void>;
}
