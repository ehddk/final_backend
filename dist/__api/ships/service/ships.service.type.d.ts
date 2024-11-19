import { ShipResponseDto } from "@/api/ships/dto/shipResponse.dto";
export interface ShipService {
    /** 함대의 모든 함선 조회 */
    getFleetShipsList(fleetID: string): Promise<ShipResponseDto[]>;
    /** 유저의 기함 조회 */
    getFlagshipInfo(userId: string): Promise<ShipResponseDto | null>;
    /** 함선 ID로 조회 */
    getShipInfo(shipId: string): Promise<ShipResponseDto | null>;
    /** 함선 생성 */
    createShip(params: Omit<IShip, "id">): Promise<ShipResponseDto>;
    /** 함선 업데이트 */
    updateShip(shipId: string, params: Partial<IShip>): Promise<void>;
    /** 함선 삭제 */
    deleteShip(shipId: string): Promise<void>;
}
