import express from "express";
import DeliveryController from "../controller/delivery.controller";
import { DeliveryServicesImpl } from "../service/delivery.service";
import { MonoogseDeliveryRepository } from "../repository/mongooseDelivery.repository";


export const deliveryRouter= express.Router();

const DELIVERY_ROUTES={
    GET_DELIVERIES:"/api/:userId/deliveries",
    GET_DELEVERY_DETAILS:"/api/:userId/deliveries/:deliveryId",
    CREATE_DELIVERY:"/api/:userId/deliveries",
    UPDATE_DELIVERY:"/api/:userId/deliveries/:deliveryId",
    DELETE_DELIVERY:"/api/:userId/deliveries/:deliveryId",
} 
const deliveryController= new DeliveryController(
    new DeliveryServicesImpl(new MonoogseDeliveryRepository)
);

deliveryRouter.get(DELIVERY_ROUTES.GET_DELIVERIES,deliveryController.getDeliveries)
deliveryRouter.get(DELIVERY_ROUTES.GET_DELEVERY_DETAILS,deliveryController.getDeliveryDetail)
deliveryRouter.post(DELIVERY_ROUTES.CREATE_DELIVERY,deliveryController.createDelivery)
deliveryRouter.delete(DELIVERY_ROUTES.DELETE_DELIVERY,deliveryController.deleteDelivery)
deliveryRouter.put(DELIVERY_ROUTES.UPDATE_DELIVERY,deliveryController.updateDelivery)