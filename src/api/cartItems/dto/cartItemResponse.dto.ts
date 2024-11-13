export class CartItemResponseDTO {
  id: string;
  product: {
    productName: string;
    sales: number;
  };
  user: IUser;
  quantity: number;
  totalPrice: number;

  constructor(params: ICartItem) {
    this.id = params.id;
    this.product = {
      productName: params.product.productName,
      sales: params.product.sales,
    };
    this.user = params.user;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
  }
}
