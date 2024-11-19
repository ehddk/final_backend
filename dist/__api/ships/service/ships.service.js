"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const shipResponse_dto_1 = require("@/api/ships/dto/shipResponse.dto");
class ShipServiceImpl {
    _shipRepository;
    _shipTypeRepository;
    _shipSlotRepository;
    _userRepository;
    _shipStatusRepository;
    constructor(_shipRepository, _shipTypeRepository, _shipSlotRepository, _userRepository, _shipStatusRepository) {
        this._shipRepository = _shipRepository;
        this._shipTypeRepository = _shipTypeRepository;
        this._shipSlotRepository = _shipSlotRepository;
        this._userRepository = _userRepository;
        this._shipStatusRepository = _shipStatusRepository;
    }
    async getFleetShipsList(fleetID) {
        const ships = await this._shipRepository.findAllByFleet(fleetID);
        return ships.map((ship) => new shipResponse_dto_1.ShipResponseDto(ship));
    }
    async getFlagshipInfo(userId) {
        const user = await this._userRepository.findById(userId);
        if (!user) {
            throw new http_exception_1.default(404, "사용자를 찾을 수 없습니다.");
        }
        const ship = await this._shipRepository.findByUserAndFlagShip(user);
        if (!ship) {
            return null;
        }
        return new shipResponse_dto_1.ShipResponseDto(ship);
    }
    async getShipInfo(shipId) {
        const ship = await this._shipRepository.findById(shipId);
        if (!ship) {
            return null;
        }
        return new shipResponse_dto_1.ShipResponseDto(ship);
    }
    async createShip(params) {
        const shipType = await this._shipTypeRepository.findById(params.type.id);
        if (!shipType) {
            throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
        }
        let shipSlot = [];
        if (params.slot) {
            await Promise.all(params.slot.map(async (slot) => {
                const slotItem = await this._shipSlotRepository.findById(slot.id);
                if (!slotItem) {
                    return;
                }
                shipSlot.push(slotItem);
            }));
        }
        const ship = await this._shipRepository.save({
            ...params,
            type: shipType,
            slot: shipSlot,
        });
        return new shipResponse_dto_1.ShipResponseDto(ship);
    }
    async updateShip(shipId, params) {
        if (params.type) {
            const shipType = await this._shipTypeRepository.findById(params.type.id);
            if (!shipType) {
                throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
            }
            this._shipTypeRepository.update(params.type.id, params.type);
        }
        let shipSlot = [];
        if (params.slot) {
            await Promise.all(params.slot.map(async (slot) => {
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
            }));
        }
        if (params.status) {
            const shipStatus = await this._shipStatusRepository.findById(params.status.id);
            if (!shipStatus) {
                throw new http_exception_1.default(404, "함선 상태를 찾을 수 없습니다.");
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
    async deleteShip(shipId) {
        const ship = await this._shipRepository.findById(shipId);
        if (!ship) {
            throw new http_exception_1.default(404, "함선을 찾을 수 없습니다.");
        }
        if (ship.status) {
            await this._shipStatusRepository.delete(ship.status.id);
        }
        if (ship.slot) {
            await Promise.all(ship.slot.map((slot) => this._shipSlotRepository.delete(slot.id)));
        }
        if (ship.status) {
            await this._shipStatusRepository.delete(ship.status.id);
        }
        await this._shipRepository.delete(shipId);
        return;
    }
}
exports.default = ShipServiceImpl;
//# sourceMappingURL=ships.service.js.map