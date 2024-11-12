interface IPost {
  /** 게시글 ID */
  id: string;
  /** 게시글 제목 */
  title: string;
  /** 게시글 내용 */
  content: string;
  /** 작성자 */
  author: IUser;
  /** 작성일 */
  createdAt: Date;
}

interface IPostResponseDTO {
  /** 게시글 ID */
  postId: string;
  /** 게시글 제목 */
  title: string;
  /** 게시글 내용 */
  content: string;
  /** 작성자 */
  author: {
    id: string;
    userName: string;
  };
}
