export interface ShipTypeRepository {
    /** 함선 타입 저장 */
    save(shipType: Omit<IShipType, "id">): Promise<IShipType>;
    /** 모든 함선 타입 조회 */
    findAll(): Promise<IShipType[]>;
    /** 함선 타입 id로 조회 */
    findById(id: string): Promise<IShipType | null>;
    /** 함선 타입 업데이트 */
    update(shipTypeId: string, updateShipTypeInfo: Partial<IShipType>): Promise<void>;
    /** 함선 타입 삭제 */
    delete(shipTypeId: string): Promise<void>;
}
