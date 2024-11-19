import mongoose from "mongoose";
export declare const MongooseCart: mongoose.Model<ICart, {}, {}, {}, mongoose.Document<unknown, {}, ICart> & ICart & {
    _id: mongoose.Types.ObjectId;
}, any>;
