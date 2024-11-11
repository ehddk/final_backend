// 회원가입
export class UserResponseDTO {
  /** 유저 ID */
  userId!: string;
  name!: string;
  loginId: string;
  email!: string;

  constructor(user: IUser) {
    this.userId = user.id;
    this.name = user.profile.firstName;
    this.loginId = user.loginId;
    this.email = user.email;
  }
}
