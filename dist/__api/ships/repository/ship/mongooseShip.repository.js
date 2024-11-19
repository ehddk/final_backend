"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseShipRepository = void 0;
const ship_schema_1 = require("@/api/ships/model/ship.schema");
class MongooseShipRepository {
    async save(ship) {
        const newShip = new ship_schema_1.MongooseShip(ship);
        await newShip.save();
        return newShip;
    }
    async findAll() {
        const ships = await ship_schema_1.MongooseShip.find();
        return ships;
    }
    async findAllByFleet(id) {
        const ships = await ship_schema_1.MongooseShip.find({ fleet: id });
        return ships;
    }
    async findByUserAndFlagShip(user) {
        const ship = await ship_schema_1.MongooseShip.findOne({
            user: user,
            isUserFlagship: true,
        });
        return ship;
    }
    async findById(id) {
        const ship = await ship_schema_1.MongooseShip.findById(id);
        return ship;
    }
    async update(shipId, updateShipInfo) {
        await ship_schema_1.MongooseShip.findByIdAndUpdate(shipId, updateShipInfo);
        return;
    }
    async delete(shipId) {
        await ship_schema_1.MongooseShip.deleteMany({ _id: { $in: shipId } });
    }
}
exports.MongooseShipRepository = MongooseShipRepository;
//# sourceMappingURL=mongooseShip.repository.js.map