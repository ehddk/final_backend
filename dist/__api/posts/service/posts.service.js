"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsServiceImpl = void 0;
const postResponse_dto_1 = require("@/api/posts/dto/postResponse.dto");
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
class PostsServiceImpl {
    _postRepository;
    _userRepository;
    constructor(postRepository, userRepository) {
        this._postRepository = postRepository;
        this._userRepository = userRepository;
    }
    async createPost(userId, post) {
        // 게시글 생성
        // 1. 작성자를 찾는다.
        // 2. 작성자가 없으면 에러를 던져준다.
        // 3. 작성자가 있으면, 게시글을 생성한다.
        // 3-1. 게시글을 생성할때 author에 찾은 작성자를 넣어준다.
        // 작성자 찾기
        const author = await this._userRepository.findById(userId);
        if (!author) {
            throw new http_exception_1.default(404, "작성자를 찾을 수 없습니다.");
        }
        const newPost = await this._postRepository.save({
            ...post,
            author,
        });
        const newPosts = author.posts?.concat(newPost);
        await this._userRepository.update(author.id, {
            posts: newPosts,
        });
        return new postResponse_dto_1.PostResponseDTO(newPost);
    }
    async getPosts({ limit, offset, }) {
        const posts = await this._postRepository.findAllWithPagination({
            limit,
            offset,
        });
        return {
            totalCount: posts.totalCount,
            prev: posts.prev,
            results: posts.results.map((post) => new postResponse_dto_1.PostResponseDTO(post)),
            next: posts.next,
        };
    }
    async getPostDetail(postId) {
        const post = await this._postRepository.findById(postId);
        if (!post) {
            throw new http_exception_1.default(404, "게시글을 찾을 수 없습니다.");
        }
        return new postResponse_dto_1.PostResponseDTO(post);
    }
    async updatePost(postId, updatedPost) {
        await this._postRepository.update(postId, updatedPost);
        return;
    }
    async deletePost(postId) {
        await this._postRepository.delete(postId);
    }
}
exports.PostsServiceImpl = PostsServiceImpl;
//# sourceMappingURL=posts.service.js.map