import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseShipType } from "@/api/ships/model/shipType.schema";
import { ShipTypeRepository } from "@/api/ships/repository/shipType/shipType.repository";

export class MongooseShipTypeRepository implements ShipTypeRepository {
  async save(shipType: Omit<IShipType, "id">): Promise<IShipType> {
    const newShipType = new MongooseShipType(shipType);
    await newShipType.save();
    return newShipType;
  }
  async findAll(): Promise<IShipType[]> {
    return await MongooseShipType.find().populate("ShipStatus");
  }
  async findById(id: string): Promise<IShipType | null> {
    return await MongooseShipType.findById(id).populate("ShipStatus");
  }
  async update(
    shipTypeId: string,
    updateShipTypeInfo: Partial<IShipType>
  ): Promise<void> {
    const results = await MongooseShipType.findByIdAndUpdate(
      shipTypeId,
      updateShipTypeInfo
    );
    if (!results) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    return;
  }
  async delete(shipTypeId: string): Promise<void> {
    const result = MongooseShipType.deleteMany({ _id: { $in: shipTypeId } });
    if (!result) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    return;
  }
}
