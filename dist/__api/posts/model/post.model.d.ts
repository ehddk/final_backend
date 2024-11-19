export declare class Post implements IPost {
    id: string;
    title: string;
    content: string;
    author: IUser;
    constructor(params: IPost);
}
