export interface ShipRepository {
    /** 함선 저장 */
    save(ship: Omit<IShip, "id">): Promise<IShip>;
    /** 모든 함선 조회 */
    findAll(): Promise<IShip[]>;
    /** 함대의 모든 함선 조회 */
    findAllByFleet(id: string): Promise<IShip[]>;
    /** 사용자의 기함 조회 */
    findByUserAndFlagShip(user: IUser): Promise<IShip | null>;
    /** 함선 id로 조회 */
    findById(id: string): Promise<IShip | null>;
    /** 함선 업데이트 */
    update(shipId: string, updateShipInfo: Partial<IShip>): Promise<void>;
    /** 함선 삭제 */
    delete(shipId: string): Promise<void>;
}
