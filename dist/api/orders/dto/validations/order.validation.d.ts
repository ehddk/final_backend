import * as yup from "yup";
/** 주문 목록 조회 Validator */
export declare const getOrdersValidator: {
    query: yup.ObjectSchema<{
        limit: number | undefined;
        offset: number | undefined;
    }, yup.AnyObject, {
        limit: undefined;
        offset: undefined;
    }, "">;
};
/** 주문 상세 조회 Validator */
export declare const getOrderDetailValidator: {
    path: yup.ObjectSchema<{
        orderId: string;
    }, yup.AnyObject, {
        orderId: undefined;
    }, "">;
};
/** 주문 생성 Validator */
export declare const createOrderValidator: {
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
export declare const updateOrderValidator: {
    body: yup.ObjectSchema<{
        deliveryRequest: string | undefined;
        orderStatus: string | undefined;
    }, yup.AnyObject, {
        deliveryRequest: undefined;
        orderStatus: undefined;
    }, "">;
    path: yup.ObjectSchema<{
        orderId: string;
    }, yup.AnyObject, {
        orderId: undefined;
    }, "">;
};
