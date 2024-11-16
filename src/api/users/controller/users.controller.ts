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
      });
      res.status(200).json({
        message: "회원 생성 성공",
        data: user,
      });
    } catch (error) {
      // console.log(error);
      // next(error);
      res.status(409).json({ message: "회원 생성 실패" });
    }
  }

  /** 내 정보 조회 (사용자페이지) */
  async getMyInfo(
    req: Request<
      getMyInfoRequest["path"],
      getMyInfoResponse,
      getMyInfoRequest["body"],
      getMyInfoRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.params;

      const user = await this._userService.getUser(userId);

      // console.log("회원 상세 조회 완료")

      // res.status(200).send(user);
      res.status(200).json({
        message: "회원 조회 성공",
        data: user,
      });
    } catch (error) {
      // next(error);
      res.status(404).json({ message: "회원 조회 실패" });
    }
  }

  /** 내 정보 수정 (사용자 페이지) */
  async updateMyInfo(
    req: Request<
      updateMyInfoRequest["path"],
      updateMyInfoResponse,
      updateMyInfoRequest["body"],
      updateMyInfoRequest["params"]
    >,
      res: Response,
      next: NextFunction) {
    try {
      // const { userId } = req.user;

      // const user = await this._userService.updateUser(userId, {
      //   profile: {
      //     ...req.body.profile,
      //   },
      // });

      // console.log(req.user);
      // console.log("회원 수정 완료");

      // res.send(user);
      const user = await this._userService.updateUser(req.params.userId, req.body);

      // console.log("회원 수정 완료")

      // res.status(200).send(user);
      res.status(200).json({
        message: "회원 수정 성공",
        data: user,
      });
    } catch (error) {
      // next(error);
      res.status(409).json({ message: "회원 수정 실패" });
    }
  }
}
