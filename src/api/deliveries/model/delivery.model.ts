import { IDelivery } from "../@types/delivery.type";

export class Delivery implements IDelivery {
    id:string;
    userId: string;
    name:string; //배송지와 연결된 유저명
    postalCode:number; //우편번호
    defaultAddress: string; // 기본 주소
    detailAddress: string; // 상세 주소
    number:string;  //폰번호
    isDefault?:boolean; //기본 배송지 여부
   
    constructor(user:IUser,params: IDelivery) {
      this.id=params.id;
      this.userId = user.id;
      this.name = params.name;
      this.postalCode = params.postalCode;
      this.defaultAddress = params.defaultAddress;
      this.detailAddress=params.detailAddress;
      this.number=params.number;
      this.isDefault=params.isDefault;
    }
  }
  