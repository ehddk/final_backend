import mongoose from "mongoose";
export declare const MongooseCartItem: mongoose.Model<ICartItem, {}, {}, {}, mongoose.Document<unknown, {}, ICartItem> & ICartItem & {
    _id: mongoose.Types.ObjectId;
}, any>;
