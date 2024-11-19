"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipStatusResponseDto = void 0;
class ShipStatusResponseDto {
    /** 스테이터스 ID */
    id;
    /** 공격력 */
    attack;
    /** 방어력 */
    defense;
    /** 체력 */
    health;
    /** 쉴드 */
    shield;
    /** 이동속도 */
    speed;
    constructor(shipStatus) {
        this.id = shipStatus.id;
        this.attack = shipStatus.attack;
        this.defense = shipStatus.defense;
        this.health = shipStatus.health;
        this.shield = shipStatus.shield;
        this.speed = shipStatus.speed;
    }
}
exports.ShipStatusResponseDto = ShipStatusResponseDto;
//# sourceMappingURL=shipStatusResponse.dto.js.map