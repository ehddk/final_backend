import { IDelivery } from "@/api/delivery/@types/delivery.type";

class Order implements IOrder {
  id: string;
  user: IUser;
  shippingAddress: IDelivery;
  deliveryRequest?: string;
  createdAt: Date;
  paymentMethod: PaymentMethod;
  cart: ICart;
  orderStatus: OrderStatus;

  constructor(params: IOrder) {
    this.id = params.id;
    this.user = params.user;
    this.shippingAddress = params.shippingAddress;
    this.deliveryRequest = params.deliveryRequest;
    this.createdAt = params.createdAt;
    this.paymentMethod = params.paymentMethod;
    this.cart = params.cart;
    this.orderStatus = params.orderStatus;
  }
}
