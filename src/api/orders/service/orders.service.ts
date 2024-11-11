import { UserRepository } from "@/api/users/repository/user/user.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/orders/repository/order.repository";
import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";
import { OrdersService } from "@/api/orders/service/orders.service.type";

export class OrdersServiceImpl implements OrdersService {
  private readonly _orderRepository: OrderRepository;
  private readonly _userRepository: UserRepository;

  constructor(
    orderRepository: OrderRepository,
    userRepository: UserRepository,
  ) {
    this._orderRepository = orderRepository;
    this._userRepository = userRepository;
  }

  /** 주문 생성 */
  async createOrder(
    userId: string,
    order: Omit<IOrder, "id" | "user">
  ): Promise<OrderResponseDTO> {
    const user = await this._userRepository.findById(userId);

    if (!user) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    const newOrder = await this._orderRepository.save({
      ...order,
      user,
    });

    const newOrders = user.orders?.concat(newOrder);

    await this._userRepository.update(user.id, {
      orders: newOrders,
    });

    return new OrderResponseDTO(newOrder);
  }

  /** 주문 목록 조회 */
  async getOrders({
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: OrderResponseDTO[];
    next: string | null;
  }> {
    const orders = await this._orderRepository.findAllWithPagination({
      limit,
      offset,
    });

    return {
      totalCount: orders.totalCount,
      prev: orders.prev,
      results: orders.results.map((order) => new OrderResponseDTO(order)),
      next: orders.next,
    };
  }

  /** 주문 상세 조회 */
  async getOrderDetail(orderId: string): Promise<OrderResponseDTO | null> {
    const order = await this._orderRepository.findById(orderId);

    if (!order) {
      throw new HttpException(404, "주문을 찾을 수 없습니다.");
    }

    return new OrderResponseDTO(order);
  }

  /** 주문 수정 */
  async updateOrder(
    orderId: string,
    updatedOrder: Partial<
      Pick<IOrder, "shippingAddress" | "deliveryRequest" | "orderStatus">
    >
  ): Promise<void> {
    const existingOrder = await this._orderRepository.findById(orderId);

    if (!existingOrder) {
      throw new HttpException(404, "수정할 주문을 찾을 수 없습니다.");
    }

    await this._orderRepository.update(orderId, updatedOrder);
  }

  /** 주문 삭제 */
  async deleteOrder(orderId: string): Promise<void> {
    const existingOrder = await this._orderRepository.findById(orderId);

    if (!existingOrder) {
      throw new HttpException(404, "삭제할 주문을 찾을 수 없습니다.");
    }

    await this._orderRepository.delete(orderId);
  }
}
