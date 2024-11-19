"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongooseUser = void 0;
const mongoose_1 = __importDefault(require("@/vendors/mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
    },
    loginId: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    salt: {
        type: String,
    },
    profile: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Profile",
        required: true,
        strictPopulate: false,
    },
    cart: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        // required: true,
        ref: "Cart",
    },
    orders: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Order",
            strictPopulate: false,
        },
    ],
    inquiries: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Inquiry",
            strictPopulate: false,
        },
    ],
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    },
});
exports.MongooseUser = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user.schema.js.map