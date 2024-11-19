"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminShipsController {
    _adminShipService;
    constructor(_adminShipService) {
        this._adminShipService = _adminShipService;
        this.getAdminShipsList = this.getAdminShipsList.bind(this);
        this.getAdminShipInfo = this.getAdminShipInfo.bind(this);
        this.createAdminShip = this.createAdminShip.bind(this);
        this.updateAdminShip = this.updateAdminShip.bind(this);
        this.deleteAdminShip = this.deleteAdminShip.bind(this);
        this.deleteAdminShips = this.deleteAdminShips.bind(this);
    }
    /** 함선 목록 조회 (관리자) */
    async getAdminShipsList(req, res, next) {
        try {
            const ships = await this._adminShipService.getShips();
            res.send(ships);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 상세 조회 (관리자) */
    async getAdminShipInfo(req, res, next) {
        try {
            const { shipId } = req.params;
            const ship = await this._adminShipService.getShip(shipId);
            res.send(ship);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 생성 (관리자) */
    async createAdminShip(req, res, next) {
        try {
            const ship = await this._adminShipService.createShip(req.body);
            res.send(ship);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 수정 (관리자) */
    async updateAdminShip(req, res, next) {
        try {
            const { shipId } = req.params;
            await this._adminShipService.updateShip(shipId, req.body);
            res.send();
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 삭제 (관리자) */
    async deleteAdminShip(req, res, next) {
        try {
            const { shipId } = req.params;
            await this._adminShipService.deleteShip(shipId);
            res.send();
        }
        catch (error) {
            next(error);
        }
    }
    /** 다수의 함선 삭제 (관리자) */
    async deleteAdminShips(req, res, next) {
        try {
            const { shipIds } = req.body;
            await this._adminShipService.deleteShips(shipIds);
            res.send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminShipsController;
//# sourceMappingURL=adminShips.controller.js.map