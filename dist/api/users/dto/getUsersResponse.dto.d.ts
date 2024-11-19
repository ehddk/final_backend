import { IDelivery } from "@/api/deliveries/@types/delivery.type";
/**  유저 목록 조회 응답 DTO */
export declare class GetUsersResponseDTO {
    userId: string;
    email: string;
    profile: {
        firstName: string;
        delivery?: IDelivery[] | string;
    };
    cart: {
        id: string;
    };
    constructor(user: IUser);
}
