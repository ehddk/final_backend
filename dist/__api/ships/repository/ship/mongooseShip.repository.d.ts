import { ShipRepository } from "@/api/ships/repository/ship/ship.repository";
export declare class MongooseShipRepository implements ShipRepository {
    save(ship: Omit<IShip, "id">): Promise<IShip>;
    findAll(): Promise<IShip[]>;
    findAllByFleet(id: string): Promise<IShip[]>;
    findByUserAndFlagShip(user: IUser): Promise<IShip | null>;
    findById(id: string): Promise<IShip | null>;
    update(shipId: string, updateShipInfo: Partial<IShip>): Promise<void>;
    delete(shipId: string): Promise<void>;
}
