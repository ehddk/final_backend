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
exports.adminDeleteInquiryValidator = exports.adminUpdateInquiryValidator = exports.adminCreateInquiryValidator = exports.adminGetInquiryDetailValidator = exports.adminGetInquiriesValidator = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
exports.adminGetInquiriesValidator = {};
const adminGetInquiryDetailPathValidator = yup.object({
    inquiryId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다."),
});
/** 1:1문의 상세 조회 Validator */
exports.adminGetInquiryDetailValidator = {
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
exports.adminCreateInquiryValidator = {
    body: adminCreateInquiryBodyValidator,
};
const adminUpdateInquiryBodyValidator = yup.object({
    title: yup.string().optional().max(500, "제목은 500자 이하로 입력해주세요."),
    content: yup.string().optional(),
});
const adminUpdateInquiryPathValidator = yup.object({
    inquiryId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다."),
});
/** 1:1문의 수정 Validator */
exports.adminUpdateInquiryValidator = {
    body: adminUpdateInquiryBodyValidator,
    path: adminUpdateInquiryPathValidator,
};
const adminDeleteInquiryPathValidator = yup.object({
    inquiryId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다."),
});
/** 1:1문의 삭제 Validator */
exports.adminDeleteInquiryValidator = {
    path: adminDeleteInquiryPathValidator,
};
//# sourceMappingURL=adminInquiry.validation.js.map