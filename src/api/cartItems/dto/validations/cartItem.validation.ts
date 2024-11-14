import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

export const getCartItemsValidator = {};

const getCartItemDetailPathValidator = yup.object({
  cartItemId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "cartItemId는 필수 입력값입니다."),
});

/** 장바구니 주문 상품 상세 조회 Validator */
export const getCartItemDetailValidator = {
  path: getCartItemDetailPathValidator,
};

const createCartItemBodyValidator = yup.object({
  quantity: yup
    .number()
    .required("수량은 필수 입력값입니다.")
    .min(1, "수량은 최소 1개 이상이어야 합니다."),
});

/** 장바구니 주문 상품 생성 Validator */
export const createCartItemValidator = {
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
    .matches(REGEX.EMPTY_VARIABLE_PATH, "cartItemId는 필수 입력값입니다."),
});

/** 장바구니 주문 상품 수정 Validator */
export const updateCartItemValidator = {
  body: updateCartItemBodyValidator,
  path: updateCartItemPathValidator,
};

const deleteCartItemPathValidator = yup.object({
  cartItemId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "cartItemId는 필수 입력값입니다."),
});

/** 장바구니 주문 상품 삭제 Validator */
export const deleteCartItemValidator = {
  path: deleteCartItemPathValidator,
};
