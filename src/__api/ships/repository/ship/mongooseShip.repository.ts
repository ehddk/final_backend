import { ShipRepository } from "@/api/ships/repository/ship/ship.repository";
import { MongooseShip } from "@/api/ships/model/ship.schema";
export class MongooseShipRepository implements ShipRepository {
  async save(ship: Omit<IShip, "id">): Promise<IShip> {
    const newShip = new MongooseShip(ship);
    await newShip.save();
    return newShip;
  }
  async findAll(): Promise<IShip[]> {
    const ships = await MongooseShip.find();
    return ships;
  }
  async findAllByFleet(id: string): Promise<IShip[]> {
    const ships = await MongooseShip.find({ fleet: id });
    return ships;
  }
  async findByUserAndFlagShip(user: IUser): Promise<IShip | null> {
    const ship = await MongooseShip.findOne({
      user: user,
      isUserFlagship: true,
    });
    return ship;
  }
  async findById(id: string): Promise<IShip | null> {
    const ship = await MongooseShip.findById(id);
    return ship;
  }
  async update(shipId: string, updateShipInfo: Partial<IShip>): Promise<void> {
    await MongooseShip.findByIdAndUpdate(shipId, updateShipInfo);
    return;
  }
  async delete(shipId: string): Promise<void> {
    await MongooseShip.deleteMany({ _id: { $in: shipId } });
  }
}
