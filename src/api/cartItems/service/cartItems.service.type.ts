import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";

export interface CartItemsService {
  /** 장바구니 주문 상품 생성 */
  createCartItem(
    userId: string,
    cartItem: Omit<ICartItem, "id">
  ): Promise<CartItemResponseDTO>;
  /** 장바구니 주문 상품 목록 조회 (페이지네이션 없이) */
  getCartItems(): Promise<CartItemResponseDTO[]>;
  /** 장바구니 주문 상품 조회 */
  getCartItemDetail(cartItemId: string): Promise<CartItemResponseDTO | null>;
  /** 장바구니 주문 상품 수정 */
  updateCartItem(
    cartItemId: string,
    updatedCartItem: Omit<ICartItem, "id" | "product">
  ): Promise<void>;
  /** 장바구니 주문 상품 삭제 */
  deleteCartItem(cartItemId: string): Promise<void>;
}
