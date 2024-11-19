import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/users/service/users.service.type";
export default class UsersController {
    private _userService;
    constructor(_userService: UserService);
    /** 회원가입 (사용자페이지) */
    signUp(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 내 정보 조회 (사용자페이지) */
    getMyInfo(req: Request<getMyInfoRequest["path"], getMyInfoResponse, getMyInfoRequest["body"], getMyInfoRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 내 정보 수정 (사용자 페이지) */
    updateMyInfo(req: Request<updateMyInfoRequest["path"], updateMyInfoResponse, updateMyInfoRequest["body"], updateMyInfoRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /**로그아웃 */
    logout(req: Request<logoutRequest["path"], logoutResponse, logoutRequest["params"], logoutRequest["body"]>, res: Response, next: NextFunction): Promise<void>;
}
