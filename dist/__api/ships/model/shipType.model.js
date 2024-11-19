"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipType = void 0;
class ShipType {
    /** 함선 타입 ID */
    id;
    /** 함선 타입 이름 */
    name;
    /** 함선 타입 설명 */
    description;
    /** 함선 타입 기본 스테이터스 */
    status;
    /** 함선 타입 이미지 */
    image;
    /** 함선 타입 슬롯 수 */
    slotCount;
    constructor(params) {
        this.id = params.id;
        this.name = params.name;
        this.description = params.description;
        this.status = params.status;
        this.image = params.image;
        this.slotCount = params.slotCount;
    }
}
exports.ShipType = ShipType;
//# sourceMappingURL=shipType.model.js.map