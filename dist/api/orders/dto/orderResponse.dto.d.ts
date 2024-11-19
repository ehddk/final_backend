export declare class OrderResponseDTO {
    orderId: string;
    userId: string;
    userInfo: {
        firstName: string;
        phoneNum: string;
    };
    deliveryAddress: string;
    deliveryRequest?: string;
    orderDate: Date;
    paymentMethod: PaymentMethod;
    orderItem: {
        product: {
            id: string;
            productName: string;
            sales: number;
        };
        /** 주문 수량 */
        quantity: number;
        /** 주문 총 가격 */
        totalPrice: number;
        /** 주문 상태 (주문상품별) */
        orderItemStatus: OrderItemStatus;
    }[];
    /** 총 상품 가격 */
    totalProductPrice: number;
    /** 배송비 */
    shippingFee: number;
    /** 결제예정금액 */
    totalPaymentAmount: number;
    orderStatus: OrderStatus;
    constructor(params: IOrder);
}
