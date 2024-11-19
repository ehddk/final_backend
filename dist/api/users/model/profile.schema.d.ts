import mongoose from "mongoose";
export declare const MongooseProfile: mongoose.Model<IProfile, {}, {}, {}, mongoose.Document<unknown, {}, IProfile> & IProfile & {
    _id: mongoose.Types.ObjectId;
}, any>;
