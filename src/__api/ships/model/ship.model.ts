export class Ship implements IShip {
  /** 함선 ID */
  id: string;
  /** 사용자 ID */
  user?: IUser | undefined;
  /** 함대 기함 여부 */
  isFleetFlagship: boolean;
  /** 유저 기함 여부 */
  isUserFlagship: boolean;
  /** 함대 ID */
  fleet?: string | undefined; // TODO : 함대 모델 작성 후 수정
  /** 소유자 ID */
  owner?: IUser | undefined;
  /** 함선 이름 */
  name: string;
  /** 함선 타입 */
  type: IShipType;
  /** 함선 스테이터스 */
  status: IShipStatus;
  /** 현재 함선의 X 좌표 */
  positionX: number;
  /** 현재 함선의 Y 좌표 */
  positionY: number;
  /** 함선 슬롯 */
  slot?: IShipSlot[] | undefined;
  constructor(params: IShip) {
    this.id = params.id;
    this.user = params.user;
    this.isFleetFlagship = params.isFleetFlagship;
    this.isUserFlagship = params.isUserFlagship;
    this.fleet = params.fleet;
    this.owner = params.owner;
    this.name = params.name;
    this.type = params.type;
    this.status = params.status;
    this.positionX = params.positionX;
    this.positionY = params.positionY;
    this.slot = params.slot;
  }
}
