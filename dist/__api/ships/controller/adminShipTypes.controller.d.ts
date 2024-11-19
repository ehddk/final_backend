import { Request, Response, NextFunction } from "express";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";
export default class AdminShipTypesController {
    private _adminShipService;
    constructor(_adminShipService: AdminShipService);
    /** 함선 종류 조회 (관리자) */
    getAdminShipType(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 종류 생성 (관리자) */
    createAdminShipType(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 종류 수정 (관리자) */
    updateAdminShipType(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 종류 삭제 (관리자) */
    deleteAdminShipType(req: Request, res: Response, next: NextFunction): Promise<void>;
}
