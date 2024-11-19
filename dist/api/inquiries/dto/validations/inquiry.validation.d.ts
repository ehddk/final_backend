import * as yup from "yup";
/** 1:1문의 목록 조회 Validator */
export declare const getInquiriesValidator: {};
/** 1:1문의 상세 조회 Validator */
export declare const getInquiryDetailValidator: {
    path: yup.ObjectSchema<{
        inquiryId: string;
    }, yup.AnyObject, {
        inquiryId: undefined;
    }, "">;
};
