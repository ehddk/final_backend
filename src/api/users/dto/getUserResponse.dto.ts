import { IDelivery } from "@/api/deliveries/@types/delivery.type";
import { InquiryResponseDTO } from "@/api/inquiries/dto/inquiryResponse.dto";
import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";

// 상세 조회
export class GetUserResponseDTO {
  userId: string;
  email: string;
  loginId: string;
  profile: {
    id: string;
    firstName: string;
    delivery: IDelivery[];
    phoneNum: string;
  };
  cart: {
    id: string;
    cartItem: ICartItem[];
    totalProductPrice: number;
    shippingFee: number;
    totalPaymentAmount: number;
  };
  orders?: OrderResponseDTO[];
  inquiries?: InquiryResponseDTO[];

  constructor(user: IUser) {
    this.userId = user.id;
    this.email = user.email;
    this.loginId = user.loginId;
    this.profile = {
      id: user.profile.id,
      firstName: user.profile.firstName,
      delivery: user.profile.delivery ?? [],
      phoneNum: user.profile.phoneNum
    };

    if (user.cart) {
      this.cart = {
        id: user.cart.id,
        cartItem: user.cart.cartItem ?? [],
        totalProductPrice: user.cart.totalProductPrice ?? 0,
        shippingFee: user.cart.shippingFee ?? 0,
        totalPaymentAmount: user.cart.totalPaymentAmount ?? 0,
      };
    } else {
      this.cart = {
        id: "",
        cartItem: [],
        totalProductPrice: 0,
        shippingFee: 0,
        totalPaymentAmount: 0,
      };
    }
    this.inquiries = user.inquiries?.map(
      (inquiry) => new InquiryResponseDTO(inquiry)
    );
    this.orders = user.orders?.map((order) => new OrderResponseDTO(order));
  }
}
