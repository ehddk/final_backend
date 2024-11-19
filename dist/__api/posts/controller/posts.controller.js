"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// [유저]
// 글 목록 조회 - getPosts
// 글 상세 조회 - getPostDetail
class PostsController {
    // 컨트롤러에 DI 구조 잡아주는겁니다.
    _postsService;
    constructor(_postsService) {
        this._postsService = _postsService;
        this.getPosts = this.getPosts.bind(this);
        this.getPostDetail = this.getPostDetail.bind(this);
        this.createPost = this.createPost.bind(this);
        this.updatePost = this.updatePost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }
    /** 게시글 목록 조회 */
    async getPosts(req, res, next) {
        const { limit, offset } = req.query;
        try {
            const posts = await this._postsService.getPosts({
                limit,
                offset,
            });
            res.send(posts);
        }
        catch (error) {
            next(error);
        }
    }
    /** 게시글 상세 조회 */
    async getPostDetail(req, res, next) {
        const { postId } = req.params;
        try {
            const post = await this._postsService.getPostDetail(postId);
            res.send(post);
        }
        catch (error) {
            next(error);
        }
    }
    /** 게시글 작성 */
    async createPost(req, res, next) {
        const { title, content } = req.body;
        try {
            const post = await this._postsService.createPost(req.user.userId, {
                title,
                content,
            });
            res.send(post);
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    }
    /** 게시글 수정 */
    async updatePost(req, res, next) {
        const { postId } = req.params;
        const { title, content } = req.body;
        try {
            const post = await this._postsService.updatePost(postId, {
                title,
                content,
            });
            res.send(post);
        }
        catch (error) {
            next(error);
        }
    }
    /** 게시글 삭제 */
    async deletePost(req, res, next) {
        const { postId } = req.params;
        try {
            await this._postsService.deletePost(postId);
            res.send("삭제 성공");
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = PostsController;
//# sourceMappingURL=posts.controller.js.map