import HttpException from "@/api/common/exceptions/http.exception";

import { ShipRepository } from "@/api/ships/repository/ship/ship.repository";
import { Ship } from "@/api/ships/model/ship.model";

export class MemoryShipRepository implements ShipRepository {
  static index = 0;
  static readonly store: Map<string, IShip> = new Map();

  async save(ship: Omit<IShip, "id">): Promise<IShip> {
    const newShip = new Ship({
      ...ship,
      id: `ship-${MemoryShipRepository.index++}`,
    });
    MemoryShipRepository.store.set(newShip.id, newShip);
    return newShip;
  }

  async findAll(): Promise<IShip[]> {
    const values = Array.from(MemoryShipRepository.store.values());
    return values;
  }

  async findAllByFleet(id: string): Promise<IShip[]> {
    const values = Array.from(MemoryShipRepository.store.values());
    return values.filter((ship) => ship.fleet === id);
  }

  async findById(id: string): Promise<IShip | null> {
    const findShip = MemoryShipRepository.store.get(id);
    return findShip ?? null;
  }

  async findByUserAndFlagShip(user: IUser): Promise<IShip | null> {
    const values = Array.from(MemoryShipRepository.store.values());
    const foundShip = values.find(
      (ship) => ship.user?.id === user.id && ship.isUserFlagship
    );
    return foundShip !== undefined ? foundShip : null;
  }

  async update(shipId: string, updateShipInfo: Partial<IShip>): Promise<void> {
    const findShip = MemoryShipRepository.store.get(shipId);
    if (!findShip) {
      throw new HttpException(404, "함선을 찾을 수 없습니다.");
    }
    const shipType = findShip.type;
    Object.assign(findShip, updateShipInfo);
    if (updateShipInfo.type === undefined) {
      findShip.type = shipType;
    }
    MemoryShipRepository.store.set(shipId, findShip);
    return;
  }

  async delete(shipId: string): Promise<void> {
    const findShip = MemoryShipRepository.store.get(shipId);
    if (!findShip) {
      throw new HttpException(404, "함선을 찾을 수 없습니다.");
    }
    MemoryShipRepository.store.delete(shipId);
    return;
  }
}
