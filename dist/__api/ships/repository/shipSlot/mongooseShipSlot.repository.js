"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseShipSlotRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const shipSlot_schema_1 = require("@/api/ships/model/shipSlot.schema");
class MongooseShipSlotRepository {
    async save(shipSlot) {
        const newShipSlot = new shipSlot_schema_1.MongooseShipSlot(shipSlot);
        await newShipSlot.save();
        return newShipSlot;
    }
    async findAll() {
        return await shipSlot_schema_1.MongooseShipSlot.find();
    }
    async findById(id) {
        return await shipSlot_schema_1.MongooseShipSlot.findById(id);
    }
    async update(shipSlotId, updateShipSlotInfo) {
        const result = await shipSlot_schema_1.MongooseShipSlot.findByIdAndUpdate(shipSlotId, updateShipSlotInfo);
        if (!result) {
            throw new http_exception_1.default(404, "함선 슬롯을 찾을 수 없습니다.");
        }
        return;
    }
    async delete(shipSlotId) {
        const result = await shipSlot_schema_1.MongooseShipSlot.deleteMany({
            _id: { $in: shipSlotId },
        });
        if (!result) {
            throw new http_exception_1.default(404, "함선 슬롯을 찾을 수 없습니다.");
        }
        return;
    }
}
exports.MongooseShipSlotRepository = MongooseShipSlotRepository;
//# sourceMappingURL=mongooseShipSlot.repository.js.map