import HttpException from "@/api/common/exceptions/http.exception";
import { ShipSlotRepository } from "@/api/ships/repository/shipSlot/shipSlot.repository";

export class MemoryShipSlotRepository implements ShipSlotRepository {
  static index = 0;
  static readonly store: Map<string, IShipSlot> = new Map();

  async save(shipSlot: Omit<IShipSlot, "id">): Promise<IShipSlot> {
    const newShipSlot = {
      id: `shipSlot-${MemoryShipSlotRepository.index++}`,
      ...shipSlot,
    };
    MemoryShipSlotRepository.store.set(newShipSlot.id, newShipSlot);
    return newShipSlot;
  }
  async findAll(): Promise<IShipSlot[]> {
    const values = Array.from(MemoryShipSlotRepository.store.values());
    console.log(values);
    return values;
  }
  async findById(id: string): Promise<IShipSlot | null> {
    const findShipSlot = MemoryShipSlotRepository.store.get(id);
    return findShipSlot ?? null;
  }
  async update(
    shipSlotId: string,
    updateShipSlotInfo: Partial<Omit<IShipSlot, "id">>
  ): Promise<void> {
    const findShipSlot = MemoryShipSlotRepository.store.get(shipSlotId);
    if (!findShipSlot) {
      throw new HttpException(404, "함선 슬롯을 찾을 수 없습니다.");
    }
    const nextShipSlot = { id: shipSlotId, ...updateShipSlotInfo };
    MemoryShipSlotRepository.store.set(shipSlotId, nextShipSlot);
  }
  async delete(shipSlotId: string): Promise<void> {
    const findShipSlot = MemoryShipSlotRepository.store.get(shipSlotId);
    if (!findShipSlot) {
      throw new HttpException(404, "함선 슬롯을 찾을 수 없습니다.");
    }
    MemoryShipSlotRepository.store.delete(shipSlotId);
  }
}
