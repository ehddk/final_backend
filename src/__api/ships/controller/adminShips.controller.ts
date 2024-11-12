import { Request, Response, NextFunction } from "express";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";

export default class AdminShipsController {
  constructor(private _adminShipService: AdminShipService) {
    this.getAdminShipsList = this.getAdminShipsList.bind(this);
    this.getAdminShipInfo = this.getAdminShipInfo.bind(this);
    this.createAdminShip = this.createAdminShip.bind(this);
    this.updateAdminShip = this.updateAdminShip.bind(this);
    this.deleteAdminShip = this.deleteAdminShip.bind(this);
    this.deleteAdminShips = this.deleteAdminShips.bind(this);
  }

  /** 함선 목록 조회 (관리자) */
  async getAdminShipsList(req: Request, res: Response, next: NextFunction) {
    try {
      const ships = await this._adminShipService.getShips();

      res.send(ships);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 상세 조회 (관리자) */
  async getAdminShipInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const { shipId } = req.params;

      const ship = await this._adminShipService.getShip(shipId);

      res.send(ship);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 생성 (관리자) */
  async createAdminShip(
    req: Request<
      createAdminShipRequest["path"],
      createAdminShipResponse,
      createAdminShipRequest["body"],
      createAdminShipRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const ship = await this._adminShipService.createShip(req.body);

      res.send(ship);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 수정 (관리자) */
  async updateAdminShip(
    req: Request<
      updateAdminShipRequest["path"],
      updateAdminShipResponse,
      updateAdminShipRequest["body"],
      updateAdminShipRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { shipId } = req.params;

      await this._adminShipService.updateShip(shipId, req.body);

      res.send();
    } catch (error) {
      next(error);
    }
  }

  /** 함선 삭제 (관리자) */
  async deleteAdminShip(
    req: Request<
      deleteAdminShipRequest["path"],
      deleteAdminShipResponse,
      deleteAdminShipRequest["body"],
      deleteAdminShipRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { shipId } = req.params;

      await this._adminShipService.deleteShip(shipId);

      res.send();
    } catch (error) {
      next(error);
    }
  }

  /** 다수의 함선 삭제 (관리자) */
  async deleteAdminShips(
    req: Request<
      deleteAdminShipsRequest["path"],
      deleteAdminShipsResponse,
      deleteAdminShipsRequest["body"],
      deleteAdminShipsRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { shipIds } = req.body;

      await this._adminShipService.deleteShips(shipIds);

      res.send();
    } catch (error) {
      next(error);
    }
  }
}
