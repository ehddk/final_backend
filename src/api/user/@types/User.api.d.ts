// 회원 목록 조회
type getUsersRequestPath = {};
type getUsersRequestParams = {};
type getUsersRequestBody = {};

/** 회원 목록 조회 요청 */
type getUsersRequest = {
  path?: getUsersRequestPath;
  params?: getUsersRequestParams;
  body?: getUsersRequestBody;
};

/** 회원 목록 조회 응답 */
type getUsersResponse = {
  results: IUser[];
};


// 회원 상세 조회
type getUserDetailRequestPath = {userId: string;};
type getUserDetailRequestParams = {};
type getUserDetailRequestBody = {};

/** 회원 상세 조회 요청 */
type getUserDetailRequest = {
  path: getUserDetailRequestPath;
  params?: getUserDetailRequestParams;
  body?: getUserDetailRequestBody;
};

/** 회원 상세 조회 응답 */
type getUserDetailResponse = IUser;


// 회원 생성
type createUserRequestPath = {};
type createUserRequestParams = {};
type createUserRequestBody = {};

/** 회원 생성 요청 */
type createUserRequest = {
  path?: createUserRequestPath;
  params?: createUserRequestParams;
  body: createUserRequestBody;
};

/** 회원 생성 응답 */
type createUserResponse = IUser;


// 회원 수정
type updateUserRequestPath = {userId: string;};
type updateUserRequestParams = {};
type updateUserRequestBody = {};

/** 회원 수정 요청 */
type updateUserRequest = {
  path: updateUserRequestPath;
  params?: updateUserRequestParams;
  body: updateUserRequestBody;
};

/** 회원 수정 응답 */
type updateUserResponse = void;


// 회원 삭제
type deleteUserRequestPath = {userId: string;};
type deleteUserRequestParams = {};
type deleteUserRequestBody = {};

/** 회원 삭제 요청 */
type deleteUserRequest = {
  path: deleteUserRequestPath;
  params?: deleteUserRequestParams;
  body?: deleteUserRequestBody;
};

/** 회원 삭제 응답 */
type deleteUserResponse = void;