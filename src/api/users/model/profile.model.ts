
import { IDelivery } from "@/api/deliveries/@types/delivery.type";

export class Profile implements IProfile {
  id: string;
  firstName: string;
  lastName?: string | undefined;
  phoneNum: string;
  delivery: IDelivery[];

  constructor(params: IProfile) {
    this.id = params.id;
    this.firstName = params.firstName;
    this.phoneNum = params.phoneNum;
    this.delivery = params.delivery;
  }
}
