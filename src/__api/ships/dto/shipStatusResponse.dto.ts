export class ShipStatusResponseDto {
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
  constructor(shipStatus: IShipStatus) {
    this.id = shipStatus.id;
    this.attack = shipStatus.attack;
    this.defense = shipStatus.defense;
    this.health = shipStatus.health;
    this.shield = shipStatus.shield;
    this.speed = shipStatus.speed;
  }
}
