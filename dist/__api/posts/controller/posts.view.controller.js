"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PostsViewController {
    _postsService;
    constructor(_postsService) {
        this._postsService = _postsService;
        this.postListPage = this.postListPage.bind(this);
        this.postDetailPage = this.postDetailPage.bind(this);
        this.postWritePage = this.postWritePage.bind(this);
        this.postEditPage = this.postEditPage.bind(this);
    }
    /** 게시글 목록 페이지 */
    async postListPage(req, res, next) {
        const offset = Number(req.query.offset) || 0;
        const limit = Number(req.query.limit) || 5;
        const posts = await this._postsService.getPosts({
            offset,
            limit,
        });
        res.render("client/posts/postList", {
            posts: posts.results,
            count: posts.totalCount,
            prev: posts.prev,
            next: posts.next,
            limit,
            offset,
        });
    }
    /** 게시글 상세 페이지 */
    async postDetailPage(req, res, next) {
        const post = await this._postsService.getPostDetail(req.params.postId);
        const authorId = post?.author.id;
        res.render("client/posts/postDetail", {
            post,
            isMe: authorId === req.user.userId,
        });
    }
    /** 게시글 작성 페이지 */
    async postWritePage(req, res, next) {
        res.render("client/posts/postWrite");
    }
    /** 게시글 수정 페이지 */
    async postEditPage(req, res, next) {
        const { postId } = req.params;
        const userId = req.user.userId;
        const post = await this._postsService.getPostDetail(postId);
        const isMe = userId === post?.author.id;
        if (!isMe) {
            res.send(`<script>
          alert("권한이 없습니다."); location.href="/posts/${postId}";
        </script>`);
        }
        res.render("client/posts/postEdit", { post });
    }
}
exports.default = PostsViewController;
//# sourceMappingURL=posts.view.controller.js.map