import { CartResponseDTO } from "@/api/carts/dto/cartResponse.dto";
import { CartRepository } from "@/api/carts/repository/cart.repository";
import { CartsService } from "@/api/carts/service/carts.service.type";
import HttpException from "@/api/common/exceptions/http.exception";

export class CartsServiceImpl implements CartsService {
  constructor(private readonly _cartRepository: CartRepository) {}

  /** 장바구니 생성 */
  async createCart(
    params: Omit<ICart, "id"> & {
      userId: string;
      cartItem?: ICartItem[];
    }
  ): Promise<CartResponseDTO> {
    const cart = await this._cartRepository.save({
      ...params,
      userId: params.userId,
      cartItem: params.cartItem || [],
    });

    return new CartResponseDTO(cart);
  }

  /** 장바구니 조회 */
  async getCart(userId: string): Promise<CartResponseDTO> {
    const cart = await this._cartRepository.findOneByUserId(userId);
    console.log('카트 서비스',cart)
    if (!cart) {
      throw new HttpException(404, "아이디를 찾을 수 없습니다.");
    }

    return new CartResponseDTO(cart);
  }

  /** 장바구니 업데이트 */
  async updateCart(cartId: string, updatedCart: Partial<ICart>): Promise<void> {
    const findCart = await this._cartRepository.findById(cartId);

    if (!findCart) throw new HttpException(404, "장바구니를 찾을 수 없습니다.");

    await this._cartRepository.update(cartId, {
      ...updatedCart,
      cartItem: updatedCart?.cartItem || findCart.cartItem,
    });
    return;
  }

  async deleteCart(cartId: string): Promise<void> {
    await this._cartRepository.delete(cartId);
  }
}
