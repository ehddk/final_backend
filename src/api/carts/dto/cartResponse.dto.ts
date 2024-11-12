import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";

export class CartResponseDTO {
  id: string;
  cartItem?: CartItemResponseDTO[];
  totalProductPrice: number;
  shippingFee: number;
  totalPaymentAmount: number;
  user: IUser;

  constructor(params: ICart) {
    this.id = params.id;
    this.cartItem = params.cartItem
      ? params.cartItem.map((cartItem) => new CartItemResponseDTO(cartItem))
      : [];
    this.totalProductPrice = params.totalProductPrice;
    this.shippingFee = params.shippingFee;
    this.totalPaymentAmount = params.totalPaymentAmount;
    this.user = params.user;
  }
}
