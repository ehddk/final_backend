import { CartResponseDTO } from "@/api/carts/dto/cartResponse.dto";

export interface CartsService {
  /** 장바구니 조회 */
  getCart(userId: string): Promise<CartResponseDTO>;

  /** 장바구니 생성 */
  createCart(
    params: Omit<ICart, "id"> & {
      userId: string;
      cartItem?: ICartItem[];
    }
  ): Promise<CartResponseDTO>;

  /** 장바구니 업데이트 */
  updateCart(
    cartId: string,
    updatedCart: Partial<
      Omit<ICart, "id"> & {
        cartItem?: ICartItem[];
      }
    >
  ): Promise<void>;
  /** 장바구니 삭제 */
  deleteCart(cartId: string): Promise<void>;
}
