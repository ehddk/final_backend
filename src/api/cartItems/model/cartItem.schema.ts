import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema<ICartItem>({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  productName: {
    type: String,
  },
  sales: {
    type: Number,
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
  cartId: {
    type: String,
    required: true,
  },
});

export const MongooseCartItem = mongoose.model<ICartItem>(
  "CartItem",
  cartItemSchema
);
