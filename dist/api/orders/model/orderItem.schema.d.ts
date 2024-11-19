import mongoose from "mongoose";
export declare const MongooseOrderItem: mongoose.Model<IOrderItem, {}, {}, {}, mongoose.Document<unknown, {}, IOrderItem> & IOrderItem & {
    _id: mongoose.Types.ObjectId;
}, any>;
