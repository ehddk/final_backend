export class CartItemResponseDTO {
  id: string;
  product: {
    id: string;
    productName: string;
    sales: number;
    thumbnail: File | Blob | null;
  };

  quantity: number;
  totalPrice: number;
  cartId: string;

  constructor(params: ICartItem) {
    this.id = params.id;
    this.product = {
      id: params.product.id,
      productName: params.product.productName,
      sales: params.product.sales,
      thumbnail: params.product.thumbnail,
    };
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.cartId = params.cartId;
  }
}
