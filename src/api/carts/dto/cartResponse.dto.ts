import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";

export class CartResponseDTO {
  cartId: string;
  cartItem?: CartItemResponseDTO[];
  totalProductPrice: number;
  shippingFee: number;
  totalPaymentAmount: number;

  constructor(params: ICart) {
    this.cartId = params.id;
    this.cartItem = params.cartItem?.map(
      (cartItem) => new CartItemResponseDTO(cartItem)
    );
    this.totalProductPrice = params.totalProductPrice;
    this.shippingFee = params.shippingFee;
    this.totalPaymentAmount = params.totalPaymentAmount;
  }
}
