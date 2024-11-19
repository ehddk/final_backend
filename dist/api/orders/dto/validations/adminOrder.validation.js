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
exports.adminDeleteOrderValidator = exports.adminGetOrderDetailValidator = exports.adminUpdateOrderValidator = exports.adminCreateOrderValidator = exports.adminGetOrdersValidator = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
exports.adminGetOrdersValidator = {};
/** 주문 생성 Validator */
const adminCreateOrderBodyValidator = yup.object({
    userId: yup
        .string()
        .required("회원 ID는 필수 입력값입니다.")
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "회원 ID는 유효하지 않습니다."),
    deliveryRequest: yup
        .string()
        .optional()
        .max(500, "배송 요청 사항은 500자 이하로 입력해주세요."),
    paymentMethod: yup
        .string()
        .required("결제수단은 필수 입력값입니다.")
        .oneOf(["신용카드", "간편결제", "휴대폰", "카카오페이"], "결제수단은 신용카드, 간편결제, 휴대폰, 카카오페이 중 하나여야 합니다."),
});
/** 주문 생성 Validator */
exports.adminCreateOrderValidator = {
    body: adminCreateOrderBodyValidator,
};
/** 주문 수정 Validator */
const adminUpdateOrderBodyValidator = yup.object({
    name: yup.string().optional().max(100, "회원명은 100자 이하로 입력해주세요."),
    deliveryRequest: yup
        .string()
        .optional()
        .max(500, "배송 요청 사항은 500자 이하로 입력해주세요."),
    paymentMethod: yup
        .string()
        .optional()
        .oneOf(["신용카드", "간편결제", "휴대폰", "카카오페이"], "결제수단은 신용카드, 간편결제, 휴대폰, 카카오페이 중 하나여야 합니다."),
});
const adminUpdateOrderPathValidator = yup.object({
    orderId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다."),
});
/** 주문 수정 Validator */
exports.adminUpdateOrderValidator = {
    body: adminUpdateOrderBodyValidator,
    path: adminUpdateOrderPathValidator,
};
/** 주문 상세 조회 Validator */
const adminGetOrderDetailPathValidator = yup.object({
    orderId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다."),
});
/** 주문 상세 조회 Validator */
exports.adminGetOrderDetailValidator = {
    path: adminGetOrderDetailPathValidator,
};
/** 주문 삭제 Validator */
const adminDeleteOrderPathValidator = yup.object({
    orderId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다."),
});
/** 주문 삭제 Validator */
exports.adminDeleteOrderValidator = {
    path: adminDeleteOrderPathValidator,
};
//# sourceMappingURL=adminOrder.validation.js.map