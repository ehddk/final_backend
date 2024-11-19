import * as yup from "yup";
export declare const adminGetInquiriesValidator: {};
/** 1:1문의 상세 조회 Validator */
export declare const adminGetInquiryDetailValidator: {
    path: yup.ObjectSchema<{
        inquiryId: string | undefined;
    }, yup.AnyObject, {
        inquiryId: undefined;
    }, "">;
};
/** 1:1문의 생성 Validator */
export declare const adminCreateInquiryValidator: {
    body: yup.ObjectSchema<{
        title: string;
        content: string;
    }, yup.AnyObject, {
        title: undefined;
        content: undefined;
    }, "">;
};
/** 1:1문의 수정 Validator */
export declare const adminUpdateInquiryValidator: {
    body: yup.ObjectSchema<{
        title: string | undefined;
        content: string | undefined;
    }, yup.AnyObject, {
        title: undefined;
        content: undefined;
    }, "">;
    path: yup.ObjectSchema<{
        inquiryId: string | undefined;
    }, yup.AnyObject, {
        inquiryId: undefined;
    }, "">;
};
/** 1:1문의 삭제 Validator */
export declare const adminDeleteInquiryValidator: {
    path: yup.ObjectSchema<{
        inquiryId: string | undefined;
    }, yup.AnyObject, {
        inquiryId: undefined;
    }, "">;
};
