import mongoose from "mongoose";

const orderSchema = new mongoose.Schema<IOrder>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    shippingAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Delivery",
      required: true,
    },
    deliveryRequest: {
      type: String,
      required: false,
    },
    paymentMethod: {
      type: String,
      enum: ["CREDIT_CARD", "SIMPLE_PAY", "MOBILE_PAYMENT", "KAKAO_PAY"],
      required: true,
    },
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
      required: true,
    },
    orderStatus: {
      type: String,
      enum: [
        "PAYMENT_PENDING",
        "PAYMENT_COMPLETED",
        "PREPARING_FOR_SHIPPING",
        "SHIPPING",
        "SHIPPED",
        "ORDER_CANCELED",
        "PARTIAL_REFUND_REQUESTED",
        "FULL_REFUND_REQUESTED",
        "PARTIAL_REFUNDED",
        "FULL_REFUNDED",
        "PARTIAL_EXCHANGE_REQUESTED",
        "PARTIAL_EXCHANGED",
        "FULL_EXCHANGE_REQUESTED",
        "FULL_EXCHANGED",
      ],
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
