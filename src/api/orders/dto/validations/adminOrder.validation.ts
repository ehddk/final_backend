import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

export const adminGetOrdersValidator = {};

/** 주문 생성 Validator */
const adminCreateOrderBodyValidator = yup.object({
  userId: yup
    .string()
    .required("회원 ID는 필수 입력값입니다.")
    .matches(REGEX.EMPTY_VARIABLE_PATH, "회원 ID는 유효하지 않습니다."),
  deliveryRequest: yup
    .string()
    .optional()
    .max(500, "배송 요청 사항은 500자 이하로 입력해주세요."),
  paymentMethod: yup
    .string()
    .required("결제수단은 필수 입력값입니다.")
    .oneOf(
      ["신용카드", "간편결제", "휴대폰", "카카오페이"],
      "결제수단은 신용카드, 간편결제, 휴대폰, 카카오페이 중 하나여야 합니다."
    ),
});

/** 주문 생성 Validator */
export const adminCreateOrderValidator = {
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
    .oneOf(
      ["신용카드", "간편결제", "휴대폰", "카카오페이"],
      "결제수단은 신용카드, 간편결제, 휴대폰, 카카오페이 중 하나여야 합니다."
    ),
});

const adminUpdateOrderPathValidator = yup.object({
  orderId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다."),
});

/** 주문 수정 Validator */
export const adminUpdateOrderValidator = {
  body: adminUpdateOrderBodyValidator,
  path: adminUpdateOrderPathValidator,
};

/** 주문 상세 조회 Validator */
const adminGetOrderDetailPathValidator = yup.object({
  orderId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다."),
});

/** 주문 상세 조회 Validator */
export const adminGetOrderDetailValidator = {
  path: adminGetOrderDetailPathValidator,
};

/** 주문 삭제 Validator */
const adminDeleteOrderPathValidator = yup.object({
  orderId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "orderId는 필수 입력값입니다."),
});

/** 주문 삭제 Validator */
export const adminDeleteOrderValidator = {
  path: adminDeleteOrderPathValidator,
};
