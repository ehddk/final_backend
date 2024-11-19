import { ShipTypeRepository } from "@/api/ships/repository/shipType/shipType.repository";
export declare class MongooseShipTypeRepository implements ShipTypeRepository {
    save(shipType: Omit<IShipType, "id">): Promise<IShipType>;
    findAll(): Promise<IShipType[]>;
    findById(id: string): Promise<IShipType | null>;
    update(shipTypeId: string, updateShipTypeInfo: Partial<IShipType>): Promise<void>;
    delete(shipTypeId: string): Promise<void>;
}
