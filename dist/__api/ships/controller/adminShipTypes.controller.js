"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminShipTypesController {
    _adminShipService;
    constructor(_adminShipService) {
        this._adminShipService = _adminShipService;
        this.getAdminShipType = this.getAdminShipType.bind(this);
        this.createAdminShipType = this.createAdminShipType.bind(this);
        this.updateAdminShipType = this.updateAdminShipType.bind(this);
        this.deleteAdminShipType = this.deleteAdminShipType.bind(this);
    }
    /** 함선 종류 조회 (관리자) */
    async getAdminShipType(req, res, next) {
        try {
            const { typeId } = req.params;
            const shipType = await this._adminShipService.getShipType(typeId);
            res.send(shipType);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 종류 생성 (관리자) */
    async createAdminShipType(req, res, next) {
        try {
            const shipType = await this._adminShipService.createShipType(req.body);
            res.send(shipType);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 종류 수정 (관리자) */
    async updateAdminShipType(req, res, next) {
        try {
            const { typeId } = req.params;
            await this._adminShipService.updateShipType(typeId, req.body);
            res.send();
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 종류 삭제 (관리자) */
    async deleteAdminShipType(req, res, next) {
        try {
            const { typeId } = req.params;
            await this._adminShipService.deleteShipType(typeId);
            res.send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminShipTypesController;
//# sourceMappingURL=adminShipTypes.controller.js.map