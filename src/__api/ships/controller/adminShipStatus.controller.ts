import e, { Request, Response, NextFunction } from "express";
import { AdminShipService } from "@/api/ships/service/adminShips.service.type";

export default class AdminShipStatusController {
  constructor(private _adminShipService: AdminShipService) {
    this.getAdminShipStatus = this.getAdminShipStatus.bind(this);
    this.createAdminShipStatus = this.createAdminShipStatus.bind(this);
    this.updateAdminShipStatus = this.updateAdminShipStatus.bind(this);
    this.deleteAdminShipStatus = this.deleteAdminShipStatus.bind(this);
  }

  /** 함선 상태 조회 (관리자) */
  async getAdminShipStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { statusId } = req.params;
      const shipStatus = await this._adminShipService.getShipStatus(statusId);
      res.send(shipStatus);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 상태 생성 (관리자) */
  async createAdminShipStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const shipStatus = await this._adminShipService.createShipStatus(
        req.body
      );
      res.send(shipStatus);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 상태 수정 (관리자) */
  async updateAdminShipStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { statusId } = req.params;
      await this._adminShipService.updateShipStatus(statusId, req.body);
      res.send();
    } catch (error) {
      next(error);
    }
  }

  /** 함선 상태 삭제 (관리자) */
  async deleteAdminShipStatus(req: Request, res: Response, next: NextFunction) {
    try {
      const { statusId } = req.params;
      await this._adminShipService.deleteShipStatus(statusId);
      res.send();
    } catch (error) {
      next(error);
    }
  }
}
