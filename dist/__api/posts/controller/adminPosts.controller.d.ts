import { NextFunction, Request, Response } from "express";
import { PostsService } from "@/api/posts/service/posts.service.type";
export default class AdminPostsController {
    private readonly _postsService;
    constructor(_postsService: PostsService);
    createDummy(req: Request, res: Response, next: NextFunction): Promise<void>;
    getPosts(req: Request<adminGetPostsRequest["path"], adminGetPostsResponse, adminGetPostsRequest["body"], adminGetPostsRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    getPostDetail(req: Request<adminGetPostDetailRequest["path"], adminGetPostDetailResponse, adminGetPostDetailRequest["body"], adminGetPostDetailRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    createPost(req: Request<adminCreatePostRequest["path"], adminCreatePostResponse, adminCreatePostRequest["body"], adminCreatePostRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    updatePost(req: Request<adminUpdatePostRequest["path"], adminUpdatePostResponse, adminUpdatePostRequest["body"], adminUpdatePostRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    deletePost(req: Request<adminDeletePostRequest["path"], adminDeletePostResponse, adminDeletePostRequest["body"], adminDeletePostRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
