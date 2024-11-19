"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = __importDefault(require("@/api/auth/controller/auth.controller"));
const auth_service_1 = require("@/api/auth/service/auth.service");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authRouter = express_1.default.Router();
const AUTH_ROUTES = {
    /** 로그인 */
    SIGN_IN: `/api/auth/login`,
};
const authController = new auth_controller_1.default(new auth_service_1.AuthServiceImpl(new mongooseUser_repository_1.MongooseUserRepository()));
authRouter.post((0, path_util_1.extractPath)(AUTH_ROUTES.SIGN_IN, routers_1.ROUTES_INDEX.AUTH_API), authController.login);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map