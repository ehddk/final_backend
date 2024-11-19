import { ShipSlotRepository } from "@/api/ships/repository/shipSlot/shipSlot.repository";
export declare class MemoryShipSlotRepository implements ShipSlotRepository {
    static index: number;
    static readonly store: Map<string, IShipSlot>;
    save(shipSlot: Omit<IShipSlot, "id">): Promise<IShipSlot>;
    findAll(): Promise<IShipSlot[]>;
    findById(id: string): Promise<IShipSlot | null>;
    update(shipSlotId: string, updateShipSlotInfo: Partial<Omit<IShipSlot, "id">>): Promise<void>;
    delete(shipSlotId: string): Promise<void>;
}
