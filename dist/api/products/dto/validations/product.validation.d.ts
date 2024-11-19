import * as yup from "yup";
export declare const adminGetProductDetailValidator: {
    path: {
        productId: yup.StringSchema<string | undefined, yup.AnyObject, undefined, "">;
    };
};
export declare const adminCreateProductBodyValidator: yup.ObjectSchema<{
    productName: string;
    price: number;
    sales: number;
    rdate: Date | undefined;
    thumbnail: string;
    img: string;
}, yup.AnyObject, {
    productName: undefined;
    price: undefined;
    sales: undefined;
    rdate: undefined;
    thumbnail: undefined;
    img: undefined;
}, "">;
export declare const adminUpdateProductValidator: {
    body: yup.ObjectSchema<{
        productName: string;
        price: number | undefined;
        sales: number | undefined;
        thumbnail: string | undefined;
        img: string | undefined;
        delivery: string | undefined;
        seller: string | undefined;
        description: string | undefined;
        packageType: string | undefined;
        detail: string | undefined;
        category: string | undefined;
    }, yup.AnyObject, {
        productName: undefined;
        price: undefined;
        sales: undefined;
        thumbnail: undefined;
        img: undefined;
        delivery: undefined;
        seller: undefined;
        description: undefined;
        packageType: undefined;
        detail: undefined;
        category: undefined;
    }, "">;
    path: yup.ObjectSchema<{
        productId: string;
    }, yup.AnyObject, {
        productId: undefined;
    }, "">;
};
export declare const adminDeleteProductValidator: yup.ObjectSchema<{
    path: {
        productId?: string | undefined;
    };
}, yup.AnyObject, {
    path: {
        productId: undefined;
    };
}, "">;
