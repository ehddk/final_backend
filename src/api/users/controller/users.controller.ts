// [유저]
// 회원가입 - signUp
// 내 정보 조회 - getMyInfo

import { NextFunction, Request, Response } from "express";
import { UserService } from "@/api/users/service/users.service.type";
import { CryptoService } from "@/api/common/services/crypto.service";

export default class UsersController {
  constructor(private _userService: UserService) {
    this.signUp = this.signUp.bind(this);
    this.getMyInfo = this.getMyInfo.bind(this);
    this.updateMyInfo = this.updateMyInfo.bind(this);
  }

  /** 회원가입 (사용자페이지) */
  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { password } = req.body;

      const { hashedPassword, salt } = CryptoService.encryptPassword(password);

      const user = await this._userService.createUser({
        loginId: req.body.loginId,
        password: hashedPassword,
        email: req.body.email,
        salt,        
        profile: {
          phoneNum: req.body.profile.phoneNum,
          firstName: req.body.profile.firstName,
        },
        cart: {
          orderItems: req.body.cart.orderItems,
        },
      });

      console.log(user)
      console.log("회원 생성 완료")

      res.send(user);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  /** 내 정보 조회 (사용자페이지) */
  async getMyInfo(req: Request, res: Response, next: NextFunction) {
    const user = await this._userService.getUser(req.user.userId);
    
    console.log(user)
    console.log("회원 상세 조회 완료")

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

      console.log(user)
      console.log("회원 수정 완료")

      res.send(user);
    } catch (error) {
      next(error);
    }
  }
}