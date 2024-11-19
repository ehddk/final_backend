"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_controller_1 = __importDefault(require("@/api/posts/controller/posts.controller"));
const posts_service_1 = require("@/api/posts/service/posts.service");
const post_validation_1 = require("@/api/posts/dto/validations/post.validation");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const mongoosePost_repository_1 = require("@/api/posts/repository/mongoosePost.repository");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const authCookie_middleware_1 = require("@/api/common/middlewares/authCookie.middleware");
const postRouter = express_1.default.Router();
const POST_ROUTES = {
    /** 글 목록 조회 */
    GET_POSTS: `/api/posts`,
    /** 글 싱세 조회 */
    GET_POST: `/api/posts/:postId`,
    /** 글 생성 */
    CREATE_POST: `/api/posts`,
    /** 글 수정 */
    UPDATE_POST: `/api/posts/:postId`,
    /** 글 삭제 */
    DELETE_POST: `/api/posts/:postId`,
};
const postsController = new posts_controller_1.default(new posts_service_1.PostsServiceImpl(new mongoosePost_repository_1.MongoosePostRepository(), new mongooseUser_repository_1.MongooseUserRepository()));
postRouter.get((0, path_util_1.extractPath)(POST_ROUTES.GET_POSTS, routers_1.ROUTES_INDEX.POSTS_API), (0, validation_middleware_1.validate)(post_validation_1.getPostsValidator), postsController.getPosts);
postRouter.get((0, path_util_1.extractPath)(POST_ROUTES.GET_POST, routers_1.ROUTES_INDEX.POSTS_API), (0, validation_middleware_1.validate)(post_validation_1.getPostDetailValidator), authCookie_middleware_1.authCookieViewMiddleware, postsController.getPostDetail);
postRouter.post((0, path_util_1.extractPath)(POST_ROUTES.CREATE_POST, routers_1.ROUTES_INDEX.POSTS_API), authUser_middleware_1.authUserMiddleware, postsController.createPost);
postRouter.put((0, path_util_1.extractPath)(POST_ROUTES.UPDATE_POST, routers_1.ROUTES_INDEX.POSTS_API), authUser_middleware_1.authUserMiddleware, postsController.updatePost);
postRouter.delete((0, path_util_1.extractPath)(POST_ROUTES.DELETE_POST, routers_1.ROUTES_INDEX.POSTS_API), authUser_middleware_1.authUserMiddleware, postsController.deletePost);
exports.default = postRouter;
//# sourceMappingURL=posts.router.js.map