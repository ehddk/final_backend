import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema<ICartItem>({
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
  cart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
});

export const MongooseCartItem = mongoose.model<ICartItem>(
  "CartItem",
  cartItemSchema
);
