"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoosePostRepository = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const post_schema_1 = require("@/api/posts/model/post.schema");
class MongoosePostRepository {
    async findAllWithPagination({ offset, limit, }) {
        const offsetValue = Number(offset) || 0;
        const limitValue = Number(limit) || 10;
        // throw new Error("Method not implemented.");
        const list = await post_schema_1.MongoosePost.find()
            .limit(limitValue)
            .skip(offsetValue)
            .populate({
            path: "author",
            populate: {
                path: "profile",
            },
        })
            .sort({ createdAt: -1 });
        const totalCount = await post_schema_1.MongoosePost.find().countDocuments();
        return {
            totalCount,
            results: list,
            prev: offsetValue - limitValue >= 0
                ? `?offset=${offsetValue - limitValue}&limit=${limitValue}`
                : null,
            next: offsetValue + limitValue < totalCount
                ? `?offset=${offsetValue + limitValue}&limit=${limitValue}`
                : null,
        };
    }
    async save(post) {
        const newPost = new post_schema_1.MongoosePost({
            ...post,
        });
        await newPost.save();
        return newPost;
    }
    async findAll() {
        const values = await post_schema_1.MongoosePost.find().populate({
            path: "author",
            populate: {
                path: "profile",
            },
        });
        return values;
    }
    async findById(id) {
        const post = await post_schema_1.MongoosePost.findById(id).populate({
            path: "author",
            populate: {
                path: "profile",
            },
        });
        return post;
    }
    async update(postId, updatePostInfo) {
        const results = await post_schema_1.MongoosePost.findByIdAndUpdate(postId, updatePostInfo);
        if (!results) {
            throw new http_exception_1.default(404, "게시글을 찾을 수 없습니다.");
        }
        return results;
    }
    async delete(postId) {
        await post_schema_1.MongoosePost.deleteOne({ _id: postId });
        return;
    }
}
exports.MongoosePostRepository = MongoosePostRepository;
//# sourceMappingURL=mongoosePost.repository.js.map