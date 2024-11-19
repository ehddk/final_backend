"use strict";
// Router -> Controller -> Service -> Repository
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = __importDefault(require("@/api/users/controller/users.controller"));
const express_1 = __importDefault(require("express"));
const users_service_1 = require("@/api/users/service/users.service");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongooseProfile_repository_1 = require("@/api/users/repository/profile/mongooseProfile.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const authRole_middleware_1 = require("@/api/common/middlewares/authRole.middleware");
const mongooseCart_repository_1 = require("@/api/carts/repository/mongooseCart.repository");
const userRouter = express_1.default.Router();
const usersController = new users_controller_1.default(new users_service_1.UsersServiceImpl(new mongooseUser_repository_1.MongooseUserRepository(), new mongooseProfile_repository_1.MongooseProfileRepository(), new mongooseCart_repository_1.MongooseCartRepository()));
const USER_ROUTES = {
    /** 회원가입 */
    SIGN_UP: `/api/users`,
    /** 내 정보 조회 */
    GET_MY_INFO: `/api/users/:userId`,
    /** 내 정보 수정 */
    UPDATE_MY_INFO: `/api/users/:userId`,
    /**로그아웃 */
    LOGOUT: `/api/users/logout`
};
userRouter.post((0, path_util_1.extractPath)(USER_ROUTES.SIGN_UP, routers_1.ROUTES_INDEX.USERS_API), usersController.signUp);
userRouter.get((0, path_util_1.extractPath)(USER_ROUTES.GET_MY_INFO, routers_1.ROUTES_INDEX.USERS_API), (0, authRole_middleware_1.authRoleMiddleware)(["user", "admin"]), authUser_middleware_1.authUserMiddleware, usersController.getMyInfo);
userRouter.put((0, path_util_1.extractPath)(USER_ROUTES.UPDATE_MY_INFO, routers_1.ROUTES_INDEX.USERS_API), (0, authRole_middleware_1.authRoleMiddleware)(["user", "admin"]), authUser_middleware_1.authUserMiddleware, usersController.updateMyInfo);
userRouter.post((0, path_util_1.extractPath)(USER_ROUTES.LOGOUT, routers_1.ROUTES_INDEX.USERS_API), usersController.logout);
exports.default = userRouter;
//# sourceMappingURL=users.router.js.map