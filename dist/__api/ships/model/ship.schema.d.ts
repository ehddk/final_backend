import mongoose from "mongoose";
export declare const MongooseShip: mongoose.Model<IShip, {}, {}, {}, mongoose.Document<unknown, {}, IShip> & IShip & {
    _id: mongoose.Types.ObjectId;
}, any>;
