"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
class Post {
    id;
    title;
    content;
    author;
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.content = params.content;
        this.author = params.author;
    }
}
exports.Post = Post;
//# sourceMappingURL=post.model.js.map