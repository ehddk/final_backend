import { IDelivery } from "@/api/deliveries/@types/delivery.type";
import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";

// 상세 조회
export class GetUserResponseDTO {
  userId: string;
  email: string;
  profile: {
    id: string;
    firstName: string;
    delivery: IDelivery[];
  };
  cart?: {
    id: string;
    cartItem: ICartItem[];
    totalProductPrice: number;
    shippingFee: number;
    totalPaymentAmount: number;
  };
  orders?: OrderResponseDTO[];

  constructor(user: IUser) {
    this.userId = user.id;
    this.email = user.email;
    this.profile = {
      id: user.profile.id,
      firstName: user.profile.firstName,
      delivery: user.profile.delivery,
    };

    this.cart = user.cart
      ? {
          id: user.cart.id,
          cartItem: user.cart.cartItem ?? [],
          totalProductPrice: user.cart.totalProductPrice ?? 0,
          shippingFee: user.cart.shippingFee ?? 0,
          totalPaymentAmount: user.cart.totalPaymentAmount ?? 0,
        }
      : undefined;
    this.orders = user.orders?.map((order) => new OrderResponseDTO(order));
  }
}
