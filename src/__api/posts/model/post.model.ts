export class Post implements IPost {
  id: string;
  title: string;
  content: string;
  author: IUser;

  constructor(params: IPost) {
    this.id = params.id;
    this.title = params.title;
    this.content = params.content;
    this.author = params.author;
  }
}
