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
exports.updateOrderValidator = exports.createOrderValidator = exports.getOrderDetailValidator = exports.getOrdersValidator = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
/** 주문 목록 조회 Validator */
const getOrdersQueryValidator = yup.object({
    limit: yup.number().optional().positive("limit은 양의 정수여야 합니다."),
    offset: yup.number().optional().positive("offset은 양의 정수여야 합니다."),
});
/** 주문 목록 조회 Validator */
exports.getOrdersValidator = {
    query: getOrdersQueryValidator,
};
const getOrderDetailPathValidator = yup.object({
    orderId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다.")
        .required(),
});
/** 주문 상세 조회 Validator */
exports.getOrderDetailValidator = {
    path: getOrderDetailPathValidator,
};
const createOrderBodyValidator = yup.object({
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
exports.createOrderValidator = {
    body: createOrderBodyValidator,
};
const updateOrderBodyValidator = yup.object({
    deliveryRequest: yup
        .string()
        .optional()
        .max(500, "배송 요청 사항은 500자 이하로 입력해주세요."),
    orderStatus: yup
        .string()
        .optional()
        .oneOf(["결제완료", "배송준비중", "배송중", "배송완료", "주문취소"], "주문 상태는 결제완료, 배송준비중, 배송중, 배송완료, 주문취소 중 하나여야 합니다."),
});
const updateOrderPathValidator = yup.object({
    orderId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다.")
        .required(),
});
/** 주문 수정 Validator */
exports.updateOrderValidator = {
    body: updateOrderBodyValidator,
    path: updateOrderPathValidator,
};
//# sourceMappingURL=order.validation.js.map