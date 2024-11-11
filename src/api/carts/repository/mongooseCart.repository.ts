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
    return MongooseCart.findById(id).populate({
      path: "user",
      populate: { path: "profile" },
    });
  }

  /** 장바구니 업데이트 */
  async update(
    cartId: string,
    updatedInfo: Partial<ICart>
  ): Promise<ICart> {
    const cart = await MongooseCart.findByIdAndUpdate(cartId, updatedInfo, {
      new: true,
    });
    if (!cart) throw new HttpException(404, "장바구니를 찾을 수 없습니다.");
    return cart;
  }
}
