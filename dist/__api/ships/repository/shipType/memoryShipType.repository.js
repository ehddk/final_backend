"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryShipTypeRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
class MemoryShipTypeRepository {
    static index = 0;
    static store = new Map();
    async save(shipType) {
        const newShipType = { ...shipType, id: `shipType-${MemoryShipTypeRepository.index++}` };
        MemoryShipTypeRepository.store.set(newShipType.id, newShipType);
        return newShipType;
    }
    async findAll() {
        const values = Array.from(MemoryShipTypeRepository.store.values());
        return values;
    }
    async findById(id) {
        const findShipType = MemoryShipTypeRepository.store.get(id);
        return findShipType ?? null;
    }
    async update(shipTypeId, updateShipTypeInfo) {
        const findShipType = MemoryShipTypeRepository.store.get(shipTypeId);
        if (!findShipType) {
            throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
        }
        MemoryShipTypeRepository.store.set(shipTypeId, { ...findShipType, ...updateShipTypeInfo });
    }
    async delete(shipTypeId) {
        const findShipType = MemoryShipTypeRepository.store.get(shipTypeId);
        if (!findShipType) {
            throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
        }
        MemoryShipTypeRepository.store.delete(shipTypeId);
    }
}
exports.MemoryShipTypeRepository = MemoryShipTypeRepository;
//# sourceMappingURL=memoryShipType.repository.js.map