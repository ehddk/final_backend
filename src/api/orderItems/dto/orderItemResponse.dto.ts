export class OrderItemResponseDTO {
  orderItemId: string;
  product: {
    productName: string;
    sales: number;
  };
  quantity: number;
  user: {
    id: string;
    name: string;
  };
  totalPrice: number;
  orderItemStatus: OrderItemStatus;

  constructor(params: IOrderItem) {
    this.orderItemId = params.id;
    this.product = {
      productName: params.product.productName,
      sales: params.product.sales,
    };
    this.quantity = params.quantity;
    this.user = {
      id: params.user.id,
      name: params.user.profile.name,
    };
    this.totalPrice = params.totalPrice;
    this.orderItemStatus = params.orderItemStatus;
  }
}
