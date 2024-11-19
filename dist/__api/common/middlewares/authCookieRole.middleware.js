"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authCookieRoleMiddleware = void 0;
const http_exception_1 = __importDefault(require("../exceptions/http.exception"));
const jwt_service_1 = require("../services/jwt.service");
/** 인증 & 인가 미들웨어 */
const authCookieRoleMiddleware = (roles) => {
    return (req, res, next) => {
        try {
            // 헤더에서 토큰을 가져옵니다.
            const token = req.cookies.accessToken;
            // 토큰이 없으면 에러를 던집니다.
            if (!token) {
                throw new http_exception_1.default(401, "토큰이 없습니다.");
            }
            const tokenValue = token.split("Bearer ")[1];
            // 페이로드에서 역할을 확인합니다.
            const payload = jwt_service_1.JwtService.verifyAccessToken(tokenValue);
            // 역할이 없으면 에러를 던집니다.
            if (!roles.includes(payload.role)) {
                throw new http_exception_1.default(403, "권한이 없습니다.");
            }
            req.user = {
                userId: payload.userId,
                role: payload.role,
            };
            next();
        }
        catch (error) {
            const isAdmin = req.originalUrl.includes("/admin");
            if (isAdmin) {
                res
                    .status(302)
                    .redirect(`/admin/auth/login?redirect=${req.originalUrl || "/admin/posts"}`);
                return;
            }
            res.status(302).redirect(`/auth/login?redirect=${req.originalUrl || ""}`);
        }
    };
};
exports.authCookieRoleMiddleware = authCookieRoleMiddleware;
//# sourceMappingURL=authCookieRole.middleware.js.map