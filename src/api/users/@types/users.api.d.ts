type signUpRequestPath = {};

type signUpRequestParams = {};

type signUpRequestBody = {
  /** 이름 */
  name: string;
};

/** 회원가입 (사용자페이지) */
type signUpRequest = {
  params?: signUpRequestParams;
  path?: signUpRequestPath;
  body: signUpRequestBody;
};

/** 회원가입 (사용자페이지) 응답 */
type signUpResponse = IUser;

type getMyInfoRequestPath = {
  /** 유저 ID */
  userId:string;
};

type getMyInfoRequestParams = {};

type getMyInfoRequestBody = {};

/** 내 정보 조회 (사용자페이지) */
type getMyInfoRequest = {
  params?: getMyInfoRequestParams;
  path: getMyInfoRequestPath;
  body?: getMyInfoRequestBody;
};

/** 내 정보 조회 (사용자페이지) 응답 */
type getMyInfoResponse = IUser | null;


/** 내 정보 수정 (사용자페이지) */
type updateMyInfoRequestPath = {userId:string;};
type updateMyInfoRequestParams = {};
type updateMyInfoRequestBody = Partial<IUser>;

type updateMyInfoRequest = {
  path: updateMyInfoRequestPath;
  params?: updateMyInfoRequestParams;
  body: updateMyInfoRequestBody;
}

type updateMyInfoResponse = void;