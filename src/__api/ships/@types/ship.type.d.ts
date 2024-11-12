interface IShip {
  /** 함선 ID */
  id: string;
  /** 사용자 */
  user?: IUser;
  /** 함대 기함 여부 */
  isFleetFlagship: boolean;
  /** 유저 기함 여부 */
  isUserFlagship: boolean;
  /** 함대 (임시적으로 문자열) */
  fleet?: string;
  /** 소유자 */
  owner?: IUser;
  /** 함선 이름 */
  name: string; // 적어도 1글자 이상
  /** 함선 타입 */
  type: IShipType;
  /** 함선 스테이터스 */
  status: IShipStatus;
  /** 함선 좌표 x */
  positionX: number;
  /** 함선 좌표 y */
  positionY: number;
  /** 아이템 배치 슬롯 */
  slot?: IShipSlot[];
}

interface IShipStatus {
  /** 스테이터스 ID */
  id: string;
  /** 공격력 */
  attack: number; // 0 이상
  /** 방어력 */
  defense: number; // 0 이상
  /** 체력 */
  health: number; // 0 이상
  /** 쉴드 */
  shield: number; // 0 이상
  /** 속도 */
  speed: number; // 0 이상
}

interface IShipType {
  /** 함선 타입 ID */
  id: string;
  /** 함선 타입 이름 */
  name: string; // 적어도 1글자 이상
  /** 함선 타입 설명 */
  description?: string; // 적어도 1글자 이상
  /** 함선 타입 스테이터스 */
  status: IShipStatus;
  /** 이미지 */
  image?: string;
  /** 아이템 슬롯 개수 */
  slotCount: number;
}

interface IShipSlot {
  /** 슬롯 ID */
  id: string;
  /** 장착 아이템 (임시적으로 string 혹은 null) */
  item?: string;
}
