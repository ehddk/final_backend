export interface CartItemRepository {
  /** 장바구니 주문 상품 생성 */
  save(cartId: string, cartItem: Omit<ICartItem, "id">): Promise<ICartItem>;
  /** 장바구니 주문 상품 목록 조회 */
  findAll(): Promise<ICartItem[]>;
  /** ID로 장바구니 주문 상품 조회 */
  findById(cartItemId: string): Promise<ICartItem | null>;
  /** 장바구니 주문 상품 수정 */
  update(
    cartItemId: string,
    updateCartItemInfo: Partial<ICartItem>
  ): Promise<ICartItem>;
  /** 장바구니 주문 상품 삭제 */
  delete(cartItemId: string): Promise<void>;
}
