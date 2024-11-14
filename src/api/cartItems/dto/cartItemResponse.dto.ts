export class CartItemResponseDTO {
  id: string;
  product: {
    productName: string;
    sales: number;
  };
  quantity: number;
  totalPrice: number;

  constructor(params: ICartItem) {
    this.id = params.id;
    this.product = {
      productName: params.product.productName,
      sales: params.product.sales,
    };
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
  }
}
