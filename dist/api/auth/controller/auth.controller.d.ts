import { NextFunction, Request, Response } from "express";
import { AuthService } from "@/api/auth/service/auth.service.type";
export default class AuthController {
    private readonly _authService;
    constructor(authService: AuthService);
    login(req: Request, res: Response, next: NextFunction): Promise<void>;
}
