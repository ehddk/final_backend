"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("@faker-js/faker");
// [관리자]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
// 글 생성 - createPost
// 글 수정 - updatePost
// 글 삭제 - deletePost
class AdminPostsController {
    // 컨트롤러에 DI 구조 잡아주는겁니다.
    _postsService;
    constructor(_postsService) {
        this._postsService = _postsService;
        this.getPosts = this.getPosts.bind(this);
        this.getPostDetail = this.getPostDetail.bind(this);
        this.createPost = this.createPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.createDummy = this.createDummy.bind(this);
    }
    async createDummy(req, res, next) {
        try {
            const list = new Array(parseInt(req.query.count?.toString() ?? "100"))
                .fill(0)
                .map((_) => {
                return {
                    title: faker_1.faker.lorem.words({ min: 3, max: 5 }),
                    content: faker_1.faker.lorem.sentence({ min: 10, max: 100 }),
                };
            });
            for (const post of list) {
                await this._postsService.createPost("66dff18ed9c4bff59f6f72f1", {
                    ...post,
                });
            }
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
    async getPosts(req, res, next) {
        try {
            const posts = await this._postsService.getPosts({
                limit: req.query.limit,
                offset: req.query.offset,
            });
            res.send(posts);
        }
        catch (error) {
            next(error);
        }
    }
    async getPostDetail(req, res, next) {
        try {
            const postDetail = await this._postsService.getPostDetail(req.params.postId);
            res.send(postDetail);
        }
        catch (error) {
            next(error);
        }
    }
    async createPost(req, res, next) {
        const { ...rest } = req.body;
        // case 2
        const body = {
            ...req.body,
            userId: req.user.userId,
        };
        try {
            // case 1
            const createdPost = await this._postsService.createPost(req.user.userId, {
                title: rest.title,
                content: rest.content,
            });
            res.send(createdPost);
        }
        catch (error) {
            next(error);
        }
    }
    async updatePost(req, res, next) {
        const { postId } = req.params;
        try {
            await this._postsService.updatePost(postId, req.body);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
    async deletePost(req, res, next) {
        const { postId } = req.params;
        try {
            await this._postsService.deletePost(postId);
            res.status(204).json();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminPostsController;
//# sourceMappingURL=adminPosts.controller.js.map