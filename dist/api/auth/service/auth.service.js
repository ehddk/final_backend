"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServiceImpl = void 0;
const crypto_service_1 = require("@/api/common/services/crypto.service");
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const jwt_service_1 = require("@/api/common/services/jwt.service");
class AuthServiceImpl {
    _userRepository;
    constructor(userRepository) {
        this._userRepository = userRepository;
    }
    async login(loginId, password) {
        const findUser = await this._userRepository.findByLoginId(loginId);
        if (!findUser) {
            console.log("존재하지 않는 회원입니다.");
            throw new http_exception_1.default(404, "존재하지 않는 회원입니다.");
        }
        const isSamePassword = crypto_service_1.CryptoService.matchPassword(password, findUser?.password || "", findUser.salt ?? "");
        if (!isSamePassword) {
            throw new http_exception_1.default(401, "비밀번호가 일치하지 않습니다.");
        }
        const accessToken = jwt_service_1.JwtService.generateAccessToken({
            role: findUser.role,
            userId: findUser.id,
            expiresIn: "7d",
        });
        return accessToken;
    }
}
exports.AuthServiceImpl = AuthServiceImpl;
//# sourceMappingURL=auth.service.js.map