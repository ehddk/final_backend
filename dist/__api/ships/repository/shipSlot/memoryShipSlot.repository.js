"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryShipSlotRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
class MemoryShipSlotRepository {
    static index = 0;
    static store = new Map();
    async save(shipSlot) {
        const newShipSlot = {
            id: `shipSlot-${MemoryShipSlotRepository.index++}`,
            ...shipSlot,
        };
        MemoryShipSlotRepository.store.set(newShipSlot.id, newShipSlot);
        return newShipSlot;
    }
    async findAll() {
        const values = Array.from(MemoryShipSlotRepository.store.values());
        console.log(values);
        return values;
    }
    async findById(id) {
        const findShipSlot = MemoryShipSlotRepository.store.get(id);
        return findShipSlot ?? null;
    }
    async update(shipSlotId, updateShipSlotInfo) {
        const findShipSlot = MemoryShipSlotRepository.store.get(shipSlotId);
        if (!findShipSlot) {
            throw new http_exception_1.default(404, "함선 슬롯을 찾을 수 없습니다.");
        }
        const nextShipSlot = { id: shipSlotId, ...updateShipSlotInfo };
        MemoryShipSlotRepository.store.set(shipSlotId, nextShipSlot);
    }
    async delete(shipSlotId) {
        const findShipSlot = MemoryShipSlotRepository.store.get(shipSlotId);
        if (!findShipSlot) {
            throw new http_exception_1.default(404, "함선 슬롯을 찾을 수 없습니다.");
        }
        MemoryShipSlotRepository.store.delete(shipSlotId);
    }
}
exports.MemoryShipSlotRepository = MemoryShipSlotRepository;
//# sourceMappingURL=memoryShipSlot.repository.js.map