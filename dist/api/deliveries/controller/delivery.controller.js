"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeliveryController {
    _deliveryService;
    constructor(_deliveryService) {
        this._deliveryService = _deliveryService;
        this.getDeliveries = this.getDeliveries.bind(this);
        this.getDeliveryDetail = this.getDeliveryDetail.bind(this);
        this.createDelivery = this.createDelivery.bind(this);
        this.updateDelivery = this.updateDelivery.bind(this);
        this.deleteDelivery = this.deleteDelivery.bind(this);
    }
    /**배송지 목록 조회 */
    async getDeliveries(req, res, next) {
        //const {userId}=req.params;
        try {
            const userId = req.user.userId;
            const values = await this._deliveryService.getDeliveries(userId);
            res.send(values);
        }
        catch (error) {
            // throw new HttpException(404,'배송지 조회 중 오류가 발생하였습니다.')
            next(error);
        }
    }
    /* 배송지 상세 조회 */
    async getDeliveryDetail(req, res, next) {
        const userId = req.user.userId;
        const { deliveryId } = req.params;
        try {
            const value = await this._deliveryService.getDeliveryDetail(userId, deliveryId);
            // console.log('value인줄',value)
            return !value
                ? res.status(404).send({ message: '배송지를 찾을 수 없습니다.' })
                : res.send(value);
            res.send(value); //처음에 return value로 했다가 무한로딩됐음.생각해보니까 res.send를 사용해야 클라이언트에 보내짐! 
        }
        catch (error) {
            next(error);
        }
    }
    /**배송지 생성 */
    /**순서 바꾸기 전 오류 */
    // async createDelivery(
    //     req:Request<createDeliveryRequest["path"],
    //     createDeliveryRequest["body"],
    //     createDeliveryRequest["params"],
    //     createDeliveryResponse>,
    //     res:Response,
    //     next:NextFunction
    // ){
    //     const{name,postalCode,defaultAddress,detailAddress,number}=req.body;
    //     try{
    //       const delivery = await this._deliveryService.createDelivery({
    //         name,postalCode,defaultAddress,detailAddress,number
    //       })
    //     }
    // }
    async createDelivery(req, res, next) {
        const { name, postalCode, defaultAddress, detailAddress, number } = req.body;
        try {
            // const {userId}=req.params;
            const userId = req.user.userId;
            console.log('userIdDELi', userId);
            const delivery = await this._deliveryService.createDelivery(userId, {
                name, postalCode,
                defaultAddress, detailAddress,
                number
            });
            res.send(delivery);
            console.log('deve', delivery);
        }
        catch (error) {
            next(error);
        }
    }
    /**배송지 수정 */
    async updateDelivery(req, res, next) {
        const { deliveryId } = req.params;
        try {
            const userId = req.user.userId;
            await this._deliveryService.updateDelivery(userId, deliveryId, req.body);
            //res.status(204).json();
            res.send('수정 성공');
        }
        catch (error) {
            next(error);
        }
    }
    /**배송지 삭제 */
    async deleteDelivery(req, res, next) {
        const { deliveryId } = req.params;
        try {
            const userId = req.user.userId;
            await this._deliveryService.deleteDelivery(userId, deliveryId);
            res.send("삭제 성공");
        }
        catch (error) {
            next(error);
        }
    }
}
exports.default = DeliveryController;
//# sourceMappingURL=delivery.controller.js.map