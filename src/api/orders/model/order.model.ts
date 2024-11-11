class Order implements IOrder {
  id: string;
  orderItem: IOrderItem[];
  user: IUser;
  shippingAddress: IShippingAddress[];
  deliveryRequest?: string;
  createdAt: Date;
  paymentMethod: PaymentMethod;

  totalProductPrice: number;
  shippingFee: number;
  totalPaymentAmount: number;
  orderStatus: OrderStatus;

  constructor(params: IOrder) {
    this.id = params.id;
    this.orderItem = params.orderItem;
    this.user = params.user;
    this.shippingAddress = params.shippingAddress;
    this.deliveryRequest = params.deliveryRequest;
    this.createdAt = params.createdAt;
    this.paymentMethod = params.paymentMethod;
    this.totalProductPrice = params.totalProductPrice;
    this.shippingFee = params.shippingFee;
    this.totalPaymentAmount = params.totalPaymentAmount;
    this.orderStatus = params.orderStatus;
  }
}
