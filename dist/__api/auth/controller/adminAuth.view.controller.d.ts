import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";
export default class AdminAuthViewController {
    private readonly _authService;
    constructor(authService: AuthService);
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 로그인 페이지 */
    loginPage(req: Request, res: Response, next: NextFunction): Promise<void>;
}
