"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routers_1 = require("@/routers");
const path_util_1 = require("@/utils/path.util");
const express_1 = __importDefault(require("express"));
const posts_view_controller_1 = __importDefault(require("../controller/posts.view.controller"));
const mongoosePost_repository_1 = require("../repository/mongoosePost.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const posts_service_1 = require("../service/posts.service");
const authCookie_middleware_1 = require("@/api/common/middlewares/authCookie.middleware");
const postViewRouter = express_1.default.Router();
const POST_VIEW_ROUTES = {
    /** 게시글 목록 */
    POST_LIST: "/posts",
    /** 게시글 상세 */
    POST_DETAIL: "/posts/:postId",
    /** 게시글 작성 */
    POST_WRITE: "/posts/write",
    /** 게시글 수정 */
    POST_EDIT: "/posts/:postId/edit",
};
const postsViewController = new posts_view_controller_1.default(new posts_service_1.PostsServiceImpl(new mongoosePost_repository_1.MongoosePostRepository(), new mongooseUser_repository_1.MongooseUserRepository()));
postViewRouter.get((0, path_util_1.extractPath)(POST_VIEW_ROUTES.POST_LIST, routers_1.ROUTES_INDEX.POST_VIEW), postsViewController.postListPage);
postViewRouter.get((0, path_util_1.extractPath)(POST_VIEW_ROUTES.POST_WRITE, routers_1.ROUTES_INDEX.POST_VIEW), (0, authCookie_middleware_1.authCookieViewMiddleware)(true), postsViewController.postWritePage);
postViewRouter.get((0, path_util_1.extractPath)(POST_VIEW_ROUTES.POST_DETAIL, routers_1.ROUTES_INDEX.POST_VIEW), (0, authCookie_middleware_1.authCookieViewMiddleware)(false), postsViewController.postDetailPage);
postViewRouter.get((0, path_util_1.extractPath)(POST_VIEW_ROUTES.POST_EDIT, routers_1.ROUTES_INDEX.POST_VIEW), (0, authCookie_middleware_1.authCookieViewMiddleware)(true), postsViewController.postEditPage);
exports.default = postViewRouter;
//# sourceMappingURL=posts.view.router.js.map