// OrderResponseDTO 클래스 정의
export class OrderResponseDTO {
  orderId: string;
  userId: string;
  userInfo: {
    firstName: string;
    phoneNum: string;
  };
  deliveryAddress: string;
  deliveryRequest?: string;
  orderDate: Date; // createdAt
  paymentMethod: PaymentMethod;
  orderItem: {
    product: {
      id: string;
      productName: string;
      sales: number;
    };
    /** 주문 수량 */
    quantity: number;
    /** 주문 총 가격 */
    totalPrice: number;
    /** 주문 상태 (주문상품별) */
    orderItemStatus: OrderItemStatus;
  }[];
  /** 총 상품 가격 */
  totalProductPrice: number;
  /** 배송비 */
  shippingFee: number;
  /** 결제예정금액 */
  totalPaymentAmount: number;
  orderStatus: OrderStatus;

  // 생성자에서 IOrder 객체를 받아서 DTO로 변환
  constructor(params: IOrder) {
    this.orderId = params.id; // 주문 ID
    this.userId = params.userId;
    this.userInfo = {
      firstName: params.userInfo.firstName,
      phoneNum: params.userInfo.phoneNum,
    };
    this.deliveryAddress = params.deliveryAddress;
    this.deliveryRequest = params.deliveryRequest; // 배송 요청사항 (선택 사항)
    this.orderDate = params.createdAt; // 주문 날짜 (string으로 전달)
    this.paymentMethod = params.paymentMethod; // 결제 수단
    (this.totalProductPrice = params.totalProductPrice),
      (this.shippingFee = params.shippingFee),
      (this.totalPaymentAmount = params.totalPaymentAmount),
      (this.orderStatus = params.orderStatus); // 주문 상태
    this.orderItem = params.orderItem
      ? params.orderItem.map((item: IOrderItem) => ({
          product: {
            id: item.product.id,
            productName: item.product.productName,
            sales: item.product.sales,
          },
          quantity: item.quantity,
          totalPrice: item.totalPrice,
          orderItemStatus: item.orderItemStatus,
        }))
      : [];
  }
}
