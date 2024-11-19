"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminPostsViewController {
    _postsService;
    constructor(_postsService) {
        this._postsService = _postsService;
        this.postListPage = this.postListPage.bind(this);
        this.postDetailPage = this.postDetailPage.bind(this);
    }
    /** 게시글 목록 페이지 */
    async postListPage(req, res, next) {
        const posts = await this._postsService.getPosts({});
        res.render("admin/posts/postList", {
            posts,
        });
    }
    /** 게시글 상세 페이지 */
    async postDetailPage(req, res, next) {
        try {
            const { postId } = req.params;
            const post = await this._postsService.getPostDetail(postId);
            res.render("admin/posts/postDetail", {
                post,
            });
        }
        catch (error) {
            res.send(`<script>alert('${error.message}');
          location.href='/admin/posts';</script>`);
        }
    }
}
exports.default = AdminPostsViewController;
//# sourceMappingURL=adminPosts.view.controller.js.map