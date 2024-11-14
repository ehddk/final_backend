import mongoose from "mongoose";

const profileSchema = new mongoose.Schema<IProfile>({
  firstName: {
    type: String,
    required: true,
    length: 100,
  },
  lastName: {
    type: String,
    length: 20,
  },
  phoneNum: {
    type: String,
    unique: true,
    length: 20,
  },
  delivery: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Delivery",
    strictPopulate: false
  }],
});

export const MongooseProfile = mongoose.model<IProfile>(
  "Profile",
  profileSchema
);
