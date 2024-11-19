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
exports.deleteDeliveryValidator = exports.updateDeliveryValidator = exports.getDeliveryDetailValidator = exports.getDeliveryValidator = exports.createDeliveryValidator = exports.getDeliveriesValidation = void 0;
const validations_1 = require("@/api/common/validations");
const yup = __importStar(require("yup"));
exports.getDeliveriesValidation = {};
/**배송지 생성  */
const createDeliveryBodyValidator = yup.object({
    userId: yup
        .string()
        .required("회원 id는 필수 값입니다."),
    defaultAddress: yup
        .string()
        .required("기본주소는 필수 입력값입니다."),
    detailAddress: yup
        .string()
        .required("상세주소는 필수 입력값입니다."),
    number: yup
        .string()
        .required("휴대폰번호는 필수 입력값입니다."),
    isDefault: yup
        .boolean()
        .required("기본배송지 여부선택은 필수입니다.")
});
const createDeliveryPathValidator = yup.object({
    userId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, 'userId는 필수 입력값입니다.'),
});
exports.createDeliveryValidator = {
    body: createDeliveryBodyValidator,
    path: createDeliveryPathValidator
};
/**배송지 목록 조회 */
const getDeliveryPathValidator = yup.object({
    userId: yup
        .string()
        // .required("회원ID는 필수값입니다."),
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "userId는 필수 입력값입니다."),
    // deliveryId:yup
    //     .string()
    //     .matches(REGEX.EMPTY_VARIABLE_PATH, "deliveryId는 필수 입력값입니다."),
});
exports.getDeliveryValidator = {
    path: getDeliveryPathValidator,
};
/**배송지 상세 조회 */
const getDeliveryDetailPathValidator = yup.object({
    userId: yup
        .string()
        // .required("회원ID는 필수값입니다."),
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "userId는 필수 입력값입니다."),
    deliveryId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "deliveryId는 필수 입력값입니다."),
});
exports.getDeliveryDetailValidator = {
    path: getDeliveryDetailPathValidator,
};
/**배송지 수정 */
const updateDeliveryPathValidator = yup.object({
    userId: yup
        .string()
        // .required("회원ID는 필수값입니다."),
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "userId는 필수 입력값입니다."),
    deliveryId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "deliveryId는 필수 입력값입니다."),
});
const updateDeliveryBodyValidator = yup.object({
    name: yup.string().optional().max(100, "회원명은 100자 이하로 입력해주세요."),
    defaultAddress: yup.string().optional().max(100, "기본주소는 100자 이하로 입력해주세요."),
    detailAddress: yup.string().optional().max(100, "상세주소는 100자 이하로 입력해주세요."),
    number: yup.string().optional().max(20, "폰번호는 20자 이내로 입력해주세요") //폰번호
});
exports.updateDeliveryValidator = {
    path: updateDeliveryPathValidator,
    body: updateDeliveryBodyValidator
};
/**배송지 삭제 */
const deleteDeliveryPathValidtor = yup.object({
    userId: yup
        .string()
        // .required("회원ID는 필수값입니다."),
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "userId는 필수 입력값입니다."),
    deliveryId: yup
        .string()
        .matches(validations_1.REGEX.EMPTY_VARIABLE_PATH, "deliveryId는 필수 입력값입니다."),
});
/** 배송지 삭제 Validator */
exports.deleteDeliveryValidator = {
    path: deleteDeliveryPathValidtor
};
//# sourceMappingURL=delivery.validation.js.map