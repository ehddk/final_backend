export class OrderItemResponseDTO {
  orderItemId: string;
  user: {
    id: string;
  };
  product: {
    productName: string;
    sales: number;
  };
  quantity: number;
  totalPrice: number;
  orderItemStatus: OrderItemStatus;

  constructor(params: IOrderItem) {
    this.orderItemId = params.id;
    this.user = {
      id: params.user.id,
    };
    this.product = {
      productName: params.product.productName,
      sales: params.product.sales,
    };
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.orderItemStatus = params.orderItemStatus;
  }
}
