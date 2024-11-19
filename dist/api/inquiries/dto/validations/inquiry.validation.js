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
exports.getInquiryDetailValidator = exports.getInquiriesValidator = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
/** 1:1문의 목록 조회 Validator */
exports.getInquiriesValidator = {};
const getInquiryDetailPathValidator = yup.object({
    inquiryId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "inquiryId는 필수 입력값입니다.")
        .required(),
});
/** 1:1문의 상세 조회 Validator */
exports.getInquiryDetailValidator = {
    path: getInquiryDetailPathValidator,
};
//# sourceMappingURL=inquiry.validation.js.map