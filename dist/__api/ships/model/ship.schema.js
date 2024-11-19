"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseShip = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const shipSchema = new mongoose_1.default.Schema({
    user: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User", required: true },
    isFleetFlagship: { type: Boolean },
    isUserFlagship: { type: Boolean },
    fleet: { type: String },
    owner: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" },
    name: { type: String, required: true, length: 20 },
    type: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "ShipType", required: true },
    status: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "ShipStatus", required: true },
    positionX: { type: Number, required: true },
    positionY: { type: Number, required: true },
    slot: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "ShipSlot" }],
});
exports.MongooseShip = mongoose_1.default.model("Ship", shipSchema);
//# sourceMappingURL=ship.schema.js.map