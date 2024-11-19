"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ship = void 0;
class Ship {
    /** 함선 ID */
    id;
    /** 사용자 ID */
    user;
    /** 함대 기함 여부 */
    isFleetFlagship;
    /** 유저 기함 여부 */
    isUserFlagship;
    /** 함대 ID */
    fleet; // TODO : 함대 모델 작성 후 수정
    /** 소유자 ID */
    owner;
    /** 함선 이름 */
    name;
    /** 함선 타입 */
    type;
    /** 함선 스테이터스 */
    status;
    /** 현재 함선의 X 좌표 */
    positionX;
    /** 현재 함선의 Y 좌표 */
    positionY;
    /** 함선 슬롯 */
    slot;
    constructor(params) {
        this.id = params.id;
        this.user = params.user;
        this.isFleetFlagship = params.isFleetFlagship;
        this.isUserFlagship = params.isUserFlagship;
        this.fleet = params.fleet;
        this.owner = params.owner;
        this.name = params.name;
        this.type = params.type;
        this.status = params.status;
        this.positionX = params.positionX;
        this.positionY = params.positionY;
        this.slot = params.slot;
    }
}
exports.Ship = Ship;
//# sourceMappingURL=ship.model.js.map