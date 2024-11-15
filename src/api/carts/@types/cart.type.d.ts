interface ICart {
  /** 장바구니 ID */
  id: string;
  /** 주문 상품 정보 */
  cartItem?: ICartItem[];
  /** 상품 총 가격 */
  totalProductPrice?: number;
  /** 배송비 */
  shippingFee?: number;
  /** 결제예정금액 */
  totalPaymentAmount?: number;
  userId: string;
}

interface ICartResponseDTO {
  /** 장바구니 ID */
  cartId: string;
  /** 장바구니 상품 정보 */
  cartItem: {
    product: {
      id: string;
      productName: string;
      sales: number;
    };
    quantity: number;
    totalPrice: number; // 상품별 총 가격
  };
  /** 상품 총 가격  (배송비 제외)*/
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제예정금액 (상품 가격 + 배송비)*/
  totalPaymentAmount: number;
  userId: string;
}
