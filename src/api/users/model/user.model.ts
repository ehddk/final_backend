export class User implements IUser {
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

  constructor(params: IUser) {
    this.id = params.id;
    this.name = params.name;
    this.loginId = params.loginId;
    this.password = params.password;
    this.email = params.email;
    this.role = params.role;
    this.salt = params.salt;
    this.profile = params.profile;
    this.cart = params.cart;
    this.orders = params.orders;
    this.inquiries = params.inquiries;
  }
}
