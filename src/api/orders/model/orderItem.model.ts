import { IProduct } from "@/api/products/@types/product.type";

export class OrderItem implements IOrderItem {
  id: string;
  product: IProduct;
  quantity: number;
  totalPrice: number;
  orderItemStatus: OrderItemStatus;

  constructor(params: IOrderItem) {
    this.id = params.id;
    this.product = params.product;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.orderItemStatus = params.orderItemStatus;
  }
}
