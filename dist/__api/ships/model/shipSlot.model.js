"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShipSlot = void 0;
class ShipSlot {
    /** 함선 슬롯 ID */
    id;
    /** 함선 슬롯 아이템 */
    item; // TODO : 아이템 모델 작성 후 수정
    constructor(params) {
        this.id = params.id;
        this.item = params.item;
    }
}
exports.ShipSlot = ShipSlot;
//# sourceMappingURL=shipSlot.model.js.map