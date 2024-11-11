interface IDelivery{
    id: string;   // 배송지 ID
    userId: string; // 유저 ID (추가 필드)
    name:string; //배송지와 연결된 유저명
    postalCode:number; //우편번호
    defaultAddress: string; // 기본 주소
    detailAddress: string; // 상세 주소
    number:string;  //폰번호
    isDefault?:boolean; //기본 배송지 여부

}

// 응답 타입
export interface IDeliveryResponse {
    //status: boolean;
    //message: string;
    data: IDelivery[]
  }