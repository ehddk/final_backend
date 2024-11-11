export class CartResponseDTO {
  cartId: string;
  orderItems: {
    productName: string;
    quantity: number;
    totalPrice: number;
  }[];
  totalProductPrice: number;
  shippingFee: number;
  totalPaymentAmount: number;

  constructor(params: ICart) {
    this.cartId = params.id;
    this.orderItems = params.orderItems.map((item) => ({
      productName: item.product.productName,
      quantity: item.quantity,
      totalPrice: item.totalPrice,
    }));
    this.totalProductPrice = params.totalProductPrice;
    this.shippingFee = params.shippingFee;
    this.totalPaymentAmount = params.totalPaymentAmount;
  }
}
