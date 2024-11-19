"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderResponseDTO = void 0;
// OrderResponseDTO 클래스 정의
class OrderResponseDTO {
    orderId;
    userId;
    userInfo;
    deliveryAddress;
    deliveryRequest;
    orderDate; // createdAt
    paymentMethod;
    orderItem;
    /** 총 상품 가격 */
    totalProductPrice;
    /** 배송비 */
    shippingFee;
    /** 결제예정금액 */
    totalPaymentAmount;
    orderStatus;
    // 생성자에서 IOrder 객체를 받아서 DTO로 변환
    constructor(params) {
        this.orderId = params.id; // 주문 ID
        this.userId = params.userId;
        this.userInfo = {
            firstName: params.userInfo.firstName,
            phoneNum: params.userInfo.phoneNum,
        };
        this.deliveryAddress = params.deliveryAddress;
        this.deliveryRequest = params.deliveryRequest; // 배송 요청사항 (선택 사항)
        this.orderDate = params.createdAt; // 주문 날짜 (string으로 전달)
        this.paymentMethod = params.paymentMethod; // 결제 수단
        (this.totalProductPrice = params.totalProductPrice),
            (this.shippingFee = params.shippingFee),
            (this.totalPaymentAmount = params.totalPaymentAmount),
            (this.orderStatus = params.orderStatus); // 주문 상태
        this.orderItem = params.orderItem
            ? params.orderItem.map((item) => ({
                id: item.id,
                product: {
                    id: item.product.id,
                    productName: item.product.productName,
                    sales: item.product.sales,
                },
                quantity: item.quantity,
                totalPrice: item.totalPrice,
                orderItemStatus: item.orderItemStatus,
            }))
            : [];
    }
}
exports.OrderResponseDTO = OrderResponseDTO;
//# sourceMappingURL=orderResponse.dto.js.map