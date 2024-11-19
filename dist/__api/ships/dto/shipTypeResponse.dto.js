"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipTypeResponseDto = void 0;
const shipStatusResponse_dto_1 = require("@/api/ships/dto/shipStatusResponse.dto");
class ShipTypeResponseDto {
    /** 함선 타입 ID */
    id;
    /** 함선 타입 이름 */
    name;
    /** 함선 타입 스테이터스 */
    status;
    constructor(shipType) {
        this.id = shipType.id;
        this.name = shipType.name;
        this.status = new shipStatusResponse_dto_1.ShipStatusResponseDto(shipType.status);
    }
}
exports.ShipTypeResponseDto = ShipTypeResponseDto;
//# sourceMappingURL=shipTypeResponse.dto.js.map