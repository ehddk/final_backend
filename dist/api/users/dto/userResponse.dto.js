"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDTO = void 0;
// 회원가입
class UserResponseDTO {
    /** 유저 ID */
    userId;
    name;
    loginId;
    email;
    phoneNum;
    cart;
    constructor(user) {
        this.userId = user.id;
        this.name = user.profile.firstName;
        this.loginId = user.loginId;
        this.email = user.email;
        this.phoneNum = user.profile.phoneNum;
        this.cart = {
            id: user.cart?.id,
            userId: user.cart?.userId,
        };
    }
}
exports.UserResponseDTO = UserResponseDTO;
//# sourceMappingURL=userResponse.dto.js.map