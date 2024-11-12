type RoleType = "user" | "admin";

interface IProfile {
  /** ID */
  id: string;
  /** 이름 */
  firstName: string;
  /** 성 */
  lastName?: string;
  /** 휴대폰번호 */
  phoneNum: string;
  /** 배송지 */
  //delivery: IDelivery | string;
  delivery:IDelivery[];
}

interface IUser {
  /** ID */
  id: string;
  name?:string;
  /** 아이디 */
  loginId: string;
  /** 비밀번호 */
  password?: string;
  /** 이메일  (unique) */
  email: string;
  /** 역할 */
  role: RoleType;
  /** salt */
  salt?: string;
  /** 프로필 */
  profile: IProfile;
  /** 카트 */
  cart?: ICart;
  /** 주문 목록 */
  orders?: IOrder[];
}
