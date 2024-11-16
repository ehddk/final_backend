import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema<IOrderItem>({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  orderItemStatus: {
    type: String,
    enum: [
      "PAYMENT_PENDING",
      "PAYMENT_COMPLETED",
      "PREPARING_FOR_SHIPPING",
      "SHIPPING",
      "SHIPPED",
      "ORDER_CANCELED",
      "REFUND_REQUESTED",
      "REFUNDED",
      "EXCHANGE_REQUESTED",
      "EXCHANGED",
    ],
    required: true,
  },
});

export const MongooseOrderItem = mongoose.model<IOrderItem>(
  "OrderItem",
  orderItemSchema
);
