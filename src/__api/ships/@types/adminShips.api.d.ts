/* 함선 리스트 (운영자) 요청 */
type getAdminShipsListRequest = {
  params?: getAdminShipsListRequestParams;
  path?: getAdminShipsListRequestPath;
  body?: getAdminShipsListRequestBody;
};

type getAdminShipsListRequestPath = {};

type getAdminShipsListRequestParams = {};

type getAdminShipsListRequestBody = {};

type getAdminShipsListResponse = {};

/* 함선 정보 (운영자) 요청 */
type getAdminShipInfoRequest = {
  params?: getAdminShipInfoRequestParams;
  path: getAdminShipInfoRequestPath;
  body?: getAdminShipInfoRequestBody;
};

/** 함선 정보 (운영자) 요청 경로
 * @property {string} shipId 함선 ID
 */
type getAdminShipInfoRequestPath = {
  shipId: string;
};

type getAdminShipInfoRequestParams = {};

type getAdminShipInfoRequestBody = {};

type getAdminShipInfoResponse = {};

/* 함선 생성 요청 */
type createAdminShipRequest = {
  params?: createAdminShipRequestParams;
  path?: createAdminShipRequestPath;
  body: createAdminShipRequestBody;
};

type createAdminShipRequestPath = {};

type createAdminShipRequestParams = {};

/** 함선 생성 요청 바디 */
type createAdminShipRequestBody = Omit<IShip, "id">;

type createAdminShipResponse = {};

/* 함선 수정 요청 */
type updateAdminShipRequest = {
  params?: updateAdminShipRequestParams;
  path: updateAdminShipRequestPath;
  body: updateAdminShipRequestBody;
};

/** 함선 수정 요청 경로
 * @property {string} shipId 함선 ID
 */
type updateAdminShipRequestPath = {
  shipId: string;
};

type updateAdminShipRequestParams = {};

/** 함선 수정 요청 바디 */
type updateAdminShipRequestBody = Omit<IShip, "id">;

type updateAdminShipResponse = {};

/* 함선 삭제 요청 */
type deleteAdminShipRequest = {
  params?: deleteAdminShipRequestParams;
  path: deleteAdminShipRequestPath;
  body?: deleteAdminShipRequestBody;
};

/** 함선 삭제 요청 경로
 * @property {string} shipId 함선 ID
 */
type deleteAdminShipRequestPath = {
  shipId: string;
};

type deleteAdminShipRequestParams = {};

type deleteAdminShipRequestBody = {};

type deleteAdminShipResponse = {};

/* 여러 함선 삭제 요청 */
type deleteAdminShipsRequest = {
  params?: deleteAdminShipsRequestParams;
  path?: deleteAdminShipsRequestPath;
  body: deleteAdminShipsRequestBody;
};

type deleteAdminShipsRequestPath = {};

type deleteAdminShipsRequestParams = {};

/** 여러 함선 삭제 요청 바디
 * @property {string[]} shipIds 함선 ID 리스트
 */
type deleteAdminShipsRequestBody = {
  shipIds: string[];
};

type deleteAdminShipsResponse = {};
