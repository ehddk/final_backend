import { ShipStatusResponseDto } from "@/api/ships/dto/shipStatusResponse.dto";

export class ShipTypeResponseDto {
  /** 함선 타입 ID */
  id: string;
  /** 함선 타입 이름 */
  name: string;
  /** 함선 타입 스테이터스 */
  status: ShipStatusResponseDto;

  constructor(shipType: IShipType) {
    this.id = shipType.id;
    this.name = shipType.name;
    this.status = new ShipStatusResponseDto(shipType.status);
  }
}
