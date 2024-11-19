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
            const { email, password } = req.body;
            const result = await this._authService.login(email, password);
            res.send(result);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map