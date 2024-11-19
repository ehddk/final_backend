import { UserRepository } from "@/api/users/repository/user/user.repository";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
import { PostRepository } from "@/api/posts/repository/post.repository";
import { PostsService } from "@/api/posts/service/posts.service.type";
export declare class PostsServiceImpl implements PostsService {
    private readonly _postRepository;
    private readonly _userRepository;
    constructor(postRepository: PostRepository, userRepository: UserRepository);
    createPost(userId: string, post: Omit<IPost, "id" | "user">): Promise<PostResponseDTO>;
    getPosts({ limit, offset, }: {
        limit?: number;
        offset?: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: PostResponseDTO[];
        next: string | null;
    }>;
    getPostDetail(postId: string): Promise<PostResponseDTO | null>;
    updatePost(postId: string, updatedPost: Omit<IPost, "id" | "user">): Promise<void>;
    deletePost(postId: string): Promise<void>;
}
