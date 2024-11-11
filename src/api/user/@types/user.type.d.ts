interface IUser {
    /** 회원 ID */
    userId: string;

    /** 회원명 */
    userName: string;

    /** 아이디 */
    userLoginId: string;

    /** 비밀번호 */
    userPassword: string;

    /** 비밀번호 확인 */
    userPasswordCheck: string;

    /** 이메일 */
    userEmail: string;

    /** 휴대폰번호 */
    userPhoneNum: number;
    
    /** 수신 동의(선택) */
    userAgreeToReceive: boolean;
  }