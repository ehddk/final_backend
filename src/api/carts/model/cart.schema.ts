import mongoose from "mongoose";

const cartSchema = new mongoose.Schema<ICart>(
  {
    cartItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CartItem",
      },
    ],
    totalProductPrice: {
      type: Number,
      required: true,
      default: 0, // 기본값을 0으로 설정
    },
    shippingFee: {
      type: Number,
      required: true,
      default: 0, // 기본값을 0으로 설정
    },
    totalPaymentAmount: {
      type: Number,
      required: true,
      default: 0, // 기본값을 0으로 설정
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export const MongooseCart = mongoose.model<ICart>("Cart", cartSchema);
