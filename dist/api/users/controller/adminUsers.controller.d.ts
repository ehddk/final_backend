import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/users/service/users.service.type";
export default class AdminUserController {
    private _userService;
    constructor(_userService: UserService);
    /** 유저 목록 조회 (관리자) */
    getUsers(req: Request<adminGetUsersRequest["path"], adminGetUsersResponse, adminGetUsersRequest["body"], adminGetUsersRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 유저 상세 조회 (관리자) */
    getUser(req: Request<adminGetUserRequest["path"], adminGetUserResponse, adminGetUserRequest["body"], adminGetUserRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 유저 생성 (관리자) */
    createUser(req: Request<adminCreateUserRequest["path"], adminCreateUserResponse, adminCreateUserRequest["body"], adminCreateUserRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 유저 수정 (관리자) */
    updateUser(req: Request<adminUpdateUserRequest["path"], adminUpdateUserResponse, adminUpdateUserRequest["body"], adminUpdateUserRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 유저 삭제 (관리자) */
    deleteUser(req: Request<adminDeleteUserRequest["path"], adminDeleteUserResponse, adminDeleteUserRequest["body"], adminDeleteUserRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
