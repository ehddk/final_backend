export interface ShipStatusRepository {
  /** 함선 상태 저장 */
  save(shipStatus: Omit<IShipStatus, "id">): Promise<IShipStatus>;
  /** 모든 함선 상태 조회 */
  findAll(): Promise<IShipStatus[]>;
  /** 함선 상태 id로 조회 */
  findById(id: string): Promise<IShipStatus | null>;
  /** 함선 상태 업데이트 */
  update(shipStatusId: string, updateShipStatusInfo: Partial<IShipStatus>): Promise<void>;
  /** 함선 상태 삭제 */
  delete(shipStatusId: string): Promise<void>;
}
