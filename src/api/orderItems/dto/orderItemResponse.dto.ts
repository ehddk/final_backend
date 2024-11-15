export class OrderItemResponseDTO {
  orderItemId: string;
  user: {
    id: string;
  };
  product: {
    id: string;
  };
  orderId: string;
  productName: string;
  sales: number;
  quantity: number;
  totalPrice: number;
  orderItemStatus: OrderItemStatus;

  constructor(params: IOrderItem) {
    this.orderItemId = params.id;
    this.user = {
      id: params.user.id,
    };
    this.product = {
      id: params.product.id,
    };
    this.orderId = params.orderId;
    this.productName = params.product.productName;
    this.sales = params.product.sales;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.orderItemStatus = params.orderItemStatus;
  }
}
