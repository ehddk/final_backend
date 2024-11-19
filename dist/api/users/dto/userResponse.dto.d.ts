export declare class UserResponseDTO {
    /** 유저 ID */
    userId: string;
    name: string;
    loginId: string;
    email: string;
    phoneNum: string;
    cart: {
        id: string;
        userId: string;
    };
    constructor(user: IUser);
}
