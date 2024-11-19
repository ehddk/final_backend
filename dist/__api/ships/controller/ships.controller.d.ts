import { Request, Response, NextFunction } from "express";
import { ShipService } from "@/api/ships/service/ships.service.type";
export default class ShipsController {
    private _shipService;
    constructor(_shipService: ShipService);
    /** 함대의 함선 리스트 조회 */
    getFleetShipsList(req: Request<getFleetShipsListRequest["path"], getFleetShipsListResponse, getFleetShipsListRequest["body"], getFleetShipsListRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 기함 정보 조회 */
    getFlagshipInfo(req: Request<getFlagshipInfoRequest["path"], getFlagshipInfoResponse, getFlagshipInfoRequest["body"], getFlagshipInfoRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 특정 함선 정보 조회 */
    getShipInfo(req: Request<getShipInfoRequest["path"], getShipInfoResponse, getShipInfoRequest["body"], getShipInfoRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 함선 만들기  */
    createShip(req: Request<createShipRequest["path"], createShipResponse, createShipRequest["body"], createShipRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 함선 정보 수정 */
    updateShip(req: Request, res: Response, next: NextFunction): Promise<void>;
    /** 함선 삭제 */
    deleteShip(req: Request, res: Response, next: NextFunction): Promise<void>;
}
