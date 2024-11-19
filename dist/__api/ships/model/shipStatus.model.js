"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipStatus = void 0;
class ShipStatus {
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
    constructor(params) {
        this.id = params.id;
        this.attack = params.attack;
        this.defense = params.defense;
        this.health = params.health;
        this.shield = params.shield;
        this.speed = params.speed;
    }
}
exports.ShipStatus = ShipStatus;
//# sourceMappingURL=shipStatus.model.js.map