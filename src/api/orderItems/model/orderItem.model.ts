export class OrderItem implements IOrderItem {
  id: string;
  product: IProduct;
  user: IUser;
  quantity: number;
  totalPrice: number;
  orderItemStatus: OrderItemStatus;

  constructor(params: IOrderItem) {
    this.id = params.id;
    this.product = params.product;
    this.user = params.user;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.orderItemStatus = params.orderItemStatus;
  }
}
