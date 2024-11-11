import HttpException from "@/api/common/exceptions/http.exception";
import { Post } from "@/api/posts/model/post.model";
import { PostRepository } from "@/api/posts/repository/post.repository";

export class MemoryPostRepository implements PostRepository {
  static index = 0;
  static readonly store: Map<string, IPost> = new Map();

  async findAllWithPagination({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: IPost[];
    next: string | null;
  }> {
    const values = Array.from(MemoryPostRepository.store.values());
    return {
      totalCount: values.length,
      results: values.slice(offset, offset + limit),
      prev:
        offset - limit >= 0 ? `?offset=${offset - limit}&limit=${limit}` : null,
      next:
        offset + limit < values.length
          ? `?offset=${offset + limit}&limit=${limit}`
          : null,
    };
  }

  async save(post: Omit<IPost, "id">): Promise<IPost> {
    const newPost = new Post({
      ...post,
      id: `post-${MemoryPostRepository.index++}`,
    });

    MemoryPostRepository.store.set(newPost.id, newPost);
    return newPost;
  }
  async findAll(): Promise<IPost[]> {
    const values = Array.from(MemoryPostRepository.store.values());
    return values;
  }

  async findById(id: string): Promise<IPost | null> {
    const findPost = MemoryPostRepository.store.get(id);
    return findPost ?? null;
  }
  async update(postId: string, updatePostInfo: Partial<IPost>): Promise<IPost> {
    const findPost = MemoryPostRepository.store.get(postId);

    if (!findPost) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    MemoryPostRepository.store.set(postId, {
      ...findPost,
      ...updatePostInfo,
    });

    return MemoryPostRepository.store.get(postId)!;
  }
  async delete(postId: string): Promise<void> {
    const findPost = MemoryPostRepository.store.get(postId);

    if (!findPost) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    MemoryPostRepository.store.delete(postId);

    return;
  }
}
