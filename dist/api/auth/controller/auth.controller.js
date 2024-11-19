"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthController {
    _authService;
    constructor(authService) {
        this._authService = authService;
        this.login = this.login.bind(this);
    }
    async login(req, res, next) {
        try {
            const { loginId, password } = req.body;
            const result = await this._authService.login(loginId, password);
            res.status(200).json({
                message: "로그인 성공",
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({ message: "로그인 실패" });
            next(error);
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map