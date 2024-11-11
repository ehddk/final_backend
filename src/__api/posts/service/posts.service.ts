import { UserRepository } from "@/api/users/repository/user/user.repository";
import { PostResponseDTO } from "@/api/posts/dto/postResponse.dto";
import { PostRepository } from "@/api/posts/repository/post.repository";
import { PostsService } from "@/api/posts/service/posts.service.type";
import HttpException from "@/api/common/exceptions/http.exception";

export class PostsServiceImpl implements PostsService {
  private readonly _postRepository: PostRepository;
  private readonly _userRepository: UserRepository;
  constructor(postRepository: PostRepository, userRepository: UserRepository) {
    this._postRepository = postRepository;
    this._userRepository = userRepository;
  }

  async createPost(
    userId: string,
    post: Omit<IPost, "id" | "user">
  ): Promise<PostResponseDTO> {
    // 게시글 생성
    // 1. 작성자를 찾는다.
    // 2. 작성자가 없으면 에러를 던져준다.
    // 3. 작성자가 있으면, 게시글을 생성한다.
    // 3-1. 게시글을 생성할때 author에 찾은 작성자를 넣어준다.

    // 작성자 찾기
    const author = await this._userRepository.findById(userId);

    if (!author) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    const newPost = await this._postRepository.save({
      ...post,
      author,
    });

    const newPosts = author.posts?.concat(newPost);

    await this._userRepository.update(author.id, {
      posts: newPosts,
    });

    return new PostResponseDTO(newPost);
  }
  async getPosts({
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: PostResponseDTO[];
    next: string | null;
  }> {
    const posts = await this._postRepository.findAllWithPagination({
      limit,
      offset,
    });

    return {
      totalCount: posts.totalCount,
      prev: posts.prev,
      results: posts.results.map((post) => new PostResponseDTO(post)),
      next: posts.next,
    };
  }
  async getPostDetail(postId: string): Promise<PostResponseDTO | null> {
    const post = await this._postRepository.findById(postId);

    if (!post) {
      throw new HttpException(404, "게시글을 찾을 수 없습니다.");
    }

    return new PostResponseDTO(post);
  }
  async updatePost(
    postId: string,
    updatedPost: Omit<IPost, "id" | "user">
  ): Promise<void> {
    await this._postRepository.update(postId, updatedPost);

    return;
  }
  async deletePost(postId: string): Promise<void> {
    await this._postRepository.delete(postId);
  }
}
