import { IProduct } from "@/api/products/@types/product.type";

export class OrderItem implements IOrderItem {
  id: string;
  orderId: string;
  user: IUser;
  product: IProduct;
  productName: string;
  sales: number;
  quantity: number;
  totalPrice: number;
  orderItemStatus: OrderItemStatus;

  constructor(params: IOrderItem) {
    this.id = params.id;
    this.orderId = params.orderId;
    this.user = params.user;
    this.product = params.product;
    this.productName = params.productName;
    this.sales = params.sales;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.orderItemStatus = params.orderItemStatus;
  }
}
