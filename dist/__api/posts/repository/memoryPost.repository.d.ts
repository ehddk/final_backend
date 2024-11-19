import { PostRepository } from "@/api/posts/repository/post.repository";
export declare class MemoryPostRepository implements PostRepository {
    static index: number;
    static readonly store: Map<string, IPost>;
    findAllWithPagination({ offset, limit, }: {
        offset: number;
        limit: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: IPost[];
        next: string | null;
    }>;
    save(post: Omit<IPost, "id">): Promise<IPost>;
    findAll(): Promise<IPost[]>;
    findById(id: string): Promise<IPost | null>;
    update(postId: string, updatePostInfo: Partial<IPost>): Promise<IPost>;
    delete(postId: string): Promise<void>;
}
