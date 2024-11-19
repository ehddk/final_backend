export declare class Order implements IOrder {
    id: string;
    userId: string;
    userInfo: IProfile;
    deliveryAddress: string;
    deliveryRequest?: string;
    createdAt: Date;
    paymentMethod: PaymentMethod;
    orderItem: IOrderItem[];
    totalProductPrice: number;
    shippingFee: number;
    totalPaymentAmount: number;
    orderStatus: OrderStatus;
    constructor(params: IOrder);
}
