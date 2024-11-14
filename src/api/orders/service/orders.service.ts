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
    order: Omit<IOrder, "id" | "orderItem">
  ): Promise<OrderResponseDTO> {
    const user = await this._userRepository.findById(userId);

    if (!user) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    const newOrder: IOrder = {
      id: "", // MongoDB에서 자동 생성될 ID로 대체
      user,
      deliveryAddress: order.deliveryAddress,
      deliveryRequest: order.deliveryRequest,
      createdAt: new Date(),
      paymentMethod: order.paymentMethod,
      orderItem: [], // 기본적으로 빈 배열로 설정
      totalProductPrice: order.totalProductPrice,
      shippingFee: order.shippingFee,
      totalPaymentAmount: order.totalPaymentAmount,
      orderStatus: "PAYMENT_PENDING",
    };

    // 데이터베이스에 주문 저장
    const savedOrder = await this._orderRepository.save(newOrder);

    // 유저의 주문 목록 업데이트
    const updatedOrders = user.orders
      ? user.orders.concat(savedOrder)
      : [savedOrder];
    await this._userRepository.update(user.id, {
      orders: updatedOrders,
    });

    return new OrderResponseDTO(savedOrder);
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
    updatedOrder: Partial<Pick<IOrder, "deliveryRequest" | "orderStatus">>
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
