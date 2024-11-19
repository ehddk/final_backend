import { IProduct } from "@/api/products/@types/product.type";
export declare class OrderItem implements IOrderItem {
    id: string;
    product: IProduct;
    quantity: number;
    totalPrice: number;
    orderItemStatus: OrderItemStatus;
    constructor(params: IOrderItem);
}
