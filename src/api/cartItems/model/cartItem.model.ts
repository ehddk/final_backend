import { IProduct } from "@/api/products/@types/product.type";

export class CartItem implements ICartItem {
  id: string;
  product: IProduct;
  quantity: number;
  totalPrice: number;
  cart: ICart;

  constructor(params: ICartItem) {
    this.id = params.id;
    this.product = params.product;
    this.quantity = params.quantity;
    this.totalPrice = params.totalPrice;
    this.cart = params.cart;
  }
}
