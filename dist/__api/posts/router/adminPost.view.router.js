"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routers_1 = require("@/routers");
const path_util_1 = require("@/utils/path.util");
const express_1 = __importDefault(require("express"));
const adminPosts_view_controller_1 = __importDefault(require("../controller/adminPosts.view.controller"));
const posts_service_1 = require("../service/posts.service");
const mongoosePost_repository_1 = require("../repository/mongoosePost.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const adminPostViewRouter = express_1.default.Router();
const ADMIN_POST_VIEW_ROUTES = {
    /** 게시글 목록 */
    POST_LIST: "/admin/posts",
    /** 게시글 상세 / 수정 */
    POST_DETAIL: "/admin/posts/:postId",
};
const adminPostViewController = new adminPosts_view_controller_1.default(new posts_service_1.PostsServiceImpl(new mongoosePost_repository_1.MongoosePostRepository(), new mongooseUser_repository_1.MongooseUserRepository()));
adminPostViewRouter.get((0, path_util_1.extractPath)(ADMIN_POST_VIEW_ROUTES.POST_LIST, routers_1.ROUTES_INDEX.ADMIN_POST_VIEW), adminPostViewController.postListPage);
adminPostViewRouter.get((0, path_util_1.extractPath)(ADMIN_POST_VIEW_ROUTES.POST_DETAIL, routers_1.ROUTES_INDEX.ADMIN_POST_VIEW), adminPostViewController.postDetailPage);
exports.default = adminPostViewRouter;
//# sourceMappingURL=adminPost.view.router.js.map