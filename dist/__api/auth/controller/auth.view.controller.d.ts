import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";
import { UserService } from "@/api/users/service/users.service.type";
export default class AuthViewController {
    private readonly _authService;
    private readonly _userService;
    constructor(authService: AuthService, userService: UserService);
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 로그인 페이지 */
    loginPage(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 회원가입 페이지 */
    signUpPage(req: Request, res: Response, next: NextFunction): Promise<void>;
}
