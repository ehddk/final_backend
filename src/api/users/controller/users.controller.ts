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
    this.checkLoginId = this.checkLoginId.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.updateMyInfo = this.updateMyInfo.bind(this);
    this.logout=this.logout.bind(this)
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

  /** 중복된 아이디 찾기 (사용자페이지) */
  async checkLoginId(req: Request, res: Response, next: NextFunction) {
    try {
      const { loginId } = req.query as { loginId: string };
      const exists = await this._userService.checkUserLoginId(loginId);
  
      res.status(200).json({
        message: exists ? "유저가 존재합니다." : "유저를 찾을 수 없습니다.",
        exists,
      });
    } catch (error) {
      next(error);
    }
  }

/** 중복된 이메일 찾기 (사용자페이지) */
async checkEmail(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.query as { email: string };
    const exists = await this._userService.checkUserEmail(email);

    res.status(200).json({
      message: exists ? "유저가 존재합니다." : "유저를 찾을 수 없습니다.",
      exists,
    });
  } catch (error) {
    next(error);
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
      
    const updateData = { ...req.body };

    if (updateData.password) {
      const { hashedPassword, salt } = CryptoService.encryptPassword(updateData.password);
      updateData.password = hashedPassword;
      updateData.salt = salt;
    }

    const user = await this._userService.updateUser(req.params.userId, updateData);

      res.status(200).json({
        message: "회원 수정 성공",
        data: user,
      });
    } catch (error) {
      res.status(409).json({ message: "회원 수정 실패" });
    }
  }

  /**로그아웃 */
  async logout(req:Request<
      logoutRequest["path"],
      logoutResponse,
      logoutRequest["params"],
      logoutRequest["body"]
      >,
      res:Response,
      next:NextFunction){
        try{
          res.clearCookie('accessToken',{path:'/'})
          res.status(200).send('로그아웃 성공')
         // res.redirect('/')
        }catch(error){
          next(error)
        }
      }
}
