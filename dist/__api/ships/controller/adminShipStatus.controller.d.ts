import { Request, Response, NextFunction } from "express";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";
export default class AdminShipStatusController {
    private _adminShipService;
    constructor(_adminShipService: AdminShipService);
    /** 함선 상태 조회 (관리자) */
    getAdminShipStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 상태 생성 (관리자) */
    createAdminShipStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 상태 수정 (관리자) */
    updateAdminShipStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 상태 삭제 (관리자) */
    deleteAdminShipStatus(req: Request, res: Response, next: NextFunction): Promise<void>;
}
