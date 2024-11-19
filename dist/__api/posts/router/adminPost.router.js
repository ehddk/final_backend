"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminPosts_controller_1 = __importDefault(require("@/api/posts/controller/adminPosts.controller"));
const posts_service_1 = require("@/api/posts/service/posts.service");
const validation_middleware_1 = require("@/api/common/middlewares/validation.middleware");
const adminPost_validation_1 = require("@/api/posts/dto/validations/adminPost.validation");
const mongooseUser_repository_1 = require("@/api/users/repository/user/mongooseUser.repository");
const mongoosePost_repository_1 = require("@/api/posts/repository/mongoosePost.repository");
const path_util_1 = require("@/utils/path.util");
const routers_1 = require("@/routers");
const authUser_middleware_1 = require("@/api/common/middlewares/authUser.middleware");
const adminPostRouter = express_1.default.Router();
/*관리자 게판 관련 API 객체*/
const ADMIN_POST_ROUTES = {
    /**글 목록 조회 (관리자) */
    GET_POSTS: `/admin-api/posts`,
    /**글 상세 조회 (관리자) */
    GET_POST: `/admin-api/posts/:postId`,
    /**글 생성 (관리자)  */
    CREATE_POST: `/admin-api/posts`,
    /**글 수정 (관리자) */
    UPDATE_POST: `/admin-api/posts/:postId`,
    /**글 삭제 (관리자) */
    DELETE_POST: `/admin-api/posts/:postId`,
    /** 더미데이터 생성 */
    CREATE_DUMMY: `/admin-api/posts/dummy`,
};
const adminPostsController = new adminPosts_controller_1.default(new posts_service_1.PostsServiceImpl(new mongoosePost_repository_1.MongoosePostRepository(), new mongooseUser_repository_1.MongooseUserRepository()));
adminPostRouter.get((0, path_util_1.extractPath)(ADMIN_POST_ROUTES.GET_POSTS, routers_1.ROUTES_INDEX.ADMIN_POSTS_API), (0, validation_middleware_1.validate)(adminPost_validation_1.adminGetPostsValidator), adminPostsController.getPosts);
adminPostRouter.get((0, path_util_1.extractPath)(ADMIN_POST_ROUTES.GET_POST, routers_1.ROUTES_INDEX.ADMIN_POSTS_API), (0, validation_middleware_1.validate)(adminPost_validation_1.adminGetPostDetailValidator), authUser_middleware_1.authUserMiddleware, adminPostsController.getPostDetail);
adminPostRouter.post((0, path_util_1.extractPath)(ADMIN_POST_ROUTES.CREATE_DUMMY, routers_1.ROUTES_INDEX.ADMIN_POSTS_API), adminPostsController.createDummy);
adminPostRouter.post((0, path_util_1.extractPath)(ADMIN_POST_ROUTES.CREATE_POST, routers_1.ROUTES_INDEX.ADMIN_POSTS_API), (0, validation_middleware_1.validate)(adminPost_validation_1.adminCreatePostValidator), authUser_middleware_1.authUserMiddleware, adminPostsController.createPost);
adminPostRouter.put((0, path_util_1.extractPath)(ADMIN_POST_ROUTES.UPDATE_POST, routers_1.ROUTES_INDEX.ADMIN_POSTS_API), (0, validation_middleware_1.validate)(adminPost_validation_1.adminUpdatePostValidator), adminPostsController.updatePost);
adminPostRouter.delete((0, path_util_1.extractPath)(ADMIN_POST_ROUTES.DELETE_POST, routers_1.ROUTES_INDEX.ADMIN_POSTS_API), (0, validation_middleware_1.validate)(adminPost_validation_1.adminDeletePostValidator), adminPostsController.deletePost);
exports.default = adminPostRouter;
//# sourceMappingURL=adminPost.router.js.map