// Router -> Controller -> Service -> Repository

import UsersController from "@/api/users/controller/users.controller";
import express from "express";
import { UsersServiceImpl } from "@/api/users/service/users.service";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongooseProfileRepository } from "@/api/users/repository/profile/mongooseProfile.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { authRoleMiddleware } from "@/api/common/middlewares/authRole.middleware";
import { MongooseCartRepository } from "@/api/carts/repository/mongooseCart.repository";

const userRouter = express.Router();

const usersController = new UsersController(
  new UsersServiceImpl(
    new MongooseUserRepository(),
    new MongooseProfileRepository(),
    new MongooseCartRepository()
  )
);

const USER_ROUTES = {
  /** 회원가입 */
  SIGN_UP: `/api/users`,
  /** 내 정보 조회 */
  GET_MY_INFO: `/api/users/:userId`,
  /** 내 정보 조회(loginId 기반) */
  CHECK_LOGINID: `/api/users/loginId`,
  /** 내 정보 조회(email 기반) */
  CHECK_EMAIL: `/api/users/email`,
  /** 내 정보 수정 */
  UPDATE_MY_INFO: `/api/users/:userId`,
  /**로그아웃 */
  LOGOUT : `/api/users/logout`
} as const;

userRouter.post(
  extractPath(USER_ROUTES.SIGN_UP, ROUTES_INDEX.USERS_API),
  usersController.signUp
);
userRouter.get(
  extractPath(USER_ROUTES.CHECK_LOGINID, ROUTES_INDEX.USERS_API),
  // authRoleMiddleware(["user", "admin"]),
  usersController.checkLoginId
);
userRouter.get(
  extractPath(USER_ROUTES.CHECK_EMAIL, ROUTES_INDEX.USERS_API),
  // authRoleMiddleware(["user", "admin"]),
  usersController.checkEmail
);
userRouter.get(
  extractPath(USER_ROUTES.GET_MY_INFO, ROUTES_INDEX.USERS_API),
  authRoleMiddleware(["user", "admin"]),
  authUserMiddleware,
  usersController.getMyInfo
);
userRouter.put(
  extractPath(USER_ROUTES.UPDATE_MY_INFO, ROUTES_INDEX.USERS_API),
  authRoleMiddleware(["user", "admin"]),
  authUserMiddleware,
  usersController.updateMyInfo
);

userRouter.post(
  extractPath(USER_ROUTES.LOGOUT,ROUTES_INDEX.USERS_API),
  usersController.logout
)

export default userRouter;
