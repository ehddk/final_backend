import { Request, Response, NextFunction } from "express";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";

export default class AdminShipTypesController {
  constructor(private _adminShipService: AdminShipService) {
    this.getAdminShipType = this.getAdminShipType.bind(this);
    this.createAdminShipType = this.createAdminShipType.bind(this);
    this.updateAdminShipType = this.updateAdminShipType.bind(this);
    this.deleteAdminShipType = this.deleteAdminShipType.bind(this);
  }

  /** 함선 종류 조회 (관리자) */
  async getAdminShipType(req: Request, res: Response, next: NextFunction) {
    try {
      const { typeId } = req.params;

      const shipType = await this._adminShipService.getShipType(typeId);

      res.send(shipType);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 종류 생성 (관리자) */
  async createAdminShipType(req: Request, res: Response, next: NextFunction) {
    try {
      const shipType = await this._adminShipService.createShipType(req.body);

      res.send(shipType);
    } catch (error) {
      next(error);
    }
  }
  /** 함선 종류 수정 (관리자) */
  async updateAdminShipType(req: Request, res: Response, next: NextFunction) {
    try {
      const { typeId } = req.params;

      await this._adminShipService.updateShipType(typeId, req.body);

      res.send();
    } catch (error) {
      next(error);
    }
  }
  /** 함선 종류 삭제 (관리자) */
  async deleteAdminShipType(req: Request, res: Response, next: NextFunction) {
    try {
      const { typeId } = req.params;

      await this._adminShipService.deleteShipType(typeId);

      res.send();
    } catch (error) {
      next(error);
    }
  }
}
