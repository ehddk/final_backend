import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseShipSlot } from "@/api/ships/model/shipSlot.schema";
import { ShipSlotRepository } from "@/api/ships/repository/shipSlot/shipSlot.repository";

export class MongooseShipSlotRepository implements ShipSlotRepository {
  async save(shipSlot: Omit<IShipSlot, "id">): Promise<IShipSlot> {
    const newShipSlot = new MongooseShipSlot(shipSlot);
    await newShipSlot.save();
    return newShipSlot;
  }
  async findAll(): Promise<IShipSlot[]> {
    return await MongooseShipSlot.find();
  }
  async findById(id: string): Promise<IShipSlot | null> {
    return await MongooseShipSlot.findById(id);
  }
  async update(
    shipSlotId: string,
    updateShipSlotInfo: Partial<Omit<IShipSlot, "id">>
  ): Promise<void> {
    const result = await MongooseShipSlot.findByIdAndUpdate(
      shipSlotId,
      updateShipSlotInfo
    );
    if (!result) {
      throw new HttpException(404, "함선 슬롯을 찾을 수 없습니다.");
    }
    return;
  }
  async delete(shipSlotId: string): Promise<void> {
    const result = await MongooseShipSlot.deleteMany({
      _id: { $in: shipSlotId },
    });
    if (!result) {
      throw new HttpException(404, "함선 슬롯을 찾을 수 없습니다.");
    }
    return;
  }
}
