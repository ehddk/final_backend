import { ShipStatusRepository } from "@/api/ships/repository/shipStatus/shipStatus.repository";
export declare class mongooseShipStatusRepository implements ShipStatusRepository {
    save(shipStatus: Omit<IShipStatus, "id">): Promise<IShipStatus>;
    findAll(): Promise<IShipStatus[]>;
    findById(id: string): Promise<IShipStatus | null>;
    update(shipStatusId: string, updateShipStatusInfo: Partial<IShipStatus>): Promise<void>;
    delete(shipStatusId: string): Promise<void>;
}
