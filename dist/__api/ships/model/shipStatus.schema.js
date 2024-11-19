"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseShipStatus = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const shipStatusSchema = new mongoose_1.default.Schema({
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    health: { type: Number, required: true },
    shield: { type: Number, required: true },
    speed: { type: Number, required: true },
});
exports.MongooseShipStatus = mongoose_1.default.model("ShipStatus", shipStatusSchema);
//# sourceMappingURL=shipStatus.schema.js.map