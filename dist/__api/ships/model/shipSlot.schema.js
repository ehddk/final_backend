"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseShipSlot = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const shipSlotSchema = new mongoose_1.default.Schema({
    item: { type: String },
});
exports.MongooseShipSlot = mongoose_1.default.model("ShipSlot", shipSlotSchema);
//# sourceMappingURL=shipSlot.schema.js.map