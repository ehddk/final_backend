import express from "express";
import PostsController from "@/api/posts/controller/posts.controller";
import { PostsServiceImpl } from "@/api/posts/service/posts.service";
import {
  getPostDetailValidator,
  getPostsValidator,
} from "@/api/posts/dto/validations/post.validation";
import { validate } from "@/api/common/middlewares/validation.middleware";
import { MongoosePostRepository } from "@/api/posts/repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { extractPath } from "@/utils/path.util";
import { ROUTES_INDEX } from "@/routers";
import { authUserMiddleware } from "@/api/common/middlewares/authUser.middleware";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";
const postRouter = express.Router();

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
} as const;

const postsController = new PostsController(
  new PostsServiceImpl(
    new MongoosePostRepository(),
    new MongooseUserRepository()
  )
);

postRouter.get(
  extractPath(POST_ROUTES.GET_POSTS, ROUTES_INDEX.POSTS_API),
  validate(getPostsValidator),
  postsController.getPosts
);
postRouter.get(
  extractPath(POST_ROUTES.GET_POST, ROUTES_INDEX.POSTS_API),
  validate(getPostDetailValidator),
  authCookieViewMiddleware,
  postsController.getPostDetail
);
postRouter.post(
  extractPath(POST_ROUTES.CREATE_POST, ROUTES_INDEX.POSTS_API),
  authUserMiddleware,
  postsController.createPost
);

postRouter.put(
  extractPath(POST_ROUTES.UPDATE_POST, ROUTES_INDEX.POSTS_API),
  authUserMiddleware,
  postsController.updatePost
);

postRouter.delete(
  extractPath(POST_ROUTES.DELETE_POST, ROUTES_INDEX.POSTS_API),
  authUserMiddleware,
  postsController.deletePost
);

export default postRouter;
