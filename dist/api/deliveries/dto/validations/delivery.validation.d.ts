import * as yup from "yup";
export declare const getDeliveriesValidation: {};
export declare const createDeliveryValidator: {
    body: yup.ObjectSchema<{
        userId: string;
        defaultAddress: string;
        detailAddress: string;
        number: string;
        isDefault: NonNullable<boolean | undefined>;
    }, yup.AnyObject, {
        userId: undefined;
        defaultAddress: undefined;
        detailAddress: undefined;
        number: undefined;
        isDefault: undefined;
    }, "">;
    path: yup.ObjectSchema<{
        userId: string | undefined;
    }, yup.AnyObject, {
        userId: undefined;
    }, "">;
};
export declare const getDeliveryValidator: {
    path: yup.ObjectSchema<{
        userId: string | undefined;
    }, yup.AnyObject, {
        userId: undefined;
    }, "">;
};
export declare const getDeliveryDetailValidator: {
    path: yup.ObjectSchema<{
        userId: string | undefined;
        deliveryId: string | undefined;
    }, yup.AnyObject, {
        userId: undefined;
        deliveryId: undefined;
    }, "">;
};
export declare const updateDeliveryValidator: {
    path: yup.ObjectSchema<{
        userId: string | undefined;
        deliveryId: string | undefined;
    }, yup.AnyObject, {
        userId: undefined;
        deliveryId: undefined;
    }, "">;
    body: yup.ObjectSchema<{
        name: string | undefined;
        defaultAddress: string | undefined;
        detailAddress: string | undefined;
        number: string | undefined;
    }, yup.AnyObject, {
        name: undefined;
        defaultAddress: undefined;
        detailAddress: undefined;
        number: undefined;
    }, "">;
};
/** 배송지 삭제 Validator */
export declare const deleteDeliveryValidator: {
    path: yup.ObjectSchema<{
        userId: string | undefined;
        deliveryId: string | undefined;
    }, yup.AnyObject, {
        userId: undefined;
        deliveryId: undefined;
    }, "">;
};
