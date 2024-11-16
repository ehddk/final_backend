export class Order implements IOrder {
  id: string;
  userId: string;
  userInfo: IProfile;
  deliveryAddress: string;
  deliveryRequest?: string;
  createdAt: Date;
  paymentMethod: PaymentMethod;
  orderItem: IOrderItem[];
  totalProductPrice: number;
  shippingFee: number;
  totalPaymentAmount: number;
  orderStatus: OrderStatus;

  constructor(params: IOrder) {
    this.id = params.id;
    this.userId = params.userId;
    this.userInfo = params.userInfo;
    this.deliveryAddress = params.deliveryAddress;
    this.deliveryRequest = params.deliveryRequest;
    this.createdAt = params.createdAt;
    this.paymentMethod = params.paymentMethod;
    this.orderItem = params.orderItem;
    this.totalProductPrice = params.totalProductPrice;
    this.shippingFee = params.shippingFee;
    this.totalPaymentAmount = params.totalPaymentAmount;
    this.orderStatus = params.orderStatus;
  }
}
