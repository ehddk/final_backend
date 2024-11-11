/** 함대 함선 요청 타입 */
type getFleetShipsListRequest = {
  params?: getFleetShipsListRequestParams;
  path: getFleetShipsListRequestPath;
  body?: getFleetShipsListRequestBody;
};
/** 함대 함선 요청 경로
 * @property {string} fleetId 함대 ID
 */
type getFleetShipsListRequestPath = {
  fleetId: string;
};

type getFleetShipsListRequestParams = {};

type getFleetShipsListRequestBody = {};

type getFleetShipsListResponse = {};
/** 함대 기함 요청 경로
 * @property {string} userId 사용자 ID
 */
type getFlagshipInfoRequestPath = {
  userId: string;
};

type getFlagshipInfoRequestParams = {};

type getFlagshipInfoRequestBody = {};
/** 기함 정보 요청 타입 */
type getFlagshipInfoRequest = {
  params?: getFlagshipInfoRequestParams;
  path: getFlagshipInfoRequestPath;
  body?: getFlagshipInfoRequestBody;
};

type getFlagshipInfoResponse = {};

/** 함선 정보 요청 타입 */
type getShipInfoRequest = {
  params?: getShipInfoRequestParams;
  path: getShipInfoRequestPath;
  body?: getShipInfoRequestBody;
};

/** 함선 정보 요청 경로 */
type getShipInfoRequestPath = {
  shipId: string;
};

type getShipInfoRequestParams = {};

type getShipInfoRequestBody = {};

type getShipInfoResponse = {};

/** 함선 생성 요청 타입 */
type createShipRequest = {
  params?: createShipRequestParams;
  path?: createShipRequestPath;
  body: createShipRequestBody;
};

type createShipRequestPath = {};

type createShipRequestParams = {};
/** 함선 생성 요청 Body */
type createShipRequestBody = Omit<IShip, "id">;

type createShipResponse = {};
