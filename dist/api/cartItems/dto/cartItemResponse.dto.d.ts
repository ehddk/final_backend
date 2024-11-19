export declare class CartItemResponseDTO {
    id: string;
    product: {
        id: string;
        productName: string;
        sales: number;
    };
    quantity: number;
    totalPrice: number;
    cartId: string;
    constructor(params: ICartItem);
}
