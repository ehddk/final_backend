import express, { RequestHandler } from "express";
import DeliveryController from "../controller/delivery.controller";
import { DeliveryServicesImpl } from "../service/delivery.service";
import { MongooseDeliveryRepository } from "../repository/mongooseDelivery.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { deleteDeliveryValidator, getDeliveryDetailValidator, getDeliveryValidator, updateDeliveryValidator } from "../dto/validations/delivery.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";

export const deliveryRouter= express.Router();

const DELIVERY_ROUTES={
    GET_DELIVERIES:"/api/deliveries",
    GET_DELIVERY_DETAILS:"/api/deliveries/:deliveryId",
    CREATE_DELIVERY:"/api/deliveries",
    UPDATE_DELIVERY:"/api/deliveries/:deliveryId",
    DELETE_DELIVERY:"/api/deliveries/:deliveryId",
} 
const deliveryController= new DeliveryController(
    new DeliveryServicesImpl(new MongooseDeliveryRepository(),new MongooseProfileRepository(),new MongooseUserRepository)
);
deliveryRouter.get(
    extractPath(DELIVERY_ROUTES.GET_DELIVERIES,ROUTES_INDEX.DELIVERY_API),
    authUserMiddleware,
    validate(getDeliveryValidator),
    deliveryController.getDeliveries 
);
deliveryRouter.get(
    extractPath(DELIVERY_ROUTES.GET_DELIVERY_DETAILS,ROUTES_INDEX.DELIVERY_API),
    authUserMiddleware,
    validate(getDeliveryDetailValidator),
    deliveryController.getDeliveryDetail 
);
deliveryRouter.post(
    extractPath(DELIVERY_ROUTES.CREATE_DELIVERY,ROUTES_INDEX.DELIVERY_API),
    authUserMiddleware,
    validate(getDeliveryDetailValidator),
    deliveryController.createDelivery as unknown as RequestHandler);

deliveryRouter.delete(
    extractPath(DELIVERY_ROUTES.DELETE_DELIVERY,ROUTES_INDEX.DELIVERY_API),
    authUserMiddleware,
    validate(deleteDeliveryValidator),
    deliveryController.deleteDelivery as unknown as RequestHandler);
deliveryRouter.put(
    extractPath(DELIVERY_ROUTES.UPDATE_DELIVERY,ROUTES_INDEX.DELIVERY_API),
    authUserMiddleware,
    validate(updateDeliveryValidator),
    deliveryController.updateDelivery as unknown as RequestHandler);