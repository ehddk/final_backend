interface IOrder {
  /** 주문 ID */
  id: string;
  /** 제품id */
  productId: string;
  /** 회원id */
  userId: string;
  /** 회원명 */
  userName: string;
  /** 배송지 */
  shippingAddress: string;
  /** 배송요청사항 */
  deliveryRequest: string;
  /** 주문날짜 */
  orderDate: string;
  /** 결제수단 */
  paymentMethod: "신용카드" | "간편결제" | "휴대폰" | "카카오페이";
  /** 주문상품개수 */
  productQuantity: number;
  /** 상품 총 가격 */
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제예정금액 */
  totalPaymentAmount: number;
  /** 주문상태 */
  orderStatus: "결제완료" | "배송준비중" | "배송중" | "배송완료" | "주문취소";
}

interface IOrderResponseDTO {}
