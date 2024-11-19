import { ShipRepository } from "@/api/ships/repository/ship/ship.repository";
export declare class MemoryShipRepository implements ShipRepository {
    static index: number;
    static readonly store: Map<string, IShip>;
    save(ship: Omit<IShip, "id">): Promise<IShip>;
    findAll(): Promise<IShip[]>;
    findAllByFleet(id: string): Promise<IShip[]>;
    findById(id: string): Promise<IShip | null>;
    findByUserAndFlagShip(user: IUser): Promise<IShip | null>;
    update(shipId: string, updateShipInfo: Partial<IShip>): Promise<void>;
    delete(shipId: string): Promise<void>;
}
