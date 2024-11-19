export interface ShipSlotRepository {
    /** 함선 슬롯 저장 */
    save(shipSlot: Omit<IShipSlot, "id">): Promise<IShipSlot>;
    /** 모든 함선 슬롯 조회 */
    findAll(): Promise<IShipSlot[]>;
    /** 함선 슬롯 id로 조회 */
    findById(id: string): Promise<IShipSlot | null>;
    /** 함선 슬롯 업데이트 */
    update(shipSlotId: string, updateShipSlotInfo: Partial<Omit<IShipSlot, "id">>): Promise<void>;
    /** 함선 슬롯 삭제 */
    delete(shipSlotId: string): Promise<void>;
}
