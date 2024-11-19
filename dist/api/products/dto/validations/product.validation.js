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
exports.adminDeleteProductValidator = exports.adminUpdateProductValidator = exports.adminCreateProductBodyValidator = exports.adminGetProductDetailValidator = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
/**제품 상세 조회 */
const adminGetProductDetailPathValidator = {
    productId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "productId는 필수 입력값입니다")
};
exports.adminGetProductDetailValidator = {
    path: adminGetProductDetailPathValidator
};
exports.adminCreateProductBodyValidator = yup.object().shape({
    productName: yup
        .string()
        .required("제품명은 필수 입력값입니다.")
        .max(300, "300자 이하로 입력해주세요."),
    price: yup
        .number()
        .required("가격은 필수 입력값입니다."),
    sales: yup
        .number()
        .required("판매가는 필수 입력값입니다."),
    rdate: yup
        .date()
        .optional(),
    thumbnail: yup
        .string()
        .required("대표 이미지는 필수 입력값입니다."),
    img: yup
        .string()
        .required("상세 이미지는 필수 입력값입니다.")
});
/**제품 수정 */
const adminUpdateProductPathValidator = yup.object({
    productId: yup
        .string()
        .required("제품id는 필수값입니다.")
});
const adminUpdateProductBodyValidator = yup.object({
    productName: yup
        .string()
        .required("제품명은 필수 입력값입니다.")
        .max(300, "300자 이하로 입력해주세요."),
    price: yup
        .number()
        .optional(),
    sales: yup
        .number(),
    thumbnail: yup
        .string()
        .optional(),
    img: yup
        .string()
        .optional(),
    delivery: yup
        .string()
        .optional(),
    seller: yup
        .string()
        .optional(),
    description: yup
        .string()
        .optional(),
    packageType: yup
        .string()
        .optional(),
    detail: yup
        .string()
        .optional(),
    category: yup
        .string()
        .optional(),
});
exports.adminUpdateProductValidator = {
    body: adminUpdateProductBodyValidator,
    path: adminUpdateProductPathValidator
};
/**제품 삭제 */
const adminDeleteProductPathValidator = yup.object({
    productId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "productId는 필수 입력값입니다."),
});
exports.adminDeleteProductValidator = yup.object({
    path: adminDeleteProductPathValidator
});
//# sourceMappingURL=product.validation.js.map