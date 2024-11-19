import mongoose from "mongoose";
import { IDelivery } from "../@types/delivery.type";
export declare const MongooseDelivery: mongoose.Model<IDelivery, {}, {}, {}, mongoose.Document<unknown, {}, IDelivery> & IDelivery & {
    _id: mongoose.Types.ObjectId;
}, any>;
