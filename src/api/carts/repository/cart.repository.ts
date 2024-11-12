export interface CartRepository {
  /** 장바구니 생성 */
  save(cart: Omit<ICart, "id">): Promise<ICart>;

  /** ID로 장바구니 조회 */
  findById(id: string): Promise<ICart | null>;

  /** 장바구니 업데이트 */
  update(cartId: string, updateCartInfo: Partial<ICart>): Promise<void>;
}
