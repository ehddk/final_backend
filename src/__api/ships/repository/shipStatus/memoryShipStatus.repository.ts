import { ShipStatusRepository } from "@/api/ships/repository/shipStatus/shipStatus.repository";

export class MemoryShipStatusRepository implements ShipStatusRepository {
  static index = 0;
  static readonly store: Map<string, IShipStatus> = new Map();
  async save(shipStatus: Omit<IShipStatus, "id">): Promise<IShipStatus> {
    const newShipStatus = {
      id: `shipStatus-${MemoryShipStatusRepository.index++}`,
      ...shipStatus,
    };
    MemoryShipStatusRepository.store.set(newShipStatus.id, newShipStatus);
    return newShipStatus;
  }
  async findAll(): Promise<IShipStatus[]> {
    const values = Array.from(MemoryShipStatusRepository.store.values());
    return values;
  }
  async findById(id: string): Promise<IShipStatus | null> {
    const findShipStatus = MemoryShipStatusRepository.store.get(id);
    return findShipStatus ?? null;
  }
  async update(
    shipStatusId: string,
    updateShipStatusInfo: Partial<IShipStatus>
  ): Promise<void> {
    const findShipStatus = MemoryShipStatusRepository.store.get(shipStatusId);
    if (!findShipStatus) {
      throw new Error("함선 상태를 찾을 수 없습니다.");
    }
    Object.assign(findShipStatus, updateShipStatusInfo);
    MemoryShipStatusRepository.store.set(shipStatusId, findShipStatus);
  }
  async delete(shipStatusId: string): Promise<void> {
    const findShipStatus = MemoryShipStatusRepository.store.get(shipStatusId);
    if (!findShipStatus) {
      throw new Error("함선 상태를 찾을 수 없습니다.");
    }
    MemoryShipStatusRepository.store.delete(shipStatusId);
  }
}
