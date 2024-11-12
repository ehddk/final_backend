export class ShipType implements IShipType {
  /** 함선 타입 ID */
  id: string;
  /** 함선 타입 이름 */
  name: string;
  /** 함선 타입 설명 */
  description?: string | undefined;
  /** 함선 타입 기본 스테이터스 */
  status: IShipStatus;
  /** 함선 타입 이미지 */
  image?: string | undefined;
  /** 함선 타입 슬롯 수 */
  slotCount: number;
  constructor(params: IShipType) {
    this.id = params.id;
    this.name = params.name;
    this.description = params.description;
    this.status = params.status;
    this.image = params.image;
    this.slotCount = params.slotCount;
  }
}
