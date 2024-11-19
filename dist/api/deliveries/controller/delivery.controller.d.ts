import { NextFunction, Request, Response } from "express";
import { DeliveryService } from "../service/delivery.service.type";
export default class DeliveryController {
    private readonly _deliveryService;
    constructor(_deliveryService: DeliveryService);
    /**배송지 목록 조회 */
    getDeliveries(req: Request<getDeliveriesRequest["path"], getDeliveriesResponse, getDeliveriesRequest["body"], getDeliveriesRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    getDeliveryDetail(req: Request<getDeliveryDetailRequest["path"], getDeliveryDetailResponse, getDeliveryDetailRequest["body"], getDeliveryDetailRequest["params"]>, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    /**배송지 생성 */
    /**순서 바꾸기 전 오류 */
    createDelivery(req: Request<createDeliveryRequest["params"], createDeliveryResponse, createDeliveryRequest["body"], createDeliveryRequest["path"]>, res: Response, next: NextFunction): Promise<void>;
    /**배송지 수정 */
    updateDelivery(req: Request<updateDeliveryRequest["params"], updateDeliveryResponse, updateDeliveryRequest["body"], updateDeliveryRequest["path"]>, res: Response, next: NextFunction): Promise<void>;
    /**배송지 삭제 */
    deleteDelivery(req: Request<deleteDeliveryRequest["path"], deleteDeliveryRequest["body"], deleteDeliveryRequest["params"], deleteDeliveryResponse>, res: Response, next: NextFunction): Promise<void>;
}
