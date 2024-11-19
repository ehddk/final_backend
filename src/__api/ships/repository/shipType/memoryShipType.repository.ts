import HttpException from "@/api/common/exceptions/http.exception";
import { ShipTypeRepository } from "@/api/ships/repository/shipType/shipType.repository";

export class MemoryShipTypeRepository implements ShipTypeRepository {
  static index = 0;
  static readonly store: Map<string, IShipType> = new Map();

  async save(shipType: Omit<IShipType, "id">): Promise<IShipType> {
    const newShipType = { ...shipType, id: `shipType-${MemoryShipTypeRepository.index++}` };
    MemoryShipTypeRepository.store.set(newShipType.id, newShipType);
    return newShipType;
  }

  async findAll(): Promise<IShipType[]> {
    const values = Array.from(MemoryShipTypeRepository.store.values());
    return values;
  }

  async findById(id: string): Promise<IShipType | null> {
    const findShipType = MemoryShipTypeRepository.store.get(id);
    return findShipType ?? null;
  }

  async update(shipTypeId: string, updateShipTypeInfo: Partial<IShipType>): Promise<void> {
    const findShipType = MemoryShipTypeRepository.store.get(shipTypeId);
    if (!findShipType) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    MemoryShipTypeRepository.store.set(shipTypeId, { ...findShipType, ...updateShipTypeInfo });
  }

  async delete(shipTypeId: string): Promise<void> {
    const findShipType = MemoryShipTypeRepository.store.get(shipTypeId);
    if (!findShipType) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    MemoryShipTypeRepository.store.delete(shipTypeId);
  }
}
