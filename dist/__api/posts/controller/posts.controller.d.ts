import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";
export default class PostsController {
    private readonly _postsService;
    constructor(_postsService: PostsService);
    /** 게시글 목록 조회 */
    getPosts(req: Request<getPostsRequest["path"], getPostsResponse, getPostsRequest["body"], getPostsRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 상세 조회 */
    getPostDetail(req: Request<getPostDetailRequest["path"], getPostDetailResponse, getPostDetailRequest["body"], getPostDetailRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 작성 */
    createPost(req: Request<createPostRequest["path"], createPostResponse, createPostRequest["body"], createPostRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 수정 */
    updatePost(req: Request<updatePostRequest["path"], updatePostResponse, updatePostRequest["body"], updatePostRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 게시글 삭제 */
    deletePost(req: Request<deletePostRequest["path"], deletePostResponse, deletePostRequest["body"], deletePostRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
