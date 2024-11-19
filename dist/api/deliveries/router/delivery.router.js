"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryRouter = void 0;
const express_1 = __importDefault(require("express"));
const delivery_controller_1 = __importDefault(require("../controller/delivery.controller"));
const delivery_service_1 = require("../service/delivery.service");
const mongooseDelivery_repository_1 = require("../repository/mongooseDelivery.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const delivery_validation_1 = require("../dto/validations/delivery.validation");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const mongooseProfile_repository_1 = require("@/api/users/repository/profile/mongooseProfile.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
exports.deliveryRouter = express_1.default.Router();
const DELIVERY_ROUTES = {
    GET_DELIVERIES: "/api/deliveries",
    GET_DELIVERY_DETAILS: "/api/deliveries/:deliveryId",
    CREATE_DELIVERY: "/api/deliveries",
    UPDATE_DELIVERY: "/api/deliveries/:deliveryId",
    DELETE_DELIVERY: "/api/deliveries/:deliveryId",
};
const deliveryController = new delivery_controller_1.default(new delivery_service_1.DeliveryServicesImpl(new mongooseDelivery_repository_1.MongooseDeliveryRepository(), new mongooseProfile_repository_1.MongooseProfileRepository(), new mongooseUser_repository_1.MongooseUserRepository));
exports.deliveryRouter.get((0, path_util_1.extractPath)(DELIVERY_ROUTES.GET_DELIVERIES, routers_1.ROUTES_INDEX.DELIVERY_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(delivery_validation_1.getDeliveryValidator), deliveryController.getDeliveries);
exports.deliveryRouter.get((0, path_util_1.extractPath)(DELIVERY_ROUTES.GET_DELIVERY_DETAILS, routers_1.ROUTES_INDEX.DELIVERY_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(delivery_validation_1.getDeliveryDetailValidator), deliveryController.getDeliveryDetail);
exports.deliveryRouter.post((0, path_util_1.extractPath)(DELIVERY_ROUTES.CREATE_DELIVERY, routers_1.ROUTES_INDEX.DELIVERY_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(delivery_validation_1.getDeliveryDetailValidator), deliveryController.createDelivery);
exports.deliveryRouter.delete((0, path_util_1.extractPath)(DELIVERY_ROUTES.DELETE_DELIVERY, routers_1.ROUTES_INDEX.DELIVERY_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(delivery_validation_1.deleteDeliveryValidator), deliveryController.deleteDelivery);
exports.deliveryRouter.put((0, path_util_1.extractPath)(DELIVERY_ROUTES.UPDATE_DELIVERY, routers_1.ROUTES_INDEX.DELIVERY_API), authUser_middleware_1.authUserMiddleware, (0, validation_middleware_1.validate)(delivery_validation_1.updateDeliveryValidator), deliveryController.updateDelivery);
//# sourceMappingURL=delivery.router.js.map