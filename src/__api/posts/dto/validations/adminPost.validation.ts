import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

export const adminGetPostsValidator = {};

const adminGetPostDetailPathValidator = yup.object({
  postId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "postId는 필수 입력값입니다."),
});

/** 게시글 상세 조회 Validator */
export const adminGetPostDetailValidator = {
  path: adminGetPostDetailPathValidator,
};

const adminCreatePostBodyValidator = yup.object({
  title: yup
    .string()
    .required("제목이 입력되지 않았습니다. 제목은 필수 입력값입니다.")
    .max(500, "제목은 500자 이하로 입력해주세요."),
  content: yup
    .string()
    .required("내용이 입력되지 않았습니다. 내용은 필수 입력값입니다.")
    .max(10000, "내용은 10000자 이하로 입력해주세요."),
});

/** 게시글 생성 Validator */
export const adminCreatePostValidator = {
  body: adminCreatePostBodyValidator,
};

const adminUpdatePostBodyValidator = yup.object({
  title: yup.string().optional().max(500, "제목은 500자 이하로 입력해주세요."),
  content: yup.string().optional(),
});

const adminUpdatePostPathValidator = yup.object({
  postId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "postId는 필수 입력값입니다."),
});

/** 게시글 수정 Validator */
export const adminUpdatePostValidator = {
  body: adminUpdatePostBodyValidator,
  path: adminUpdatePostPathValidator,
};

const adminDeletePostPathValidator = yup.object({
  postId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "postId는 필수 입력값입니다."),
});

/** 게시글 삭제 Validator */
export const adminDeletePostValidator = {
  path: adminDeletePostPathValidator,
};