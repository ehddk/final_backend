import { IProduct } from "@/api/product/@types/product.type";

export class OrderItem implements IOrderItem {
  id: string;
  orderId: string;
  product: IProduct;
  quantity: number;
  totalPrice: number;
  orderItemStatus: OrderItemStatus;

  constructor(params: IOrderItem) {
    this.id = params.id;
    this.orderId = params.orderId;
    this.product = params.product;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.orderItemStatus = params.orderItemStatus;
  }
}
