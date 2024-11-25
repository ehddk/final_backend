import { imageUpload } from "./../../../vendors/multer";
import mongoose from "@/vendors/mongoose";

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
    },
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
      // required: true,
      ref: "Cart",
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        strictPopulate: false,
      },
    ],
    inquiries: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Inquiry",
        strictPopulate: false,
      },
    ],
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const MongooseUser = mongoose.model<IUser>("User", userSchema);
