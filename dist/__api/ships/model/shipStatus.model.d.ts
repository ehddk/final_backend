export declare class ShipStatus implements IShipStatus {
    /** 스테이터스 ID */
    id: string;
    /** 공격력 */
    attack: number;
    /** 방어력 */
    defense: number;
    /** 체력 */
    health: number;
    /** 쉴드 */
    shield: number;
    /** 이동속도 */
    speed: number;
    constructor(params: IShipStatus);
}
