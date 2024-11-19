"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    loginId;
    password;
    email;
    role;
    salt;
    profile;
    cart;
    orders;
    inquiries;
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.loginId = params.loginId;
        this.password = params.password;
        this.email = params.email;
        this.role = params.role;
        this.salt = params.salt;
        this.profile = params.profile;
        this.cart = params.cart;
        this.orders = params.orders;
        this.inquiries = params.inquiries;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map