import mongoose from "mongoose";

const orderSchema = new mongoose.Schema<IOrder>(
  {
    orderItem: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItem",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ShippingAddress",
      required: true,
    },
    deliveryRequest: {
      type: String,
      required: false,
    },
    paymentMethod: {
      type: String,
      enum: Object.values(PAYMENT_METHOD),
      required: true,
    },
    totalProductPrice: {
      type: Number,
      required: true,
    },
    shippingFee: {
      type: Number,
      required: true,
    },
    totalPaymentAmount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: Object.values(ORDER_STATUS),
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

// Mongoose model creation
export const MongooseOrder = mongoose.model<IOrder>("Order", orderSchema);
