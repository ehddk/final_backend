"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routers_1 = require("@/routers");
const path_util_1 = require("@/utils/path.util");
const express_1 = __importDefault(require("express"));
const adminAuth_view_controller_1 = __importDefault(require("../controller/adminAuth.view.controller"));
const auth_service_1 = require("../service/auth.service");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const adminAuthViewRouter = express_1.default.Router();
const ADMIN_AUTH_VIEW_ROUTES = {
    /** 관리자 페이지 로그인 */
    SIGN_IN: `/admin/auth/login`,
};
const adminAuthViewController = new adminAuth_view_controller_1.default(new auth_service_1.AuthServiceImpl(new mongooseUser_repository_1.MongooseUserRepository()));
adminAuthViewRouter.get((0, path_util_1.extractPath)(ADMIN_AUTH_VIEW_ROUTES.SIGN_IN, routers_1.ROUTES_INDEX.ADMIN_AUTH_VIEW), adminAuthViewController.loginPage);
adminAuthViewRouter.post((0, path_util_1.extractPath)(ADMIN_AUTH_VIEW_ROUTES.SIGN_IN, routers_1.ROUTES_INDEX.ADMIN_AUTH_VIEW), adminAuthViewController.login);
exports.default = adminAuthViewRouter;
//# sourceMappingURL=adminAuth.view.router.js.map