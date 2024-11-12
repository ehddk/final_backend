import { imageUpload } from './../../../vendors/multer';
import mongoose from "@/vendors/mongoose";

const userSchema = new mongoose.Schema<IUser>(
  {
    loginId: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    salt: {
      type: String,
    },
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
      required: true,
      strictPopulate: false,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
      strictPopulate: false,
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],

  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const MongooseUser = mongoose.model<IUser>("User", userSchema);
