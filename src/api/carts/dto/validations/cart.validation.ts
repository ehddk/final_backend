import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

const updateCartBodyValidator = yup.object({
  cartItems: yup
    .array()
    .of(
      yup.object({
        productId: yup
          .string()
          .matches(REGEX.EMPTY_VARIABLE_PATH, "productId는 필수 입력값입니다.")
          .required(),
        quantity: yup.number().min(1, "수량은 1 이상이어야 합니다.").required(),
      })
    )
    .min(0, "장바구니에 상품이 없습니다")
    .required(),
});

const updateCartPathValidator = yup.object({
  cartId: yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH, "cartId는 필수 입력값입니다."),
});

/** 장바구니 수정 Validator */
export const updateCartValidator = {
  body: updateCartBodyValidator,
  path: updateCartPathValidator,
};
