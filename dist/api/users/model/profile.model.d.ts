import { IDelivery } from "@/api/deliveries/@types/delivery.type";
export declare class Profile implements IProfile {
    id: string;
    firstName: string;
    lastName?: string | undefined;
    phoneNum: string;
    delivery: IDelivery[];
    constructor(params: IProfile);
}
