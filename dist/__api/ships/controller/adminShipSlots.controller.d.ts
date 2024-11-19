import { Request, Response, NextFunction } from "express";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";
export default class AdminShipSlotsController {
    private _adminShipService;
    constructor(_adminShipService: AdminShipService);
    /** 함선 슬롯 목록 조회 (관리자) */
    getAdminShipSlots(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 슬롯 상세 조회 (관리자) */
    getAdminShipSlot(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 슬롯 생성 (관리자) */
    createAdminShipSlot(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 슬롯 수정 (관리자) */
    updateAdminShipSlot(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 슬롯 삭제 (관리자) */
    deleteAdminShipSlot(req: Request, res: Response, next: NextFunction): Promise<void>;
}
