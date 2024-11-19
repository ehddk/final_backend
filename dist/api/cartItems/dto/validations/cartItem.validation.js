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
exports.deleteCartItemValidator = exports.updateCartItemValidator = exports.createCartItemValidator = exports.getCartItemDetailValidator = exports.getCartItemsValidator = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
exports.getCartItemsValidator = {};
const getCartItemDetailPathValidator = yup.object({
    cartItemId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "cartItemId는 필수 입력값입니다."),
});
/** 장바구니 주문 상품 상세 조회 Validator */
exports.getCartItemDetailValidator = {
    path: getCartItemDetailPathValidator,
};
const createCartItemBodyValidator = yup.object({
    quantity: yup
        .number()
        .required("수량은 필수 입력값입니다.")
        .min(1, "수량은 최소 1개 이상이어야 합니다."),
});
/** 장바구니 주문 상품 생성 Validator */
exports.createCartItemValidator = {
    body: createCartItemBodyValidator,
};
const updateCartItemBodyValidator = yup.object({
    quantity: yup
        .number()
        .required("수량은 필수 입력값입니다.")
        .min(1, "수량은 최소 1개 이상이어야 합니다."),
});
const updateCartItemPathValidator = yup.object({
    cartItemId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "cartItemId는 필수 입력값입니다."),
});
/** 장바구니 주문 상품 수정 Validator */
exports.updateCartItemValidator = {
    body: updateCartItemBodyValidator,
    path: updateCartItemPathValidator,
};
const deleteCartItemPathValidator = yup.object({
    cartItemId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "cartItemId는 필수 입력값입니다."),
});
/** 장바구니 주문 상품 삭제 Validator */
exports.deleteCartItemValidator = {
    path: deleteCartItemPathValidator,
};
//# sourceMappingURL=cartItem.validation.js.map