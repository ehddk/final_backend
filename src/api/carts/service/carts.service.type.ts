import { CartResponseDTO } from "@/api/carts/dto/cartResponse.dto";

export interface CartsService {
  /** 장바구니 조회 */
  getCart(id: string): Promise<CartResponseDTO | null>;

  /** 장바구니 생성 */
  //createCart(userId: string): Promise<CartResponseDTO>;

  /** 장바구니 업데이트 */
  updateCart(
    cartId: string,
    updatedCart: Omit<ICart, "id" | "user">
  ): Promise<void>;
}
