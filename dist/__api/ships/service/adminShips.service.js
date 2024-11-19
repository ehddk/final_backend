"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const shipResponse_dto_1 = require("@/api/ships/dto/shipResponse.dto");
class AdminShipServiceImpl {
    _shipRepository;
    _shipTypeRepository;
    _shipSlotRepository;
    _shipStatusRepository;
    constructor(_shipRepository, _shipTypeRepository, _shipSlotRepository, _shipStatusRepository) {
        this._shipRepository = _shipRepository;
        this._shipTypeRepository = _shipTypeRepository;
        this._shipSlotRepository = _shipSlotRepository;
        this._shipStatusRepository = _shipStatusRepository;
    }
    async getShips() {
        const ships = await this._shipRepository.findAll();
        return ships.map((ship) => new shipResponse_dto_1.ShipResponseDto(ship));
    }
    async getShip(id) {
        const ship = await this._shipRepository.findById(id);
        if (!ship) {
            throw new http_exception_1.default(404, "함선을 찾을 수 없습니다.");
        }
        return ship ? new shipResponse_dto_1.ShipResponseDto(ship) : null;
    }
    async getShipType(id) {
        const shipType = await this._shipTypeRepository.findById(id);
        if (!shipType) {
            throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
        }
        return shipType;
    }
    async getShipSlots() {
        const shipSlots = await this._shipSlotRepository.findAll();
        return shipSlots;
    }
    async getShipSlot(id) {
        const shipSlot = await this._shipSlotRepository.findById(id);
        return shipSlot ?? null;
    }
    async getShipStatus(id) {
        const shipStatus = await this._shipStatusRepository.findById(id);
        if (!shipStatus) {
            throw new http_exception_1.default(404, "함선 상태를 찾을 수 없습니다.");
        }
        return shipStatus;
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
        const ship = await this._shipRepository.save({
            ...params,
            type: shipType,
            slot: shipSlot,
        });
        return ship;
    }
    async createShipType(params) {
        const shipType = await this._shipTypeRepository.save(params);
        return shipType;
    }
    async createShipSlot(params) {
        const shipSlot = await this._shipSlotRepository.save(params);
        return shipSlot;
    }
    async createShipStatus(params) {
        const shipStatus = await this._shipStatusRepository.save(params);
        return shipStatus;
    }
    async updateShip(id, params) {
        if (params.type) {
            const shipType = await this._shipTypeRepository.findById(params.type.id);
            if (!shipType) {
                throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
            }
            this._shipTypeRepository.update(params.type.id, {
                ...shipType,
                ...params.type,
            });
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
        await this._shipRepository.update(id, {
            ...params,
            type: params.type,
            slot: params.slot,
        });
        return;
    }
    async updateShipType(id, params) {
        await this._shipTypeRepository.update(id, params);
        return;
    }
    async updateShipSlot(id, params) {
        await this._shipSlotRepository.update(id, params);
        return;
    }
    async updateShipStatus(id, params) {
        await this._shipStatusRepository.update(id, params);
        return;
    }
    async deleteShip(id) {
        const ship = await this._shipRepository.findById(id);
        if (!ship) {
            throw new http_exception_1.default(404, "함선을 찾을 수 없습니다.");
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
    async deleteShips(ids) {
        await Promise.all((ids || []).map((id) => this.deleteShip(id)));
        return;
    }
    async deleteShipType(id) {
        const shipType = await this._shipTypeRepository.findById(id);
        if (!shipType) {
            throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
        }
        await this._shipTypeRepository.delete(id);
        return;
    }
    async deleteShipSlot(id) {
        const shipSlot = await this._shipSlotRepository.findById(id);
        if (!shipSlot) {
            throw new http_exception_1.default(404, "함선 슬롯을 찾을 수 없습니다.");
        }
        await this._shipSlotRepository.delete(id);
        return;
    }
    async deleteShipStatus(id) {
        const shipStatus = await this._shipStatusRepository.findById(id);
        if (!shipStatus) {
            throw new http_exception_1.default(404, "함선 상태를 찾을 수 없습니다.");
        }
        await this._shipStatusRepository.delete(id);
        return;
    }
}
exports.default = AdminShipServiceImpl;
//# sourceMappingURL=adminShips.service.js.map