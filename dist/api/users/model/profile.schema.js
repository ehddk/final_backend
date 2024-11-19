"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseProfile = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const profileSchema = new mongoose_1.default.Schema({
    firstName: {
        type: String,
        required: true,
        length: 100,
    },
    lastName: {
        type: String,
        length: 20,
    },
    phoneNum: {
        type: String,
        unique: true,
        length: 20,
    },
    delivery: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Delivery",
            strictPopulate: false
        }],
});
exports.MongooseProfile = mongoose_1.default.model("Profile", profileSchema);
//# sourceMappingURL=profile.schema.js.map