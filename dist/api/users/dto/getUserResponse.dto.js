"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserResponseDTO = void 0;
const inquiryResponse_dto_1 = require("@/api/inquiries/dto/inquiryResponse.dto");
const orderResponse_dto_1 = require("@/api/orders/dto/orderResponse.dto");
// 상세 조회
class GetUserResponseDTO {
    userId;
    email;
    profile;
    cart;
    orders;
    inquiries;
    constructor(user) {
        this.userId = user.id;
        this.email = user.email;
        this.profile = {
            id: user.profile.id,
            firstName: user.profile.firstName,
            delivery: user.profile.delivery ?? [],
        };
        if (user.cart) {
            this.cart = {
                id: user.cart.id,
                cartItem: user.cart.cartItem ?? [],
                totalProductPrice: user.cart.totalProductPrice ?? 0,
                shippingFee: user.cart.shippingFee ?? 0,
                totalPaymentAmount: user.cart.totalPaymentAmount ?? 0,
            };
        }
        else {
            this.cart = {
                id: "",
                cartItem: [],
                totalProductPrice: 0,
                shippingFee: 0,
                totalPaymentAmount: 0,
            };
        }
        this.inquiries = user.inquiries?.map((inquiry) => new inquiryResponse_dto_1.InquiryResponseDTO(inquiry));
        this.orders = user.orders?.map((order) => new orderResponse_dto_1.OrderResponseDTO(order));
    }
}
exports.GetUserResponseDTO = GetUserResponseDTO;
//# sourceMappingURL=getUserResponse.dto.js.map