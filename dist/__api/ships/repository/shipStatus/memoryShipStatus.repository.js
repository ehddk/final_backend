"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryShipStatusRepository = void 0;
class MemoryShipStatusRepository {
    static index = 0;
    static store = new Map();
    async save(shipStatus) {
        const newShipStatus = {
            id: `shipStatus-${MemoryShipStatusRepository.index++}`,
            ...shipStatus,
        };
        MemoryShipStatusRepository.store.set(newShipStatus.id, newShipStatus);
        return newShipStatus;
    }
    async findAll() {
        const values = Array.from(MemoryShipStatusRepository.store.values());
        return values;
    }
    async findById(id) {
        const findShipStatus = MemoryShipStatusRepository.store.get(id);
        return findShipStatus ?? null;
    }
    async update(shipStatusId, updateShipStatusInfo) {
        const findShipStatus = MemoryShipStatusRepository.store.get(shipStatusId);
        if (!findShipStatus) {
            throw new Error("함선 상태를 찾을 수 없습니다.");
        }
        Object.assign(findShipStatus, updateShipStatusInfo);
        MemoryShipStatusRepository.store.set(shipStatusId, findShipStatus);
    }
    async delete(shipStatusId) {
        const findShipStatus = MemoryShipStatusRepository.store.get(shipStatusId);
        if (!findShipStatus) {
            throw new Error("함선 상태를 찾을 수 없습니다.");
        }
        MemoryShipStatusRepository.store.delete(shipStatusId);
    }
}
exports.MemoryShipStatusRepository = MemoryShipStatusRepository;
//# sourceMappingURL=memoryShipStatus.repository.js.map