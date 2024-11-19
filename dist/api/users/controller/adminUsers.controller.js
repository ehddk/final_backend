"use strict";
// [관리자]
// 유저 목록 조회 - getUsers
// 유저 상세 조회 - getUser
// 유저 생성 - createUser
// 유저 수정 - updateUser
// 유저 삭제 - deleteUser
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_service_1 = require("@/api/common/services/crypto.service");
class AdminUserController {
    _userService;
    constructor(_userService) {
        this._userService = _userService;
        this.getUsers = this.getUsers.bind(this);
        this.getUser = this.getUser.bind(this);
        this.createUser = this.createUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }
    /** 유저 목록 조회 (관리자) */
    async getUsers(req, res, next) {
        try {
            const users = await this._userService.getUsers();
            // console.log("회원 목록 조회 완료")
            // res.send(users);
            res.status(200).json({
                message: "관리자 회원 목록 조회 성공",
                data: users,
            });
        }
        catch (error) {
            res.status(400).json({ message: "관리자 회원 목록 조회 실패" });
            next(error);
        }
    }
    /** 유저 상세 조회 (관리자) */
    async getUser(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await this._userService.getUser(userId);
            // console.log("회원 상세 조회 완료")
            // res.status(200).send(user);
            res.status(200).json({
                message: "관리자 회원 상세 조회 성공",
                data: user,
            });
        }
        catch (error) {
            res.status(404).json({ message: "관리자 회원 상세 조회 실패" });
            // next(error);
        }
    }
    /** 유저 생성 (관리자) */
    async createUser(req, res, next) {
        try {
            const { password } = req.body;
            const { hashedPassword, salt } = crypto_service_1.CryptoService.encryptPassword(password);
            const newUser = await this._userService.createUser({
                ...req.body,
                password: hashedPassword,
                salt,
            });
            console.log(newUser);
            // console.log("회원 생성 완료")
            // res.send(newUser);
            res.status(200).json({
                message: "관리자 회원 생성 성공",
                data: newUser,
            });
        }
        catch (error) {
            res.status(409).json({ message: "관리자 회원 생성 실패" });
            // next(error);
        }
    }
    /** 유저 수정 (관리자) */
    async updateUser(req, res, next) {
        try {
            const user = await this._userService.updateUser(req.params.userId, req.body);
            // console.log("회원 수정 완료")
            // res.status(200).send(user);
            res.status(200).json({
                message: "관리자 회원 수정 성공",
                data: user,
            });
        }
        catch (error) {
            res.status(400).json({ message: "관리자 회원 수정 실패" });
            // next(error);
        }
    }
    /** 유저 삭제 (관리자) */
    async deleteUser(req, res, next) {
        try {
            const { userId } = req.params;
            await this._userService.deleteUser(userId);
            // console.log(userId);
            // console.log("회원 삭제 완료")
            // res.status(204).send();
            res.status(200).json({
                message: "관리자 회원 삭제 성공"
            });
        }
        catch (error) {
            res.status(404).json({ message: "관리자 회원 삭제 실패" });
            // next(error);
        }
    }
}
exports.default = AdminUserController;
//# sourceMappingURL=adminUsers.controller.js.map