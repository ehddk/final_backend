import { ShipRepository } from "@/api/ships/repository/ship/ship.repository";
import { ShipSlotRepository } from "@/api/ships/repository/shipSlot/shipSlot.repository";
import { ShipTypeRepository } from "@/api/ships/repository/shipType/shipType.repository";
import { ShipService } from "@/api/ships/service/ships.service.type";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { ShipResponseDto } from "@/api/ships/dto/shipResponse.dto";
import { ShipStatusRepository } from "@/api/ships/repository/shipStatus/shipStatus.repository";
export default class ShipServiceImpl implements ShipService {
    private readonly _shipRepository;
    private readonly _shipTypeRepository;
    private readonly _shipSlotRepository;
    private readonly _userRepository;
    private readonly _shipStatusRepository;
    constructor(_shipRepository: ShipRepository, _shipTypeRepository: ShipTypeRepository, _shipSlotRepository: ShipSlotRepository, _userRepository: UserRepository, _shipStatusRepository: ShipStatusRepository);
    getFleetShipsList(fleetID: string): Promise<ShipResponseDto[]>;
    getFlagshipInfo(userId: string): Promise<ShipResponseDto | null>;
    getShipInfo(shipId: string): Promise<ShipResponseDto | null>;
    createShip(params: Omit<IShip, "id">): Promise<ShipResponseDto>;
    updateShip(shipId: string, params: Partial<IShip>): Promise<void>;
    deleteShip(shipId: string): Promise<void>;
}
