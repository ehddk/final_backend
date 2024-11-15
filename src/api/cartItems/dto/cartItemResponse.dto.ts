export class CartItemResponseDTO {
  id: string;
  product: {
    id: string;
  };
  productName: string;
  sales: number;
  quantity: number;
  totalPrice: number;
  cartId: string;

  constructor(params: ICartItem) {
    this.id = params.id;
    this.product = {
      id: params.product.id,
    };
    this.productName = params.product.productName;
    this.sales = params.product.sales;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.cartId = params.cartId;
  }
}
