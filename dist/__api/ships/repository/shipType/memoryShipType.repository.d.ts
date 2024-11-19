import { ShipTypeRepository } from "@/api/ships/repository/shipType/shipType.repository";
export declare class MemoryShipTypeRepository implements ShipTypeRepository {
    static index: number;
    static readonly store: Map<string, IShipType>;
    save(shipType: Omit<IShipType, "id">): Promise<IShipType>;
    findAll(): Promise<IShipType[]>;
    findById(id: string): Promise<IShipType | null>;
    update(shipTypeId: string, updateShipTypeInfo: Partial<IShipType>): Promise<void>;
    delete(shipTypeId: string): Promise<void>;
}
