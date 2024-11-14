import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

export const getOrderItemsValidator = {};

const getOrderItemDetailPathValidator = yup.object({
  orderItemId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "orderItemId는 필수 입력값입니다."),
});

/** 주문 상품 상세 조회 Validator */
export const getOrderItemDetailValidator = {
  path: getOrderItemDetailPathValidator,
};

const createOrderItemBodyValidator = yup.object({
  quantity: yup
    .number()
    .required("수량은 필수 입력값입니다.")
    .min(1, "수량은 최소 1개 이상이어야 합니다."),
});

/** 주문 상품 생성 Validator */
export const createOrderItemValidator = {
  body: createOrderItemBodyValidator,
};

const updateOrderItemBodyValidator = yup.object({
  quantity: yup
    .number()
    .required("수량은 필수 입력값입니다.")
    .min(1, "수량은 최소 1개 이상이어야 합니다."),
});

const updateOrderItemPathValidator = yup.object({
  orderItemId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "orderItemId는 필수 입력값입니다."),
});

/** 주문 상품 수정 Validator */
export const updateOrderItemValidator = {
  body: updateOrderItemBodyValidator,
  path: updateOrderItemPathValidator,
};

const deleteOrderItemPathValidator = yup.object({
  orderItemId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "orderItemId는 필수 입력값입니다."),
});

/** 주문 상품 삭제 Validator */
export const deleteOrderItemValidator = {
  path: deleteOrderItemPathValidator,
};
