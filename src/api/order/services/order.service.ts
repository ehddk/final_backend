import { AxiosInstance } from "axios";
import { pathToUrl } from "../../../utils/url";

const ORDER_ROUTES = {
  GET_ORDERS: "/api/orders",
  GET_ORDER_DETAILS: "/api/orders/:orderId",
  CREATE_ORDER: "/api/orders",
  UPDATE_ORDER: "/api/orders/:orderId",
  DELETE_ORDER: "/api/orders/:orderId",
} as const;

export class OrderService {
  constructor(private _ajax: AxiosInstance) {}

  /** 주문 목록 조회 */
  async getOrders(req: getOrdersRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getOrdersResponse>(
      pathToUrl(ORDER_ROUTES.GET_ORDERS, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }

  /** 주문 상세 조회 */
  async getOrderDetail(req: getOrderDetailRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.get<getOrderDetailResponse>(
      pathToUrl(ORDER_ROUTES.GET_ORDER_DETAILS, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }

  /** 주문 생성 */
  async createOrder(req: createOrderRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.post<createOrderResponse>(
      pathToUrl(ORDER_ROUTES.CREATE_ORDER, path),
      body,
      {
        params,
      }
    );

    return data;
  }

  /** 주문 수정 */
  async updateOrder(req: updateOrderRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.put<updateOrderResponse>(
      pathToUrl(ORDER_ROUTES.UPDATE_ORDER, path),
      body,
      {
        params,
      }
    );

    return data;
  }

  /** 주문 삭제 */
  async deleteOrder(req: deleteOrderRequest) {
    const { path, params, body } = req;

    const { data } = await this._ajax.delete<void>(
      pathToUrl(ORDER_ROUTES.DELETE_ORDER, path),
      {
        params,
        data: body,
      }
    );

    return data;
  }
}
