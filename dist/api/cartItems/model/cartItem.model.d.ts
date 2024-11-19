import { IProduct } from "@/api/products/@types/product.type";
export declare class CartItem implements ICartItem {
    id: string;
    product: IProduct;
    quantity: number;
    totalPrice: number;
    cartId: string;
    constructor(params: ICartItem);
}
