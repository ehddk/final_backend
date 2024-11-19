export declare class PostResponseDTO {
    postId: string;
    title: string;
    content: string;
    author: {
        id: string;
        userName: string;
    };
    createdAt: Date;
    constructor(params: IPost);
}
