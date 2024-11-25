import { IDelivery } from "./delivery.type";
import { DeliveryResponseDTO } from "../dto/deliveryResponse.dto";

//params: 요청 경로에서 특정 값을 동적으로 받아오는 데 사용
declare global{
    /**배송지 목록 조회 */
    type getDeliveriesRequestPath={
        //userId:string;
    };
    type getDeliveriesRequestParams={};
    type getDeliveriesRequestBody={};
    type getDeliveriesRequest={
        path?:getDeliveriesRequestPath;
        params?:getDeliveriesRequestParams;
        body?:getDeliveriesRequestBody;
    }

    type getDeliveriesResponse=IDelivery;

    /**배송지 상세 조회(유저별) */
    type getDeliveryDetailRequestPath={
        userId:string;
        deliveryId:string;
    };
    type getDeliveryDetailRequestParams={};
    type getDeliveryDetailRequestBody={};
    type getDeliveryDetailRequest={
        path:getDeliveryDetailRequestPath,
        body?:getDeliveryDetailRequestBody,
        params?:getDeliveryDetailRequestParams
    };
    type getDeliveryDetailResponse=IDelivery;

     /**배송지 추가 */
    type createDeliveryRequestPath={
        userId:string;
    };
    type createDeliveryRequestParams={};
    type createDeliveryRequestBody=
        Omit<IDelivery,"id">;
    type createDeliveryRequest={
        path?:createDeliveryRequestPath;
        params?:createDeliveryRequestParams;
        body:createDeliveryRequestBody
    }
    type createDeliveryResponse=DeliveryResponseDTO

    /**배송지 수정 */
    type updateDeliveryRequestPath={};
    type updateDeliveryRequestParams={userId:string, deliveryId:string;};

    type updateDeliveryRequestBody=IDelivery;

    type updateDeliveryRequest={
        path?:updateDeliveryRequestPath,
        body:updateDeliveryRequestBody,
        params:updateDeliveryRequestParams
    }
    type updateDeliveryResponse=DeliveryResponseDTO;

    /**배송지 삭제 */
   type deleteDeliveryRequestPath={
    userId:string;
    deliveryId:string;
   };
   type deleteDeliveryRequestParams={};
   type deleteDeliveryRequestBody={};
   type deleteDeliveryRequest={
    path:deleteDeliveryRequestPath;
    body?:deleteDeliveryRequestBody,
    params?:deleteDeliveryRequestParams;
   };
   type deleteDeliveryResponse=void;
   
}