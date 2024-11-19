import { Request, Response, NextFunction } from "express";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";
export default class AdminShipsController {
    private _adminShipService;
    constructor(_adminShipService: AdminShipService);
    /** 함선 목록 조회 (관리자) */
    getAdminShipsList(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 상세 조회 (관리자) */
    getAdminShipInfo(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 생성 (관리자) */
    createAdminShip(req: Request<createAdminShipRequest["path"], createAdminShipResponse, createAdminShipRequest["body"], createAdminShipRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 함선 수정 (관리자) */
    updateAdminShip(req: Request<updateAdminShipRequest["path"], updateAdminShipResponse, updateAdminShipRequest["body"], updateAdminShipRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 함선 삭제 (관리자) */
    deleteAdminShip(req: Request<deleteAdminShipRequest["path"], deleteAdminShipResponse, deleteAdminShipRequest["body"], deleteAdminShipRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 다수의 함선 삭제 (관리자) */
    deleteAdminShips(req: Request<deleteAdminShipsRequest["path"], deleteAdminShipsResponse, deleteAdminShipsRequest["body"], deleteAdminShipsRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
