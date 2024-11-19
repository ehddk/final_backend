import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";
export default class AdminPostsViewController {
    private readonly _postsService;
    constructor(_postsService: PostsService);
    /** 게시글 목록 페이지 */
    postListPage(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 상세 페이지 */
    postDetailPage(req: Request, res: Response, next: NextFunction): Promise<void>;
}
