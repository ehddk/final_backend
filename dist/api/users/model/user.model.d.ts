export declare class User implements IUser {
    id: string;
    name?: string;
    loginId: string;
    password?: string | undefined;
    email: string;
    role: RoleType;
    salt?: string | undefined;
    profile: IProfile;
    cart: ICart;
    orders?: IOrder[];
    inquiries?: IInquiry[];
    constructor(params: IUser);
}
