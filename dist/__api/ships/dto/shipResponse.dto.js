"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipResponseDto = void 0;
const shipSlotResponse_dto_1 = require("@/api/ships/dto/shipSlotResponse.dto");
const shipStatusResponse_dto_1 = require("@/api/ships/dto/shipStatusResponse.dto");
const shipTypeResponse_dto_1 = require("@/api/ships/dto/shipTypeResponse.dto");
class ShipResponseDto {
    /** 함선 ID */
    id;
    /** 사용자 ID */
    user;
    /** 함선 이름 */
    name;
    /** 함선 타입 */
    type;
    /** 함선의 현재 스테이터스 */
    status;
    /** 현재 함선의 X 좌표 */
    positionX;
    /** 현재 함선의 Y 좌표 */
    positionY;
    /** 함선 슬롯 */
    slot;
    constructor(ship) {
        this.id = ship.id;
        this.user = ship.user?.id;
        this.name = ship.name;
        this.type = new shipTypeResponse_dto_1.ShipTypeResponseDto(ship.type);
        this.status = new shipStatusResponse_dto_1.ShipStatusResponseDto(ship.status);
        this.positionX = ship.positionX;
        this.positionY = ship.positionY;
        this.slot = ship.slot?.map((slot) => new shipSlotResponse_dto_1.ShipSlotResponseDto(slot));
        console.log(this.slot);
    }
}
exports.ShipResponseDto = ShipResponseDto;
//# sourceMappingURL=shipResponse.dto.js.map