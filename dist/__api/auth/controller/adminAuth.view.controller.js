"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminAuthViewController {
    _authService;
    constructor(authService) {
        this._authService = authService;
        this.login = this.login.bind(this);
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await this._authService.login(email, password);
            res
                .status(200)
                .setHeader("Authorization", `Bearer ${result.accessToken}`)
                .setHeader(`Set-Cookie`, `accessToken=Bearer ${result.accessToken}; Path=/; HttpOnly`)
                .redirect("/admin/users");
        }
        catch (error) {
            // next(error);
            res.status(401).send(`
        <script>alert('${error.message}'); location.href='/admin/auth/login';</script>`);
        }
    }
    /** 로그인 페이지 */
    async loginPage(req, res, next) {
        res.render("admin/auth/login");
    }
}
exports.default = AdminAuthViewController;
//# sourceMappingURL=adminAuth.view.controller.js.map