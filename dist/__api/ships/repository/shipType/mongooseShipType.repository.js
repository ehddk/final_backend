"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseShipTypeRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const shipType_schema_1 = require("@/api/ships/model/shipType.schema");
class MongooseShipTypeRepository {
    async save(shipType) {
        const newShipType = new shipType_schema_1.MongooseShipType(shipType);
        await newShipType.save();
        return newShipType;
    }
    async findAll() {
        return await shipType_schema_1.MongooseShipType.find().populate("ShipStatus");
    }
    async findById(id) {
        return await shipType_schema_1.MongooseShipType.findById(id).populate("ShipStatus");
    }
    async update(shipTypeId, updateShipTypeInfo) {
        const results = await shipType_schema_1.MongooseShipType.findByIdAndUpdate(shipTypeId, updateShipTypeInfo);
        if (!results) {
            throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
        }
        return;
    }
    async delete(shipTypeId) {
        const result = shipType_schema_1.MongooseShipType.deleteMany({ _id: { $in: shipTypeId } });
        if (!result) {
            throw new http_exception_1.default(404, "함선 타입을 찾을 수 없습니다.");
        }
        return;
    }
}
exports.MongooseShipTypeRepository = MongooseShipTypeRepository;
//# sourceMappingURL=mongooseShipType.repository.js.map