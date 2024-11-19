import * as yup from "yup";
/** 게시글 목록 조회 Validator */
export declare const getPostsValidator: {};
/** 게시글 상세 조회 Validator */
export declare const getPostDetailValidator: {
    path: yup.ObjectSchema<{
        postId: string;
    }, yup.AnyObject, {
        postId: undefined;
    }, "">;
};
