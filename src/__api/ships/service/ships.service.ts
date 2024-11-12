import HttpException from "@/api/common/exceptions/http.exception";
import { ShipRepository } from "@/api/ships/repository/ship/ship.repository";
import { ShipSlotRepository } from "@/api/ships/repository/shipSlot/shipSlot.repository";
import { ShipTypeRepository } from "@/api/ships/repository/shipType/shipType.repository";
import { ShipService } from "@/api/ships/service/ships.service.type";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { ShipResponseDto } from "@/api/ships/dto/shipResponse.dto";
import { ShipStatusRepository } from "@/api/ships/repository/shipStatus/shipStatus.repository";

export default class ShipServiceImpl implements ShipService {
  constructor(
    private readonly _shipRepository: ShipRepository,
    private readonly _shipTypeRepository: ShipTypeRepository,
    private readonly _shipSlotRepository: ShipSlotRepository,
    private readonly _userRepository: UserRepository,
    private readonly _shipStatusRepository: ShipStatusRepository
  ) {}
  async getFleetShipsList(fleetID: string): Promise<ShipResponseDto[]> {
    const ships = await this._shipRepository.findAllByFleet(fleetID);
    return ships.map((ship) => new ShipResponseDto(ship));
  }
  async getFlagshipInfo(userId: string): Promise<ShipResponseDto | null> {
    const user = await this._userRepository.findById(userId);
    if (!user) {
      throw new HttpException(404, "사용자를 찾을 수 없습니다.");
    }
    const ship = await this._shipRepository.findByUserAndFlagShip(user);
    if (!ship) {
      return null;
    }
    return new ShipResponseDto(ship);
  }
  async getShipInfo(shipId: string): Promise<ShipResponseDto | null> {
    const ship = await this._shipRepository.findById(shipId);
    if (!ship) {
      return null;
    }
    return new ShipResponseDto(ship);
  }
  async createShip(params: Omit<IShip, "id">): Promise<ShipResponseDto> {
    const shipType = await this._shipTypeRepository.findById(params.type.id);
    if (!shipType) {
      throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
    }
    let shipSlot: IShipSlot[] = [];
    if (params.slot) {
      await Promise.all(
        params.slot.map(async (slot) => {
          const slotItem = await this._shipSlotRepository.findById(slot.id);
          if (!slotItem) {
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
    return new ShipResponseDto(ship);
  }
  async updateShip(shipId: string, params: Partial<IShip>): Promise<void> {
    if (params.type) {
      const shipType = await this._shipTypeRepository.findById(params.type.id);
      if (!shipType) {
        throw new HttpException(404, "함선 타입을 찾을 수 없습니다.");
      }
      this._shipTypeRepository.update(params.type.id, params.type);
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
    if (params.status) {
      const shipStatus = await this._shipStatusRepository.findById(
        params.status.id
      );
      if (!shipStatus) {
        throw new HttpException(404, "함선 상태를 찾을 수 없습니다.");
      }
      this._shipStatusRepository.update(params.status.id, params.status);
    }
    await this._shipRepository.update(shipId, {
      ...params,
      type: params.type,
      slot: params.slot,
      status: params.status,
    });
    return;
  }
  async deleteShip(shipId: string): Promise<void> {
    const ship = await this._shipRepository.findById(shipId);
    if (!ship) {
      throw new HttpException(404, "함선을 찾을 수 없습니다.");
    }
    if (ship.status) {
      await this._shipStatusRepository.delete(ship.status.id);
    }
    if (ship.slot) {
      await Promise.all(
        ship.slot.map((slot) => this._shipSlotRepository.delete(slot.id))
      );
    }
    if (ship.status) {
      await this._shipStatusRepository.delete(ship.status.id);
    }
    await this._shipRepository.delete(shipId);
    return;
  }
}
