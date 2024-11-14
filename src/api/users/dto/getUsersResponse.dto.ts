import { IDelivery } from "@/api/deliveries/@types/delivery.type";

/**  유저 목록 조회 응답 DTO */
export class GetUsersResponseDTO {
  userId: string;
  email: string;
  profile: {
    firstName: string;
    delivery?:IDelivery[] | string;
  } 
  constructor(user: IUser) {
    this.userId = user.id;
    this.email = user.email;
    const deliveryData= user.profile?.delivery;

    this.profile = {
      firstName: user.profile?.firstName || '이름 없음', 
      delivery:Array.isArray(deliveryData) && deliveryData.length > 0 ? deliveryData : '배송지 미등록'
    };
  }
}
