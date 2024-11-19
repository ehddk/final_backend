import mongoose from "mongoose";
export declare const MongooseShipStatus: mongoose.Model<IShipStatus, {}, {}, {}, mongoose.Document<unknown, {}, IShipStatus> & IShipStatus & {
    _id: mongoose.Types.ObjectId;
}, any>;
