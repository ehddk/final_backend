export class Cart implements ICart {
  id: string;
  cartItem?: ICartItem[];
  totalProductPrice?: number;
  shippingFee?: number;
  totalPaymentAmount?: number;
  user?: IUser;

  constructor(params: ICart) {
    this.id = params.id;
    this.cartItem = params.cartItem;
    this.totalProductPrice = params.totalProductPrice;
    this.shippingFee = params.shippingFee;
    this.totalPaymentAmount = params.totalPaymentAmount;
    this.user = params.user;
  }
}
