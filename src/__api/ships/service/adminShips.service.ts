import HttpException from "@/api/common/exceptions/http.exception";
import { ShipRepository } from "@/api/ships/repository/ship/ship.repository";
import { ShipSlotRepository } from "@/api/ships/repository/shipSlot/shipSlot.repository";
import { ShipTypeRepository } from "@/api/ships/repository/shipType/shipType.repository";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";
import { ShipResponseDto } from "@/api/ships/dto/shipResponse.dto";
import { ShipStatusRepository } from "@/api/ships/repository/shipStatus/shipStatus.repository";

export default class AdminShipServiceImpl implements AdminShipService {
  constructor(
    private readonly _shipRepository: ShipRepository,
    private readonly _shipTypeRepository: ShipTypeRepository,
    private readonly _shipSlotRepository: ShipSlotRepository,
    private readonly _shipStatusRepository: ShipStatusRepository
  ) {}

  async getShips(): Promise<ShipResponseDto[]> {
    const ships = await this._shipRepository.findAll();
    return ships.map((ship) => new ShipResponseDto(ship));
  }

  async getShip(id: string): Promise<ShipResponseDto | null> {
    const ship = await this._shipRepository.findById(id);
    if (!ship) {
      throw new HttpException(404, "함선을 찾을 수 없습니다.");
    }
    return ship ? new ShipResponseDto(ship) : null;
  }

  async getShipType(id: string): Promise<IShipType> {
    const shipType = await this._shipTypeRepository.findById(id);
    if (!shipType) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    return shipType;
  }

  async getShipSlots(): Promise<IShipSlot[]> {
    const shipSlots = await this._shipSlotRepository.findAll();
    return shipSlots;
  }

  async getShipSlot(id: string): Promise<IShipSlot | null> {
    const shipSlot = await this._shipSlotRepository.findById(id);
    return shipSlot ?? null;
  }

  async getShipStatus(id: string): Promise<IShipStatus> {
    const shipStatus = await this._shipStatusRepository.findById(id);
    if (!shipStatus) {
      throw new HttpException(404, "함선 상태를 찾을 수 없습니다.");
    }
    return shipStatus;
  }

  async createShip(params: Omit<IShip, "id">): Promise<IShip> {
    const shipType = await this._shipTypeRepository.findById(params.type.id);
    if (!shipType) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    let shipSlot: Array<IShipSlot> = [];
    if (params.slot) {
      await Promise.all(
        params.slot.map(async (slot) => {
          const slotItem = await this._shipSlotRepository.findById(slot.id);
          if (slotItem === null && slot.id) {
            const newSlotItem = await this._shipSlotRepository.save(slot);
            shipSlot.push(newSlotItem);
            return;
          }
          if (slotItem === null) {
            return;
          }
          shipSlot.push(slotItem);
        })
      );
    }
    const ship = await this._shipRepository.save({
      ...params,
      type: shipType,
      slot: shipSlot,
    });
    return ship;
  }
  async createShipType(params: Omit<IShipType, "id">): Promise<IShipType> {
    const shipType = await this._shipTypeRepository.save(params);
    return shipType;
  }
  async createShipSlot(params: Omit<IShipSlot, "id">): Promise<IShipSlot> {
    const shipSlot = await this._shipSlotRepository.save(params);
    return shipSlot;
  }

  async createShipStatus(
    params: Omit<IShipStatus, "id">
  ): Promise<IShipStatus> {
    const shipStatus = await this._shipStatusRepository.save(params);
    return shipStatus;
  }

  async updateShip(id: string, params: Partial<IShip>): Promise<void> {
    if (params.type) {
      const shipType = await this._shipTypeRepository.findById(params.type.id);
      if (!shipType) {
        throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
      }
      this._shipTypeRepository.update(params.type.id, {
        ...shipType,
        ...params.type,
      });
    }
    let shipSlot: Array<IShipSlot> = [];
    if (params.slot) {
      await Promise.all(
        params.slot.map(async (slot) => {
          const slotItem = await this._shipSlotRepository.findById(slot.id);
          if (slotItem === null && slot.id) {
            const newSlotItem = await this._shipSlotRepository.save(slot);
            shipSlot.push(newSlotItem);
            return;
          }
          if (slotItem === null) {
            return;
          }
          shipSlot.push(slotItem);
        })
      );
    }
    await this._shipRepository.update(id, {
      ...params,
      type: params.type,
      slot: params.slot,
    });
    return;
  }
  async updateShipType(id: string, params: Partial<IShipType>): Promise<void> {
    await this._shipTypeRepository.update(id, params);
    return;
  }
  async updateShipSlot(id: string, params: Partial<IShipSlot>): Promise<void> {
    await this._shipSlotRepository.update(id, params);
    return;
  }
  async updateShipStatus(
    id: string,
    params: Partial<IShipStatus>
  ): Promise<void> {
    await this._shipStatusRepository.update(id, params);
    return;
  }
  async deleteShip(id: string): Promise<void> {
    const ship = await this._shipRepository.findById(id);
    if (!ship) {
      throw new HttpException(404, "함선을 찾을 수 없습니다.");
    }
    if (ship.status) {
      await this.deleteShipStatus(ship.status.id);
    }
    if (ship.slot) {
      await Promise.all(ship.slot.map((slot) => this.deleteShipSlot(slot.id)));
    }
    if (ship.status) {
      await this.deleteShipStatus(ship.status.id);
    }
    await this._shipRepository.delete(id);
    return;
  }
  async deleteShips(ids: string[]): Promise<void> {
    await Promise.all((ids || []).map((id) => this.deleteShip(id)));
    return;
  }
  async deleteShipType(id: string): Promise<void> {
    const shipType = await this._shipTypeRepository.findById(id);
    if (!shipType) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    await this._shipTypeRepository.delete(id);
    return;
  }
  async deleteShipSlot(id: string): Promise<void> {
    const shipSlot = await this._shipSlotRepository.findById(id);
    if (!shipSlot) {
      throw new HttpException(404, "함선 슬롯을 찾을 수 없습니다.");
    }
    await this._shipSlotRepository.delete(id);
    return;
  }
  async deleteShipStatus(id: string): Promise<void> {
    const shipStatus = await this._shipStatusRepository.findById(id);
    if (!shipStatus) {
      throw new HttpException(404, "함선 상태를 찾을 수 없습니다.");
    }
    await this._shipStatusRepository.delete(id);
    return;
  }
}
