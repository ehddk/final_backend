"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryPostRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const post_model_1 = require("@/api/posts/model/post.model");
class MemoryPostRepository {
    static index = 0;
    static store = new Map();
    async findAllWithPagination({ offset, limit, }) {
        const values = Array.from(MemoryPostRepository.store.values());
        return {
            totalCount: values.length,
            results: values.slice(offset, offset + limit),
            prev: offset - limit >= 0 ? `?offset=${offset - limit}&limit=${limit}` : null,
            next: offset + limit < values.length
                ? `?offset=${offset + limit}&limit=${limit}`
                : null,
        };
    }
    async save(post) {
        const newPost = new post_model_1.Post({
            ...post,
            id: `post-${MemoryPostRepository.index++}`,
        });
        MemoryPostRepository.store.set(newPost.id, newPost);
        return newPost;
    }
    async findAll() {
        const values = Array.from(MemoryPostRepository.store.values());
        return values;
    }
    async findById(id) {
        const findPost = MemoryPostRepository.store.get(id);
        return findPost ?? null;
    }
    async update(postId, updatePostInfo) {
        const findPost = MemoryPostRepository.store.get(postId);
        if (!findPost) {
            throw new http_exception_1.default(404, "게시글을 찾을 수 없습니다.");
        }
        MemoryPostRepository.store.set(postId, {
            ...findPost,
            ...updatePostInfo,
        });
        return MemoryPostRepository.store.get(postId);
    }
    async delete(postId) {
        const findPost = MemoryPostRepository.store.get(postId);
        if (!findPost) {
            throw new http_exception_1.default(404, "게시글을 찾을 수 없습니다.");
        }
        MemoryPostRepository.store.delete(postId);
        return;
    }
}
exports.MemoryPostRepository = MemoryPostRepository;
//# sourceMappingURL=memoryPost.repository.js.map