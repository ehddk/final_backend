import { IDelivery } from "../@types/delivery.type";
export declare class DeliveryResponseDTO {
    id: string;
    name: string;
    postalCode?: number;
    defaultAddress: string;
    detailAddress: string;
    number: string;
    isDefault?: boolean;
    constructor(params: IDelivery);
}
