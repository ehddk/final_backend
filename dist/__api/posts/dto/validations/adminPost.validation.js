"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminDeletePostValidator = exports.adminUpdatePostValidator = exports.adminCreatePostValidator = exports.adminGetPostDetailValidator = exports.adminGetPostsValidator = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
exports.adminGetPostsValidator = {};
const adminGetPostDetailPathValidator = yup.object({
    postId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "postId는 필수 입력값입니다."),
});
/** 게시글 상세 조회 Validator */
exports.adminGetPostDetailValidator = {
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
exports.adminCreatePostValidator = {
    body: adminCreatePostBodyValidator,
};
const adminUpdatePostBodyValidator = yup.object({
    title: yup.string().optional().max(500, "제목은 500자 이하로 입력해주세요."),
    content: yup.string().optional(),
});
const adminUpdatePostPathValidator = yup.object({
    postId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "postId는 필수 입력값입니다."),
});
/** 게시글 수정 Validator */
exports.adminUpdatePostValidator = {
    body: adminUpdatePostBodyValidator,
    path: adminUpdatePostPathValidator,
};
const adminDeletePostPathValidator = yup.object({
    postId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "postId는 필수 입력값입니다."),
});
/** 게시글 삭제 Validator */
exports.adminDeletePostValidator = {
    path: adminDeletePostPathValidator,
};
//# sourceMappingURL=adminPost.validation.js.map