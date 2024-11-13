import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema<IOrderItem>({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
    required: true,
  },
});

export const MongooseOrderItem = mongoose.model<IOrderItem>(
  "OrderItem",
  orderItemSchema
);
