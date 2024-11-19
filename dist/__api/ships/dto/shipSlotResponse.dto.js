"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipSlotResponseDto = void 0;
class ShipSlotResponseDto {
    /** 함선 슬롯 ID */
    id;
    /** 함선 슬롯 아이템 */
    item;
    constructor(shipSlot) {
        this.id = shipSlot.id;
        this.item = shipSlot.item;
    }
}
exports.ShipSlotResponseDto = ShipSlotResponseDto;
//# sourceMappingURL=shipSlotResponse.dto.js.map