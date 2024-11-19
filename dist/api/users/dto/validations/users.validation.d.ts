import * as yup from "yup";
export declare const createUserValidator: {
    body: yup.ObjectSchema<{
        email: string;
        password: string | undefined;
        profile: {
            lastName?: string | undefined;
            birth?: string | undefined;
            gender?: "M" | "F" | undefined;
            thubmnail?: string | undefined;
            firstName: string;
        };
    }, yup.AnyObject, {
        email: undefined;
        password: undefined;
        profile: {
            birth: undefined;
            gender: undefined;
            firstName: undefined;
            lastName: undefined;
            thubmnail: undefined;
        };
    }, "">;
};
export declare const updateUserValidator: {
    body: yup.ObjectSchema<{
        email: string | undefined;
        password: string | undefined;
        profile: {
            id?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
            birth?: string | undefined;
            gender?: "M" | "F" | undefined;
            thubmnail?: string | undefined;
        };
    }, yup.AnyObject, {
        email: undefined;
        password: undefined;
        profile: {
            id: undefined;
            birth: undefined;
            gender: undefined;
            firstName: undefined;
            lastName: undefined;
            thubmnail: undefined;
        };
    }, "">;
    params: yup.ObjectSchema<{
        userId: string | undefined;
    }, yup.AnyObject, {
        userId: undefined;
    }, "">;
};
