import { REGEX } from "@/api/common/validations";
import * as yup from "yup";

/**제품 상세 조회 */
const adminGetProductDetailPathValidator={
    productId:yup
    .string()
    .matches(REGEX.EMPTY_VARIABLE_PATH,"productId는 필수 입력값입니다")
}   
export const adminGetProductDetailValidator={
   path:adminGetProductDetailPathValidator
}   

/**제품등록 */
const adminCreateProductBodyValidator={
    productName:yup 
        .string()
        .required("제품명은 필수 입력값입니다.")
        .max(300,"300자 이하로 입력해주세요."),
    price:yup   
        .number()
        .required("가격은 필수 입력값입니다."),
    sales:yup   
        .number()
        .required("판매가는 필수 입력값입니다."),
    rdate:yup   
        .date()
        .optional(),
    thumbnail:yup   
        .string()
        .required("대표 이미지는 필수 입력값입니다."),
    img:yup
        .string()
        .required("상세 이미지는 필수 입력값입니다."),
    delivery:yup
        .string()
        .optional(),
    seller:yup
        .string()
        .optional(),
    description:yup
        .string()
        .required("설명은 필수 입력값입니다."),
    packageType:yup
        .string()
        .optional(),
    detail:yup
        .string()
        .optional(),
    category:yup
        .string()
        .optional(),
}

export const adminCreateProductValidator={
    body:adminCreateProductBodyValidator
}
/**제품 수정 */
const adminUpdateProductPathValidator=yup.object({
    productId:yup
        .string()
        .required("제품id는 필수값입니다.")
})
const adminUpdateProductBodyValidator = yup.object({
    productName:yup 
        .string()
        .required("제품명은 필수 입력값입니다.")
        .max(300,"300자 이하로 입력해주세요."),
    price:yup   
        .number()
        .required("가격은 필수 입력값입니다."),
    sales:yup   
        .number()
        .required("판매가는 필수 입력값입니다."),
    thumbnail:yup   
        .string()
        .required("대표 이미지는 필수 입력값입니다."),
    img:yup
        .string()
        .required("상세 이미지는 필수 입력값입니다."),
    delivery:yup
        .string()
        .optional(),
    seller:yup
        .string()
        .optional(),
    description:yup
        .string()
        .required("설명은 필수 입력값입니다."),
    packageType:yup
        .string()
        .optional(),
    detail:yup
        .string()
        .optional(),
    category:yup
        .string()
        .optional(),
})

export const adminUpdateProductValidator={
    body:adminUpdateProductBodyValidator,
    path:adminUpdateProductPathValidator
}
/**제품 삭제 */
const adminDeleteProductPathValidator = yup.object({
    productId: yup
      .string()
      .matches(REGEX.EMPTY_VARIABLE_PATH, "productId는 필수 입력값입니다."),
  });

export const adminDeleteProductValidator=yup.object({
    path:adminDeleteProductPathValidator
})
