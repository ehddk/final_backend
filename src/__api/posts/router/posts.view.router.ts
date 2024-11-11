import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import PostsViewController from "../controller/posts.view.controller";
import { MongoosePostRepository } from "../repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";
import { PostsServiceImpl } from "../service/posts.service";
import { authCookieViewMiddleware } from "@/api/common/middlewares/authCookie.middleware";

const postViewRouter = express.Router();

const POST_VIEW_ROUTES = {
  /** 게시글 목록 */
  POST_LIST: "/posts",
  /** 게시글 상세 */
  POST_DETAIL: "/posts/:postId",
  /** 게시글 작성 */
  POST_WRITE: "/posts/write",
  /** 게시글 수정 */
  POST_EDIT: "/posts/:postId/edit",
} as const;

const postsViewController = new PostsViewController(
  new PostsServiceImpl(
    new MongoosePostRepository(),
    new MongooseUserRepository()
  )
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_LIST, ROUTES_INDEX.POST_VIEW),
  postsViewController.postListPage
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_WRITE, ROUTES_INDEX.POST_VIEW),
  authCookieViewMiddleware(true),
  postsViewController.postWritePage
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_DETAIL, ROUTES_INDEX.POST_VIEW),
  authCookieViewMiddleware(false),
  postsViewController.postDetailPage
);

postViewRouter.get(
  extractPath(POST_VIEW_ROUTES.POST_EDIT, ROUTES_INDEX.POST_VIEW),
  authCookieViewMiddleware(true),
  postsViewController.postEditPage
);

export default postViewRouter;
