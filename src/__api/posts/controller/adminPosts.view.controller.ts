import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";

export default class AdminPostsViewController {
  private readonly _postsService: PostsService;
  constructor(_postsService: PostsService) {
    this._postsService = _postsService;

    this.postListPage = this.postListPage.bind(this);
    this.postDetailPage = this.postDetailPage.bind(this);
  }

  /** 게시글 목록 페이지 */
  async postListPage(req: Request, res: Response, next: NextFunction) {
    const posts = await this._postsService.getPosts({});
    res.render("admin/posts/postList", {
      posts,
    });
  }

  /** 게시글 상세 페이지 */
  async postDetailPage(req: Request, res: Response, next: NextFunction) {
    try {
      const { postId } = req.params;
      const post = await this._postsService.getPostDetail(postId);
      res.render("admin/posts/postDetail", {
        post,
      });
    } catch (error: any) {
      res.send(`<script>alert('${error.message}');
          location.href='/admin/posts';</script>`);
    }
  }
}
