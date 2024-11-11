export class Cart implements ICart {
  id: string;
  orderItems: IOrderItem[];
  totalProductPrice: number;
  shippingFee: number;
  totalPaymentAmount: number;
  user: IUser;

  constructor(params: ICart) {
    this.id = params.id;
    this.orderItems = params.orderItems;
    this.totalProductPrice = this.calculateTotalProductPrice();
    this.shippingFee = params.shippingFee;
    this.totalPaymentAmount = this.calculateTotalPaymentAmount();
    this.user = params.user;
  }

  // 상품 총 가격을 계산하는 메소드
  private calculateTotalProductPrice(): number {
    return this.orderItems.reduce((total, item) => total + item.totalPrice, 0);
  }

  // 결제 예정 금액 계산 (상품 총 가격 + 배송비)
  private calculateTotalPaymentAmount(): number {
    return this.totalProductPrice + this.shippingFee;
  }
}
