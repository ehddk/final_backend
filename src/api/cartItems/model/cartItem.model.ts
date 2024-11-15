import { IProduct } from "@/api/products/@types/product.type";

export class CartItem implements ICartItem {
  id: string;
  product: IProduct;
  productName: string;
  sales: number;
  quantity: number;
  totalPrice: number;
  cartId: string;


  constructor(params: ICartItem) {
    this.id = params.id;
    this.product = params.product;
    this.productName = params.productName;
    this.sales = params.sales;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.cartId = params.cartId;
  }
}
