// 회원가입
export class UserResponseDTO {
  /** 유저 ID */
  userId!: string;
  name!: string;
  loginId: string;
  email!: string;
  phoneNum: string;
  cart: {
    id: string;
    userId: string;
  };

  constructor(user: IUser) {
    this.userId = user.id;
    this.name = user.profile.firstName;
    this.loginId = user.loginId;
    this.email = user.email;
    this.phoneNum = user.profile.phoneNum;
    this.cart = {
      id: user.cart?.id,
      userId: user.cart?.userId,
    };
  }
}
