import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
import AdminPostsViewController from "../controller/adminPosts.view.controller";
import { PostsServiceImpl } from "../service/posts.service";
import { MongoosePostRepository } from "../repository/mongoosePost.repository";
import { MongooseUserRepository } from "@/api/users/repository/user/mongooseUser.repository";

const adminPostViewRouter = express.Router();

const ADMIN_POST_VIEW_ROUTES = {
  /** 게시글 목록 */
  POST_LIST: "/admin/posts",
  /** 게시글 상세 / 수정 */
  POST_DETAIL: "/admin/posts/:postId",
} as const;

const adminPostViewController = new AdminPostsViewController(
  new PostsServiceImpl(
    new MongoosePostRepository(),
    new MongooseUserRepository()
  )
);

adminPostViewRouter.get(
  extractPath(ADMIN_POST_VIEW_ROUTES.POST_LIST, ROUTES_INDEX.ADMIN_POST_VIEW),
  adminPostViewController.postListPage
);

adminPostViewRouter.get(
  extractPath(ADMIN_POST_VIEW_ROUTES.POST_DETAIL, ROUTES_INDEX.ADMIN_POST_VIEW),
  adminPostViewController.postDetailPage
);

export default adminPostViewRouter;
