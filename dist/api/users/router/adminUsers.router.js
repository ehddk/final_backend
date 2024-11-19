"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminUsers_controller_1 = __importDefault(require("@/api/users/controller/adminUsers.controller"));
const express_1 = __importDefault(require("express"));
const users_service_1 = require("@/api/users/service/users.service");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const users_validation_1 = require("@/api/users/dto/validations/users.validation");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongooseProfile_repository_1 = require("@/api/users/repository/profile/mongooseProfile.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const mongooseCart_repository_1 = require("@/api/carts/repository/mongooseCart.repository");
const adminUsersRouter = express_1.default.Router();
const adminUserController = new adminUsers_controller_1.default(new users_service_1.UsersServiceImpl(new mongooseUser_repository_1.MongooseUserRepository(), new mongooseProfile_repository_1.MongooseProfileRepository(), new mongooseCart_repository_1.MongooseCartRepository()));
/** 관리자 유저 관련 API 경로 객체  */
const ADMIN_USER_ROUTES = {
    /** 유저 목록 조회 (관리자) */
    GET_USERS: `/admin-api/users`,
    /** 유저 상세 조회 (관리자) */
    GET_USER: `/admin-api/users/:userId`,
    /** 유저 생성 (관리자) */
    CREATE_USER: `/admin-api/users`,
    /** 유저 수정 (관리자) */
    UPDATE_USER: `/admin-api/users/:userId`,
    /** 유저 삭제 (관리자) */
    DELETE_USER: `/admin-api/users/:userId`,
};
adminUsersRouter.get((0, path_util_1.extractPath)(ADMIN_USER_ROUTES.GET_USERS, routers_1.ROUTES_INDEX.ADMIN_USERS_API), adminUserController.getUsers);
adminUsersRouter.get((0, path_util_1.extractPath)(ADMIN_USER_ROUTES.GET_USER, routers_1.ROUTES_INDEX.ADMIN_USERS_API), 
// authRoleMiddleware(["user", "admin"]),
adminUserController.getUser);
adminUsersRouter.post((0, path_util_1.extractPath)(ADMIN_USER_ROUTES.CREATE_USER, routers_1.ROUTES_INDEX.ADMIN_USERS_API), (0, validation_middleware_1.validate)(users_validation_1.createUserValidator), adminUserController.createUser);
adminUsersRouter.put((0, path_util_1.extractPath)(ADMIN_USER_ROUTES.UPDATE_USER, routers_1.ROUTES_INDEX.ADMIN_USERS_API), (0, validation_middleware_1.validate)(users_validation_1.updateUserValidator), adminUserController.updateUser);
adminUsersRouter.delete((0, path_util_1.extractPath)(ADMIN_USER_ROUTES.DELETE_USER, routers_1.ROUTES_INDEX.ADMIN_USERS_API), adminUserController.deleteUser);
exports.default = adminUsersRouter;
//# sourceMappingURL=adminUsers.router.js.map