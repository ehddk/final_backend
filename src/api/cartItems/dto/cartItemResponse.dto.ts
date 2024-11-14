export class CartItemResponseDTO {
  id: string;
  product: {
    id: string;
    productName: string;
    sales: number;
  };
  quantity: number;
  totalPrice: number;
  cart: {
    id: string;
  };

  constructor(params: ICartItem) {
    this.id = params.id;
    this.product = {
      id: params.product.id,
      productName: params.product.productName,
      sales: params.product.sales,
    };
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.cart = { id: params.cart.id };
  }
}
