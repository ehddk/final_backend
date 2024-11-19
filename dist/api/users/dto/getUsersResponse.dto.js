"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersResponseDTO = void 0;
/**  유저 목록 조회 응답 DTO */
class GetUsersResponseDTO {
    userId;
    email;
    profile;
    cart;
    constructor(user) {
        this.userId = user.id;
        this.email = user.email;
        const deliveryData = user.profile?.delivery;
        this.profile = {
            firstName: user.profile?.firstName || "이름 없음",
            delivery: Array.isArray(deliveryData) && deliveryData.length > 0
                ? deliveryData
                : "배송지 미등록",
        };
        this.cart = {
            id: user.cart.id,
        };
    }
}
exports.GetUsersResponseDTO = GetUsersResponseDTO;
//# sourceMappingURL=getUsersResponse.dto.js.map