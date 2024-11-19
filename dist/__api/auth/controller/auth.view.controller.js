"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthViewController {
    _authService;
    _userService;
    constructor(authService, userService) {
        this._authService = authService;
        this._userService = userService;
        this.login = this.login.bind(this);
    }
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await this._authService.login(email, password);
            res
                .status(200)
                .setHeader("Authorization", `Bearer ${result.accessToken}`)
                .setHeader(`Set-Cookie`, `accessToken=Bearer ${result.accessToken}; Path=/;`)
                .redirect("/posts");
        }
        catch (error) {
            res.status(401).send(`
        <script>alert('${error.message}'); location.href='/auth/login';</script>`);
        }
    }
    /** 로그인 페이지 */
    async loginPage(req, res, next) {
        res.render("client/auth/login");
    }
    /** 회원가입 페이지 */
    async signUpPage(req, res, next) {
        res.render("client/auth/signup");
    }
}
exports.default = AuthViewController;
//# sourceMappingURL=auth.view.controller.js.map