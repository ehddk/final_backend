import { ShipResponseDto } from "@/api/ships/dto/shipResponse.dto";
export interface AdminShipService {
    /** 모든 함선 조회 (운영자) */
    getShips(): Promise<ShipResponseDto[]>;
    /** 함선 ID로 조회 (운영자) */
    getShip(id: string): Promise<ShipResponseDto | null>;
    /** 함선 타입 ID로 조회 (운영자) */
    getShipType(id: string): Promise<IShipType>;
    /** 모든 함선 슬롯 조회 (운영자) */
    getShipSlots(): Promise<IShipSlot[]>;
    /** 함선 슬롯 ID로 조회 (운영자) */
    getShipSlot(id: string): Promise<IShipSlot | null>;
    /** 함선 상태 ID로 조회 */
    getShipStatus(id: string): Promise<IShipStatus>;
    /** 함선 생성 (운영자) */
    createShip(params: Omit<IShip, "id">): Promise<IShip>;
    /** 함선 타입 생성 (운영자) */
    createShipType(params: Omit<IShipType, "id">): Promise<IShipType>;
    /** 함선 슬롯 생성 (운영자) */
    createShipSlot(params: Omit<IShipSlot, "id">): Promise<IShipSlot>;
    /** 함선 상태 생성 */
    createShipStatus(params: Omit<IShipStatus, "id">): Promise<IShipStatus>;
    /** 함선 업데이트 (운영자) */
    updateShip(id: string, params: Partial<IShip>): Promise<void>;
    /** 함선 타입 업데이트 (운영자) */
    updateShipType(id: string, params: Partial<IShipType>): Promise<void>;
    /** 함선 슬롯 업데이트 (운영자) */
    updateShipSlot(id: string, params: Partial<IShipSlot>): Promise<void>;
    /** 함선 상태 업데이트 */
    updateShipStatus(id: string, params: Partial<IShipStatus>): Promise<void>;
    /** 함선 삭제 (운영자) */
    deleteShip(id: string): Promise<void>;
    /** 여러 함선 삭제 (운영자) */
    deleteShips(ids: string[]): Promise<void>;
    /** 함선 타입 삭제 (운영자) */
    deleteShipType(id: string): Promise<void>;
    /** 함선 슬롯 삭제 (운영자) */
    deleteShipSlot(id: string): Promise<void>;
    /** 함선 상태 삭제 */
    deleteShipStatus(id: string): Promise<void>;
}
