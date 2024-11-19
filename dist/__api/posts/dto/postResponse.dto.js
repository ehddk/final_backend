"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostResponseDTO = void 0;
class PostResponseDTO {
    postId;
    title;
    content;
    author;
    createdAt;
    constructor(params) {
        this.postId = params.id;
        this.title = params.title;
        this.content = params.content;
        this.author = {
            id: params.author?.id,
            userName: params.author?.profile?.firstName,
        };
        this.createdAt = params.createdAt;
    }
}
exports.PostResponseDTO = PostResponseDTO;
//# sourceMappingURL=postResponse.dto.js.map