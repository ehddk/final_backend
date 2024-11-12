import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseCartItem } from "@/api/cartItems/model/cartItem.schema";
import { CartItemRepository } from "@/api/cartItems/repository/cartItem.repository";

export class MongooseCartItemRepository implements CartItemRepository {
  async save(cartItem: Omit<ICartItem, "id">): Promise<ICartItem> {
    const newCartItem = new MongooseCartItem(cartItem);

    await newCartItem.save();

    return newCartItem;
  }
  async findAll(): Promise<ICartItem[]> {
    return await MongooseCartItem.find();
  }

  async findById(id: string): Promise<ICartItem | null> {
    const cartItem = await MongooseCartItem.findById(id);
    return cartItem;
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
