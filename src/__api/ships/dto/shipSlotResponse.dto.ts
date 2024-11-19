export class ShipSlotResponseDto {
  /** 함선 슬롯 ID */
  id: string;
  /** 함선 슬롯 아이템 */
  item?: string;
  constructor(shipSlot: IShipSlot) {
    this.id = shipSlot.id;
    this.item = shipSlot.item;
  }
}
