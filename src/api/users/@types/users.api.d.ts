/** 회원가입 (사용자페이지) */
type signUpRequestPath = {};
type signUpRequestParams = {};
type signUpRequestBody = {name: string;};

type signUpRequest = {
  params?: signUpRequestParams;
  path?: signUpRequestPath;
  body: signUpRequestBody;
};

type signUpResponse = IUser;


/** 내 정보 조회 (사용자페이지) */
type getMyInfoRequestPath = {userId:string;};
type getMyInfoRequestParams = {};
type getMyInfoRequestBody = {};

type getMyInfoRequest = {
  params?: getMyInfoRequestParams;
  path: getMyInfoRequestPath;
  body?: getMyInfoRequestBody;
};

type getMyInfoResponse = IUser | null;


/** 내 정보 조회 (아이디 기반_사용자페이지) */
type getMyInfoLoginIdRequestQuery = {loginId:string;};
type getMyInfoLoginIdRequestParams = {};
type getMyInfoLoginIdRequestBody = {};

type getMyInfoLoginIdRequest = {
  params?: getMyInfoLoginIdRequestParams;
  query: getMyInfoLoginIdRequestPath;
  body?: getMyInfoLoginIdRequestBody;
};

type getMyInfoLoginIdResponse = IUser | null;


/** 내 정보 조회 (이메일 기반_사용자페이지) */
type getMyInfoEmailRequestQuery = {email:string;};
type getMyInfoEmailRequestParams = {};
type getMyInfoEmailRequestBody = {};

type getMyInfoEmailRequest = {
  params?: getMyInfoEmailRequestParams;
  query: getMyInfoEmailRequestPath;
  body?: getMyInfoEmailRequestBody;
};

type getMyInfoEmailResponse = IUser | null;


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


/** 로그아웃 */
type logoutRequestPath={};
type logoutRequestParams={};
type logoutRequestBody={};

type logoutRequest={
  path?:logoutRequestPath,
  params?:logoutRequestParams,
  body?:logoutRequestBody
};

type logoutResponse=void;


/** 회원 탈퇴 */
type deleteUserPath={userId:string;};
type deleteUserParams={};
type deleteUserBody={};

type deleteUserRequest={
  path:deleteUserPath,
  params?:deleteUserParams,
  body?:deleteUserBody
};

type deleteUserResponse=void;