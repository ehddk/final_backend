import * as yup from "yup";
export declare const adminGetPostsValidator: {};
/** 게시글 상세 조회 Validator */
export declare const adminGetPostDetailValidator: {
    path: yup.ObjectSchema<{
        postId: string | undefined;
    }, yup.AnyObject, {
        postId: undefined;
    }, "">;
};
/** 게시글 생성 Validator */
export declare const adminCreatePostValidator: {
    body: yup.ObjectSchema<{
        title: string;
        content: string;
    }, yup.AnyObject, {
        title: undefined;
        content: undefined;
    }, "">;
};
/** 게시글 수정 Validator */
export declare const adminUpdatePostValidator: {
    body: yup.ObjectSchema<{
        title: string | undefined;
        content: string | undefined;
    }, yup.AnyObject, {
        title: undefined;
        content: undefined;
    }, "">;
    path: yup.ObjectSchema<{
        postId: string | undefined;
    }, yup.AnyObject, {
        postId: undefined;
    }, "">;
};
/** 게시글 삭제 Validator */
export declare const adminDeletePostValidator: {
    path: yup.ObjectSchema<{
        postId: string | undefined;
    }, yup.AnyObject, {
        postId: undefined;
    }, "">;
};
