import express from "express";
import AdminPostsController from "@/api/posts/controller/adminPosts.controller";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import { validate } from "@/api/common/middlewares/validation.middleware";
import {
  adminCreatePostValidator,
  adminDeletePostValidator,
  adminGetPostDetailValidator,
  adminGetPostsValidator,
  adminUpdatePostValidator,
} from "@/api/posts/dto/validations/adminPost.validation";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";

const adminPostRouter = express.Router();

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
} as const;

const adminPostsController = new AdminPostsController(
  new PostsServiceImpl(
    new MongoosePostRepository(),
    new MongooseUserRepository()
  )
);

adminPostRouter.get(
  extractPath(ADMIN_POST_ROUTES.GET_POSTS, ROUTES_INDEX.ADMIN_POSTS_API),
  validate(adminGetPostsValidator),
  adminPostsController.getPosts
);
adminPostRouter.get(
  extractPath(ADMIN_POST_ROUTES.GET_POST, ROUTES_INDEX.ADMIN_POSTS_API),
  validate(adminGetPostDetailValidator),
  authUserMiddleware,
  adminPostsController.getPostDetail
);

adminPostRouter.post(
  extractPath(ADMIN_POST_ROUTES.CREATE_DUMMY, ROUTES_INDEX.ADMIN_POSTS_API),
  adminPostsController.createDummy
);
adminPostRouter.post(
  extractPath(ADMIN_POST_ROUTES.CREATE_POST, ROUTES_INDEX.ADMIN_POSTS_API),
  validate(adminCreatePostValidator),
  authUserMiddleware,
  adminPostsController.createPost
);
adminPostRouter.put(
  extractPath(ADMIN_POST_ROUTES.UPDATE_POST, ROUTES_INDEX.ADMIN_POSTS_API),
  validate(adminUpdatePostValidator),
  adminPostsController.updatePost
);
adminPostRouter.delete(
  extractPath(ADMIN_POST_ROUTES.DELETE_POST, ROUTES_INDEX.ADMIN_POSTS_API),
  validate(adminDeletePostValidator),
  adminPostsController.deletePost
);

export default adminPostRouter;
