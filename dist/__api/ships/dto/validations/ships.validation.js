"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateShipStatusValidator = exports.createShipStatusValidator = exports.updateShipSlotValidator = exports.createShipSlotValidator = exports.updateShipTypeValidator = exports.createShipTypeValidator = exports.updateShipValidator = exports.createShipValidator = exports.updateShipStatusBodyValidator = exports.createShipStatusBodyValidator = exports.updateShipSlotBodyValidator = exports.createShipSlotBodyValidator = exports.updateShipTypeBodyValidator = exports.createShipTypeBodyValidator = exports.updateShipBodyValidator = exports.createShipBodyValidator = void 0;
const yup = __importStar(require("yup"));
exports.createShipBodyValidator = yup.object({
    name: yup.string().required(),
    user: yup.string().required(),
    isFleetFlagship: yup.boolean().required(),
    isUserFlagship: yup.boolean().required(),
    fleet: yup.string().required(),
    owner: yup.string().required(),
    type: yup.string().required(),
    status: yup.string().required(),
    positionX: yup.number().required(),
    positionY: yup.number().required(),
    slot: yup.array().of(yup.string()).required(),
});
exports.updateShipBodyValidator = yup.object({
    name: yup.string(),
    user: yup.string(),
    isFleetFlagship: yup.boolean(),
    isUserFlagship: yup.boolean(),
    fleet: yup.string(),
    owner: yup.string(),
    type: yup.string(),
    status: yup.string(),
    positionX: yup.number(),
    positionY: yup.number(),
    slot: yup.array().of(yup.string()),
});
exports.createShipTypeBodyValidator = yup.object({
    name: yup.string().required(),
    description: yup.string(),
    status: yup.string().required(),
    image: yup.string(),
    slotCount: yup.number().required(),
});
exports.updateShipTypeBodyValidator = yup.object({
    name: yup.string(),
    description: yup.string(),
    status: yup.string(),
    image: yup.string(),
    slotCount: yup.number(),
});
exports.createShipSlotBodyValidator = yup.object({
    item: yup.string(),
});
exports.updateShipSlotBodyValidator = yup.object({
    item: yup.string(),
});
exports.createShipStatusBodyValidator = yup.object({
    attack: yup.number().required().min(0),
    defense: yup.number().required().min(0),
    health: yup.number().required().min(0),
    shield: yup.number().required().min(0),
    speed: yup.number().required().min(0),
});
exports.updateShipStatusBodyValidator = yup.object({
    attack: yup.number().min(0),
    defense: yup.number().min(0),
    health: yup.number().min(0),
    shield: yup.number().min(0),
    speed: yup.number().min(0),
});
exports.createShipValidator = {
    body: exports.createShipBodyValidator,
};
exports.updateShipValidator = {
    body: exports.updateShipBodyValidator,
};
exports.createShipTypeValidator = {
    body: exports.createShipTypeBodyValidator,
};
exports.updateShipTypeValidator = {
    body: exports.updateShipTypeBodyValidator,
};
exports.createShipSlotValidator = {
    body: exports.createShipSlotBodyValidator,
};
exports.updateShipSlotValidator = {
    body: exports.updateShipSlotBodyValidator,
};
exports.createShipStatusValidator = {
    body: exports.createShipStatusBodyValidator,
};
exports.updateShipStatusValidator = {
    body: exports.updateShipStatusBodyValidator,
};
//# sourceMappingURL=ships.validation.js.map