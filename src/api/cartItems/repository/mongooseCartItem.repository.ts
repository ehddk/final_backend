import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseCartItem } from "@/api/cartItems/model/cartItem.schema";
import { CartItemRepository } from "@/api/cartItems/repository/cartItem.repository";
import { MongooseCart } from "@/api/carts/model/cart.schema";
import { MongooseProduct } from "@/api/products/model/product.schema";

export class MongooseCartItemRepository implements CartItemRepository {
  async save(
    cartId: string,
    cartItem: Omit<ICartItem, "id">
  ): Promise<ICartItem> {
    const cart = await MongooseCart.findById(cartId);
    if (!cart) {
      throw new Error(`Cart with id ${cartId} not found`);
    }
    const productId = cartItem.product.id || cartItem.product;
    const product = await MongooseProduct.findById(productId);
    if (!product) {
      throw new Error(`Cart with id ${productId} not found`);
    }

    const newCartItem = new MongooseCartItem({
      ...cartItem,
      cartId: cart.id,
      product: product,
    });

    await newCartItem.save();

    return newCartItem;
  }
  async findAll(): Promise<ICartItem[]> {
    return await MongooseCartItem.find().populate("product");
  }

  async findById(id: string): Promise<ICartItem | null> {
    try {
      const cartItem = await MongooseCartItem.findById(id)
        .populate({ path: "product" })
        .exec();

      return cartItem;
    } catch (error: any) {
      const message = error.message.toString();
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
  }

  async update(
    cartItemId: string,
    updateCartItemInfo: Partial<ICartItem>
  ): Promise<ICartItem> {
    const results = await MongooseCartItem.findByIdAndUpdate(
      cartItemId,
      updateCartItemInfo
    );

    if (!results) {
      throw new HttpException(404, "주문 상품을 찾을 수 없습니다.");
    }

    return results;
  }
  async delete(cartItemId: string): Promise<void> {
    await MongooseCartItem.deleteOne({ _id: cartItemId });

    return;
  }
}
