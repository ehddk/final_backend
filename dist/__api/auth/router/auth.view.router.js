"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routers_1 = require("@/routers");
const path_util_1 = require("@/utils/path.util");
const express_1 = __importDefault(require("express"));
const auth_view_controller_1 = __importDefault(require("../controller/auth.view.controller"));
const auth_service_1 = require("../service/auth.service");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const users_service_1 = require("@/api/users/service/users.service");
const mongooseProfile_repository_1 = require("@/api/users/repository/profile/mongooseProfile.repository");
const authViewRouter = express_1.default.Router();
const authViewController = new auth_view_controller_1.default(new auth_service_1.AuthServiceImpl(new mongooseUser_repository_1.MongooseUserRepository()), new users_service_1.UsersServiceImpl(new mongooseUser_repository_1.MongooseUserRepository(), new mongooseProfile_repository_1.MongooseProfileRepository()));
const AUTH_VIEW_ROUTES = {
    /** 로그인 */
    SIGN_IN: `/auth/login`,
    /** 회원가입 */
    SIGN_UP: `/auth/signup`,
};
authViewRouter.get((0, path_util_1.extractPath)(AUTH_VIEW_ROUTES.SIGN_IN, routers_1.ROUTES_INDEX.AUTH_VIEW), authViewController.loginPage);
authViewRouter.post((0, path_util_1.extractPath)(AUTH_VIEW_ROUTES.SIGN_IN, routers_1.ROUTES_INDEX.AUTH_VIEW), authViewController.login);
authViewRouter.get((0, path_util_1.extractPath)(AUTH_VIEW_ROUTES.SIGN_UP, routers_1.ROUTES_INDEX.AUTH_VIEW), authViewController.signUpPage);
exports.default = authViewRouter;
//# sourceMappingURL=auth.view.router.js.map