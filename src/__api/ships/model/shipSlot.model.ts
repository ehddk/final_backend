export class ShipSlot implements IShipSlot {
  /** 함선 슬롯 ID */
  id: string;
  /** 함선 슬롯 아이템 */
  item: string | undefined; // TODO : 아이템 모델 작성 후 수정
  constructor(params: IShipSlot) {
    this.id = params.id;
    this.item = params.item;
  }
}
