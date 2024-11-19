export declare class Cart implements ICart {
    id: string;
    cartItem?: ICartItem[];
    totalProductPrice?: number;
    shippingFee?: number;
    totalPaymentAmount?: number;
    userId: string;
    constructor(params: ICart);
}
