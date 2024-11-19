"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
class Profile {
    id;
    firstName;
    lastName;
    phoneNum;
    delivery;
    constructor(params) {
        this.id = params.id;
        this.firstName = params.firstName;
        this.phoneNum = params.phoneNum;
        this.delivery = params.delivery;
    }
}
exports.Profile = Profile;
//# sourceMappingURL=profile.model.js.map