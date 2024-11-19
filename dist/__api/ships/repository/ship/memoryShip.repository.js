"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryShipRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const ship_model_1 = require("@/api/ships/model/ship.model");
class MemoryShipRepository {
    static index = 0;
    static store = new Map();
    async save(ship) {
        const newShip = new ship_model_1.Ship({
            ...ship,
            id: `ship-${MemoryShipRepository.index++}`,
        });
        MemoryShipRepository.store.set(newShip.id, newShip);
        return newShip;
    }
    async findAll() {
        const values = Array.from(MemoryShipRepository.store.values());
        return values;
    }
    async findAllByFleet(id) {
        const values = Array.from(MemoryShipRepository.store.values());
        return values.filter((ship) => ship.fleet === id);
    }
    async findById(id) {
        const findShip = MemoryShipRepository.store.get(id);
        return findShip ?? null;
    }
    async findByUserAndFlagShip(user) {
        const values = Array.from(MemoryShipRepository.store.values());
        const foundShip = values.find((ship) => ship.user?.id === user.id && ship.isUserFlagship);
        return foundShip !== undefined ? foundShip : null;
    }
    async update(shipId, updateShipInfo) {
        const findShip = MemoryShipRepository.store.get(shipId);
        if (!findShip) {
            throw new http_exception_1.default(404, "함선을 찾을 수 없습니다.");
        }
        const shipType = findShip.type;
        Object.assign(findShip, updateShipInfo);
        if (updateShipInfo.type === undefined) {
            findShip.type = shipType;
        }
        MemoryShipRepository.store.set(shipId, findShip);
        return;
    }
    async delete(shipId) {
        const findShip = MemoryShipRepository.store.get(shipId);
        if (!findShip) {
            throw new http_exception_1.default(404, "함선을 찾을 수 없습니다.");
        }
        MemoryShipRepository.store.delete(shipId);
        return;
    }
}
exports.MemoryShipRepository = MemoryShipRepository;
//# sourceMappingURL=memoryShip.repository.js.map