"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AdminShipSlotsController {
    _adminShipService;
    constructor(_adminShipService) {
        this._adminShipService = _adminShipService;
        this.getAdminShipSlots = this.getAdminShipSlots.bind(this);
        this.getAdminShipSlot = this.getAdminShipSlot.bind(this);
        this.createAdminShipSlot = this.createAdminShipSlot.bind(this);
        this.updateAdminShipSlot = this.updateAdminShipSlot.bind(this);
        this.deleteAdminShipSlot = this.deleteAdminShipSlot.bind(this);
    }
    /** 함선 슬롯 목록 조회 (관리자) */
    async getAdminShipSlots(req, res, next) {
        try {
            const shipSlots = await this._adminShipService.getShipSlots();
            res.send(shipSlots);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 슬롯 상세 조회 (관리자) */
    async getAdminShipSlot(req, res, next) {
        try {
            const { slotId } = req.params;
            const shipSlot = await this._adminShipService.getShipSlot(slotId);
            res.send(shipSlot);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 슬롯 생성 (관리자) */
    async createAdminShipSlot(req, res, next) {
        try {
            const shipSlot = await this._adminShipService.createShipSlot(req.body);
            res.send(shipSlot);
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 슬롯 수정 (관리자) */
    async updateAdminShipSlot(req, res, next) {
        try {
            const { slotId } = req.params;
            await this._adminShipService.updateShipSlot(slotId, req.body);
            res.send();
        }
        catch (error) {
            next(error);
        }
    }
    /** 함선 슬롯 삭제 (관리자) */
    async deleteAdminShipSlot(req, res, next) {
        try {
            const { slotId } = req.params;
            await this._adminShipService.deleteShipSlot(slotId);
            res.send();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = AdminShipSlotsController;
//# sourceMappingURL=adminShipSlots.controller.js.map