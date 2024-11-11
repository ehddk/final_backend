// [유저]
// 회원가입 - signUp
// 내 정보 조회 - getMyInfo

import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/users/service/users.service.type";
import { CryptoService } from "@/api/common/services/crypto.service";

export default class UsersController {
  constructor(private _userService: UserService) {
    this.signUp = this.signUp.bind(this);
    this.getMyInfo = this.getMyInfo;
    this.updateMyInfo = this.updateMyInfo.bind(this);
  }

  /** 회원가입 (사용자페이지) */
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = req.body;

      const { hashedPassword, salt } = CryptoService.encryptPassword(password);

      const user = await this._userService.createUser({
        email: req.body.email,
        password: hashedPassword,
        salt,
        profile: {
          firstName: req.body.profile.firstName,
        },
      });

      res.send(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  /** 내 정보 조회 (사용자페이지) */
  async getMyInfo(req: Request, res: Response, next: NextFunction) {
    const user = await this._userService.getUser(req.user.userId);

    res.send(user);
  }

  /** 내 정보 수정 (사용자 페이지) */
  async updateMyInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user;

      const user = await this._userService.updateUser(userId, {
        profile: {
          ...req.body.profile,
        },
      });

      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}
