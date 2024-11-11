type getBoardsRequestPath = {};

type getBoardsRequestBody = {};

type getBoardsRequestParams = {};

/** 게시판 목록 조회 요청 */
type getBoardsRequest = {
  path?: getBoardsRequestPath;
  body?: getBoardsRequestBody;
  params?: getBoardsRequestParams;
};

/** 게시판 목록 조회 응답 */
type getBoardsResponse = Array<IBoard>;

type createBoardRequestPath = {};

type createBoardRequestParams = {};

type createBoardRequestBody = {
  /** 게시판 이름 */
  name: string;
  /** 게시판 이미지 */
  thumbnail?: string;
};

/** 게시판 생성 요청 */
type createBoardRequest = {
  path?: createBoardRequestPath;
  params?: createBoardRequestParams;
  body: createBoardRequestBody;
};

type createBoardResponse = IBoard;

type getBoardDetailRequestPath = {
  boardId: string;
};

type getBoardDetailRequestParams = {};

type getBoardDetailRequestBody = {};

/** 게시판 상세 조회 요청 */
type getBoardDetailRequest = {
  path: getBoardDetailRequestPath;
  params?: getBoardDetailRequestParams;
  body?: getBoardDetailRequestBody;
};

/** 게시판 상세 조회 응답 */
type getBoardDetailResponse = IBoard | null;
