import { NextFunction, Request, Response } from "express";
import { DeliveryService } from "../service/delivery.service.type";
import HttpException from "@/api/common/exceptions/http.exception";

export default class DeliveryController{
  private readonly _deliveryService:DeliveryService;
  constructor(_deliveryService:DeliveryService){
    this._deliveryService= _deliveryService;

    this.getDeliveries=this.getDeliveries.bind(this);
    this.getDeliveryDetail=this.getDeliveryDetail.bind(this);
    this.createDelivery=this.createDelivery.bind(this);
    this.updateDelivery=this.updateDelivery.bind(this);
    this.deleteDelivery=this.deleteDelivery.bind(this);
  }

    /**배송지 목록 조회 */
    async getDeliveries(
        req:Request<getDeliveriesRequest["path"],
        getDeliveriesResponse,
        getDeliveriesRequest["body"],
        getDeliveriesRequest["params"]
       >,
        res:Response,
        next:NextFunction
    ){
      //const {userId}=req.params;
      try{
      const values=await this._deliveryService.getDeliveries("1");
      res.send(values)
      }
      catch(error){
        // throw new HttpException(404,'배송지 조회 중 오류가 발생하였습니다.')
        next(error)
      }
 
    }
     /* 배송지 상세 조회 */
    async getDeliveryDetail(
      req:Request<getDeliveryDetailRequest["path"],
      getDeliveryDetailResponse,
      getDeliveryDetailRequest["body"],
      getDeliveryDetailRequest["params"]
     >,
      res:Response,
      next:NextFunction
    ){
      const {userId,deliveryId}=req.params;
      try{
        const value=await this._deliveryService.getDeliveryDetail(userId,deliveryId);
        // console.log('value인줄',value)
        return !value 
        ? res.status(404).send({ message: '배송지를 찾을 수 없습니다.' })
        : res.send(value);
        res.send(value) //처음에 return value로 했다가 무한로딩됐음.생각해보니까 res.send를 사용해야 클라이언트에 보내짐! 
      }catch(error){
        next(error)
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
      async createDelivery(
        req:Request<createDeliveryRequest["params"],
        createDeliveryResponse,
        createDeliveryRequest["body"],
        createDeliveryRequest["path"]>,
        res:Response,
        next:NextFunction
    ){
        
        const{name,postalCode,defaultAddress,detailAddress,number}=req.body;
        try{
           // const {userId}=req.params;
          const delivery = await this._deliveryService.createDelivery(
           "12",
            {
             name,postalCode,
             defaultAddress,detailAddress,
             number
          });
          res.send(delivery);
          console.log('deve',delivery)
        }catch(error){
          next(error)
        }
    }
      /**배송지 수정 */
      async updateDelivery(
        req:Request<
        updateDeliveryRequest["params"], 
        updateDeliveryResponse,       
        updateDeliveryRequest["body"],    
        updateDeliveryRequest["path"] 
       >,
        res:Response,
        next:NextFunction
      ){
        const {deliveryId}=req.params;
        try{
          const userId="123";
          await this._deliveryService.updateDelivery(userId,deliveryId,req.body);
          res.status(204).json();
        }catch(error){
          next(error)
      }
       
      }
      /**배송지 삭제 */
      async deleteDelivery(
        req:Request<
        deleteDeliveryRequest["path"],
        deleteDeliveryRequest["body"],
        deleteDeliveryRequest["params"],
        deleteDeliveryResponse>,
        res:Response,
        next:NextFunction
      ){
        const {deliveryId}=req.params;
        try{
          const userId="123";
          await this._deliveryService.deleteDelivery(userId,deliveryId);
          res.send("삭제 성공")
        }catch(error){
          next(error)
        }
      }

}