// OrderResponseDTO 클래스 정의
export class OrderResponseDTO {
  orderId: string;
  orderItem: {
    product: {
      productName: string;
    };
    quantity: number;
    totalPrice: number;
  };
  user: {
    name: string;
    phoneNumber: number;
  };
  shippingAddress: {
    address: string;
  };
  deliveryRequest?: string;
  orderDate: Date; // createdAt
  paymentMethod: PaymentMethod;
  totalProductPrice: number;
  shippingFee: number;
  totalPaymentAmount: number;
  orderStatus: OrderStatus;

  // 생성자에서 IOrder 객체를 받아서 DTO로 변환
  constructor(params: IOrder) {
    this.orderId = params.id; // 주문 ID
    this.orderItem = {
      productName: params.orderItem.product.productName, // 주문된 제품명
      quantity: params.orderItem.quantity;
      totalPrice: params.orderItem.totalPrice;
    };
    this.user = {
      name: params.user.profile.firstName, // 사용자 이름
      phoneNumber: params.user.profile.phoneNum,
    };
    this.shippingAddress = {
      address: params.shippingAddress
    }; // 배송지
    this.deliveryRequest = params.deliveryRequest; // 배송 요청사항 (선택 사항)
    this.orderDate = params.createdAt; // 주문 날짜 (string으로 전달)
    this.paymentMethod = params.paymentMethod; // 결제 수단
    this.totalProductPrice = params.totalProductPrice; // 상품 총 가격
    this.shippingFee = params.shippingFee; // 배송비
    this.totalPaymentAmount = params.totalPaymentAmount; // 결제 예정 금액
    this.orderStatus = params.orderStatus; // 주문 상태
  }
}
