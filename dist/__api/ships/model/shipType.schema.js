"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseShipType = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const shipTypeSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, length: 20, unique: true },
    description: { type: String },
    status: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "ShipStatus", required: true },
    image: { type: String },
    slotCount: { type: Number, required: true },
});
exports.MongooseShipType = mongoose_1.default.model("ShipType", shipTypeSchema);
//# sourceMappingURL=shipType.schema.js.map