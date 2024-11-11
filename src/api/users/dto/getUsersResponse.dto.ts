/**  유저 목록 조회 응답 DTO */
export class GetUsersResponseDTO {
  userId: string;
  email: string;
  profile: {
    firstName: string;
  };
  constructor(user: IUser) {
    this.userId = user.id;
    this.email = user.email;
    this.profile = {
      firstName: user.profile.firstName,
    };
  }
}
