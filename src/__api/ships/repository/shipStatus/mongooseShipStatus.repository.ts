import { MongooseShipStatus } from "@/api/ships/model/shipStatus.schema";
import { ShipStatusRepository } from "@/api/ships/repository/shipStatus/shipStatus.repository";

export class mongooseShipStatusRepository implements ShipStatusRepository {
  async save(shipStatus: Omit<IShipStatus, "id">): Promise<IShipStatus> {
    const newShipStatus = new MongooseShipStatus(shipStatus);
    await newShipStatus.save();
    return newShipStatus;
  }
  async findAll(): Promise<IShipStatus[]> {
    return await MongooseShipStatus.find();
  }
  async findById(id: string): Promise<IShipStatus | null> {
    return await MongooseShipStatus.findById(id);
  }
  async update(
    shipStatusId: string,
    updateShipStatusInfo: Partial<IShipStatus>
  ): Promise<void> {
    await MongooseShipStatus.findByIdAndUpdate(
      shipStatusId,
      updateShipStatusInfo
    );
    return;
  }
  async delete(shipStatusId: string): Promise<void> {
    await MongooseShipStatus.deleteMany({ _id: { $in: shipStatusId } });
  }
}
