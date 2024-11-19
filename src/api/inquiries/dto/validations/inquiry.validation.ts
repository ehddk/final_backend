import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

/** 1:1문의 목록 조회 Validator */
export const getInquiriesValidator = {};

const getInquiryDetailPathValidator = yup.object({
  inquiryId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다.")
    .required(),
});

/** 1:1문의 상세 조회 Validator */
export const getInquiryDetailValidator = {
  path: getInquiryDetailPathValidator,
};
