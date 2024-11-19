import { IDelivery } from "@/api/deliveries/@types/delivery.type";
import { InquiryResponseDTO } from "@/api/inquiries/dto/inquiryResponse.dto";
import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";
export declare class GetUserResponseDTO {
    userId: string;
    email: string;
    profile: {
        id: string;
        firstName: string;
        delivery: IDelivery[];
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
    constructor(user: IUser);
}
