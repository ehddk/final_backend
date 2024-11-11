// OrderResponseDTO 클래스 정의
export class OrderResponseDTO {
  orderId: string;
  user: {
    firstName: string;
    phoneNum: string;
  };
  shippingAddress: {
    name: string; //배송지와 연결된 유저명
    postalCode: number; //우편번호
    defaultAddress: string; // 기본 주소
    detailAddress: string; // 상세 주소
    number: string; //폰번호
  };
  deliveryRequest?: string;
  orderDate: Date; // createdAt
  paymentMethod: PaymentMethod;
  cart: {
    cartItem: {
      product: {
        productName: string;
        sales: number;
      };
      /** 주문 수량 */
      quantity: number;
      /** 주문 총 가격 */
      totalPrice: number;
    }[];
    /** 상품 총 가격 */
    totalProductPrice: number;
    /** 배송비 */
    shippingFee: number;
    /** 결제예정금액 */
    totalPaymentAmount: number;
  };
  orderStatus: OrderStatus;

  // 생성자에서 IOrder 객체를 받아서 DTO로 변환
  constructor(params: IOrder) {
    this.orderId = params.id; // 주문 ID

    this.user = {
      firstName: params.user.profile.firstName, // 사용자 이름
      phoneNum: params.user.profile.phoneNum,
    };
    this.shippingAddress = {
      name: params.shippingAddress.name, //배송지와 연결된 유저명
      postalCode: params.shippingAddress.postalCode, //우편번호
      defaultAddress: params.shippingAddress.defaultAddress, // 기본 주소
      detailAddress: params.shippingAddress.detailAddress, // 상세 주소
      number: params.shippingAddress.number,
    }; // 배송지
    this.deliveryRequest = params.deliveryRequest; // 배송 요청사항 (선택 사항)
    this.orderDate = params.createdAt; // 주문 날짜 (string으로 전달)
    this.paymentMethod = params.paymentMethod; // 결제 수단
    const cartItem: ICartItem[] | undefined = params.cart.cartItem;
    this.cart = {
      cartItem: cartItem
        ? cartItem.map((item: ICartItem) => ({
            product: {
              productName: item.product.productName,
              sales: item.product.sales,
            },
            quantity: item.quantity,
            totalPrice: item.totalPrice,
          }))
        : [],
      totalProductPrice: params.cart.totalProductPrice,
      shippingFee: params.cart.shippingFee,
      totalPaymentAmount: params.cart.totalPaymentAmount,
    };
    this.orderStatus = params.orderStatus; // 주문 상태
  }
}
