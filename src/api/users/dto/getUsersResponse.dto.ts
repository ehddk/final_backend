import { IDelivery } from "@/api/deliveries/@types/delivery.type";

/**  유저 목록 조회 응답 DTO */
export class GetUsersResponseDTO {
  userId: string;
  email: string;
  profile: {
    firstName: string;
    delivery?:IDelivery[]
  };
  constructor(user: IUser) {
    console.log('Delivery:', user.profile?.delivery);
    this.userId = user.id;
    this.email = user.email;
    this.profile = {
      firstName: user.profile.firstName,
      delivery:user.profile?.delivery
    };
  }
}
