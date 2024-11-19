import { ShipSlotResponseDto } from "@/api/ships/dto/shipSlotResponse.dto";
import { ShipStatusResponseDto } from "@/api/ships/dto/shipStatusResponse.dto";
import { ShipTypeResponseDto } from "@/api/ships/dto/shipTypeResponse.dto";

export class ShipResponseDto {
  /** 함선 ID */
  id: string;
  /** 사용자 ID */
  user?: string;
  /** 함선 이름 */
  name: string;
  /** 함선 타입 */
  type: ShipTypeResponseDto;
  /** 함선의 현재 스테이터스 */
  status: ShipStatusResponseDto;
  /** 현재 함선의 X 좌표 */
  positionX: number;
  /** 현재 함선의 Y 좌표 */
  positionY: number;
  /** 함선 슬롯 */
  slot?: ShipSlotResponseDto[] | null;

  constructor(ship: IShip) {
    this.id = ship.id;
    this.user = ship.user?.id;
    this.name = ship.name;
    this.type = new ShipTypeResponseDto(ship.type);
    this.status = new ShipStatusResponseDto(ship.status);
    this.positionX = ship.positionX;
    this.positionY = ship.positionY;
    this.slot = ship.slot?.map((slot) => new ShipSlotResponseDto(slot));
    console.log(this.slot);
  }
}
