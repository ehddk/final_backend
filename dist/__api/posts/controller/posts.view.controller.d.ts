import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";
export default class PostsViewController {
    private readonly _postsService;
    constructor(_postsService: PostsService);
    /** 게시글 목록 페이지 */
    postListPage(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 상세 페이지 */
    postDetailPage(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 작성 페이지 */
    postWritePage(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 수정 페이지 */
    postEditPage(req: Request, res: Response, next: NextFunction): Promise<void>;
}
