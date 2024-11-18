import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

export const adminGetInquiriesValidator = {};

const adminGetInquiryDetailPathValidator = yup.object({
  inquiryId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다."),
});

/** 1:1문의 상세 조회 Validator */
export const adminGetInquiryDetailValidator = {
  path: adminGetInquiryDetailPathValidator,
};

const adminCreateInquiryBodyValidator = yup.object({
  title: yup
    .string()
    .required("제목이 입력되지 않았습니다. 제목은 필수 입력값입니다.")
    .max(500, "제목은 500자 이하로 입력해주세요."),
  content: yup
    .string()
    .required("내용이 입력되지 않았습니다. 내용은 필수 입력값입니다.")
    .max(10000, "내용은 10000자 이하로 입력해주세요."),
});

/** 1:1문의 생성 Validator */
export const adminCreateInquiryValidator = {
  body: adminCreateInquiryBodyValidator,
};

const adminUpdateInquiryBodyValidator = yup.object({
  title: yup.string().optional().max(500, "제목은 500자 이하로 입력해주세요."),
  content: yup.string().optional(),
});

const adminUpdateInquiryPathValidator = yup.object({
  inquiryId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다."),
});

/** 1:1문의 수정 Validator */
export const adminUpdateInquiryValidator = {
  body: adminUpdateInquiryBodyValidator,
  path: adminUpdateInquiryPathValidator,
};

const adminDeleteInquiryPathValidator = yup.object({
  inquiryId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다."),
});

/** 1:1문의 삭제 Validator */
export const adminDeleteInquiryValidator = {
  path: adminDeleteInquiryPathValidator,
};
