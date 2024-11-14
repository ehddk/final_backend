interface ICartItem {
  /** 주문 상품 ID */
  id: string;
  /** 주문 상품 제목 */
  product: IProduct;
  /** 주문 수량 */
  quantity: number;
  /** 주문 총 가격 */
  totalPrice: number;
}

interface ICartItemResponseDTO {
  /** 주문 상품 ID */
  cartItemId: string;
  /** 주문 상품 제목 */
  product: {
    productName: string;
    sales: number;
  };
  /** 주문 수량 */
  quantity: number;
  /** 주문 총 가격 */
  totalPrice: number;
}
