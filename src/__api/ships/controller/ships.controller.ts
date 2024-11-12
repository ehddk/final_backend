import { Request, Response, NextFunction } from "express";
import { ShipService } from "@/api/ships/service/ships.service.type";

export default class ShipsController {
  constructor(private _shipService: ShipService) {
    this.getFleetShipsList = this.getFleetShipsList.bind(this);
    this.getFlagshipInfo = this.getFlagshipInfo.bind(this);
    this.getShipInfo = this.getShipInfo.bind(this);
    this.createShip = this.createShip.bind(this);
    this.updateShip = this.updateShip.bind(this);
    this.deleteShip = this.deleteShip.bind(this);
  }

  /** 함대의 함선 리스트 조회 */
  async getFleetShipsList(
    req: Request<
      getFleetShipsListRequest["path"],
      getFleetShipsListResponse,
      getFleetShipsListRequest["body"],
      getFleetShipsListRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { fleetId } = req.params;
      const ships = await this._shipService.getFleetShipsList(fleetId);
      res.send(ships);
    } catch (error) {
      next(error);
    }
  }
  /** 기함 정보 조회 */
  async getFlagshipInfo(
    req: Request<
      getFlagshipInfoRequest["path"],
      getFlagshipInfoResponse,
      getFlagshipInfoRequest["body"],
      getFlagshipInfoRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { userId } = req.params;
      const flagship = await this._shipService.getFlagshipInfo(userId);
      console.log(flagship);
      res.send(flagship);
    } catch (error) {
      next(error);
    }
  }

  /** 특정 함선 정보 조회 */
  async getShipInfo(
    req: Request<
      getShipInfoRequest["path"],
      getShipInfoResponse,
      getShipInfoRequest["body"],
      getShipInfoRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { shipId } = req.params;
      const ship = await this._shipService.getShipInfo(shipId);
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 만들기  */
  async createShip(
    req: Request<
      createShipRequest["path"],
      createShipResponse,
      createShipRequest["body"],
      createShipRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const ship = await this._shipService.createShip(req.body);
      res.send(ship);
    } catch (error) {
      next(error);
    }
  }

  /** 함선 정보 수정 */
  async updateShip(req: Request, res: Response, next: NextFunction) {
    try {
      const { shipId } = req.params;
      await this._shipService.updateShip(shipId, req.body);
      res.send();
    } catch (error) {
      next(error);
    }
  }

  /** 함선 삭제 */
  async deleteShip(req: Request, res: Response, next: NextFunction) {
    try {
      const { shipId } = req.params;
      await this._shipService.deleteShip(shipId);
      res.send();
    } catch (error) {
      next(error);
    }
  }
}
