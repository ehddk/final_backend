import * as yup from "yup";
export declare const getCartItemsValidator: {};
/** 장바구니 주문 상품 상세 조회 Validator */
export declare const getCartItemDetailValidator: {
    path: yup.ObjectSchema<{
        cartItemId: string | undefined;
    }, yup.AnyObject, {
        cartItemId: undefined;
    }, "">;
};
/** 장바구니 주문 상품 생성 Validator */
export declare const createCartItemValidator: {
    body: yup.ObjectSchema<{
        quantity: number;
    }, yup.AnyObject, {
        quantity: undefined;
    }, "">;
};
/** 장바구니 주문 상품 수정 Validator */
export declare const updateCartItemValidator: {
    body: yup.ObjectSchema<{
        quantity: number;
    }, yup.AnyObject, {
        quantity: undefined;
    }, "">;
    path: yup.ObjectSchema<{
        cartItemId: string | undefined;
    }, yup.AnyObject, {
        cartItemId: undefined;
    }, "">;
};
/** 장바구니 주문 상품 삭제 Validator */
export declare const deleteCartItemValidator: {
    path: yup.ObjectSchema<{
        cartItemId: string | undefined;
    }, yup.AnyObject, {
        cartItemId: undefined;
    }, "">;
};
