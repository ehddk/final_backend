interface ICartItem {
  /** 주문 상품 ID */
  id: string;
  /** 주문 상품 제목 */
  product: IProduct;
  /** 주문 수량 */
  quantity: number;
  /** 주문 총 가격 */
  totalPrice: number;
  /** 장바구니 */
  cartId: string;
}

interface ICartItemResponseDTO {
  /** 주문 상품 ID */
  cartItemId: string;
  /** 주문 상품 제목 */
  product: {
    id: string;
    productName: string;
    sales: number;
    thumbnail: File | Blob | null;
  };
  /** 주문 수량 */
  quantity: number;
  /** 주문 총 가격 */
  totalPrice: number;
  cartId: string;
}
