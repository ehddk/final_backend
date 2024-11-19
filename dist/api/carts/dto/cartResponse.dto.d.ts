import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";
export declare class CartResponseDTO {
    id: string;
    cartItem?: CartItemResponseDTO[];
    totalProductPrice?: number;
    shippingFee?: number;
    totalPaymentAmount?: number;
    userId: string;
    constructor(params: ICart);
}
