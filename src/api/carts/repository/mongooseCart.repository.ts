import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseCart } from "@/api/carts/model/cart.schema";
import { CartRepository } from "@/api/carts/repository/cart.repository";

export class MongooseCartRepository implements CartRepository {
  /** 장바구니 생성 */
  async save(cart: Omit<ICart, "id">): Promise<ICart> {
    const newCart = new MongooseCart(cart);
    await newCart.save();
    return newCart;
  }

  /** ID로 장바구니 조회 */
  async findById(id: string): Promise<ICart | null> {
    try {
      const findCart = await MongooseCart.findById(id)
        .populate("user")
        .populate("cartItem");

      return findCart;
    } catch (error: any) {
      const message = error.message.toString();
      if (message.includes("Cast to ObjectId failed")) {
        return null;
      }

      throw error;
    }
  }

  /** 장바구니 업데이트 */
  async update(cartId: string, updateCartInfo: Partial<ICart>): Promise<void> {
    await MongooseCart.findByIdAndUpdate(cartId, {
      ...updateCartInfo,
      cartItem: updateCartInfo.cartItem || undefined, // 예약 목록 업데이트
    }).populate("cartItem");

    return;
  }
}
