import { IDelivery } from "../@types/delivery.type";
export declare class Delivery implements IDelivery {
    id: string;
    userId: IUser;
    name: string;
    postalCode: number;
    defaultAddress: string;
    detailAddress: string;
    number: string;
    isDefault?: boolean;
    constructor(user: IUser, params: IDelivery);
}
