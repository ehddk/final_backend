import mongoose from "mongoose";
import { IProduct } from "../@types/product.type";
export declare const MongooseProduct: mongoose.Model<IProduct, {}, {}, {}, mongoose.Document<unknown, {}, IProduct> & IProduct & {
    _id: mongoose.Types.ObjectId;
}, any>;
