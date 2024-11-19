import * as yup from "yup";
export declare const adminGetOrdersValidator: {};
/** 주문 생성 Validator */
export declare const adminCreateOrderValidator: {
    body: yup.ObjectSchema<{
        userId: string;
        deliveryRequest: string | undefined;
        paymentMethod: string;
    }, yup.AnyObject, {
        userId: undefined;
        deliveryRequest: undefined;
        paymentMethod: undefined;
    }, "">;
};
/** 주문 수정 Validator */
export declare const adminUpdateOrderValidator: {
    body: yup.ObjectSchema<{
        name: string | undefined;
        deliveryRequest: string | undefined;
        paymentMethod: string | undefined;
    }, yup.AnyObject, {
        name: undefined;
        deliveryRequest: undefined;
        paymentMethod: undefined;
    }, "">;
    path: yup.ObjectSchema<{
        orderId: string | undefined;
    }, yup.AnyObject, {
        orderId: undefined;
    }, "">;
};
/** 주문 상세 조회 Validator */
export declare const adminGetOrderDetailValidator: {
    path: yup.ObjectSchema<{
        orderId: string | undefined;
    }, yup.AnyObject, {
        orderId: undefined;
    }, "">;
};
/** 주문 삭제 Validator */
export declare const adminDeleteOrderValidator: {
    path: yup.ObjectSchema<{
        orderId: string | undefined;
    }, yup.AnyObject, {
        orderId: undefined;
    }, "">;
};
