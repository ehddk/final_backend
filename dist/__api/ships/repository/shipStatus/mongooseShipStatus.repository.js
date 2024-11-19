"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseShipStatusRepository = void 0;
const shipStatus_schema_1 = require("@/api/ships/model/shipStatus.schema");
class mongooseShipStatusRepository {
    async save(shipStatus) {
        const newShipStatus = new shipStatus_schema_1.MongooseShipStatus(shipStatus);
        await newShipStatus.save();
        return newShipStatus;
    }
    async findAll() {
        return await shipStatus_schema_1.MongooseShipStatus.find();
    }
    async findById(id) {
        return await shipStatus_schema_1.MongooseShipStatus.findById(id);
    }
    async update(shipStatusId, updateShipStatusInfo) {
        await shipStatus_schema_1.MongooseShipStatus.findByIdAndUpdate(shipStatusId, updateShipStatusInfo);
        return;
    }
    async delete(shipStatusId) {
        await shipStatus_schema_1.MongooseShipStatus.deleteMany({ _id: { $in: shipStatusId } });
    }
}
exports.mongooseShipStatusRepository = mongooseShipStatusRepository;
//# sourceMappingURL=mongooseShipStatus.repository.js.map