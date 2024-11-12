import { UserRepository } from "@/api/users/repository/user/user.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/orders/repository/order.repository";
import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";
import { OrdersService } from "@/api/orders/service/orders.service.type";
import { OrderItemRepository } from "@/api/orderItems/repository/orderItem.repository";

export class OrdersServiceImpl implements OrdersService {
  private readonly _orderRepository: OrderRepository;
  private readonly _userRepository: UserRepository;
  private readonly _orderItemRepository: OrderItemRepository;

  constructor(
    orderRepository: OrderRepository,
    userRepository: UserRepository,
    orderItemRepository: OrderItemRepository
  ) {
    this._orderRepository = orderRepository;
    this._userRepository = userRepository;
    this._orderItemRepository = orderItemRepository;
  }

  /** 주문 생성 */
  async createOrder(
    userId: string,
    order: Omit<IOrder, "id">
  ): Promise<OrderResponseDTO> {
    const user = await this._userRepository.findById(userId);

    if (!user) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    // cartItems를 orderItems로 매핑
    const orderItem: IOrderItem[] =
      (order.cartToOrder.cartItem || []).map((cartItem: ICartItem) => ({
        id: "", // 빈 id 추가 (혹은 자동 생성된 id로 대체될 것)
        product: {
          productName: cartItem.product.productName, // 상품명
          sales: cartItem.product.sales, // 상품 가격
        },
        quantity: cartItem.quantity,
        totalPrice: cartItem.totalPrice,
        orderItemStatus: "PAYMENT_PENDING",
        orderId: "", // orderId 필드 추가 (나중에 설정될 값)
      })) || [];

    // 새 주문 객체 생성 (orderItems 포함)
    const newOrder: IOrder = {
      id: "", // 빈 문자열로 설정 (자동 생성될 id를 나중에 할당)
      ...order,
      orderItem, // 매핑된 orderItem 배열 포함
      createdAt: new Date(),
      orderStatus: "PAYMENT_PENDING",
    };

    // 데이터베이스에 주문 저장
    const savedOrder = await this._orderRepository.save(newOrder);

    // 주문 아이디(orderId)로 orderItem을 업데이트
    const updatedOrderItems = orderItem.map((item) => ({
      ...item,
      orderId: savedOrder.id, // 저장된 주문의 id로 orderId 업데이트
    }));

    // 새로운 주문 항목을 데이터베이스에 저장
    await Promise.all(
      updatedOrderItems.map(
        (item) => this._orderItemRepository.save(item) // 각 항목을 DB에 저장
      )
    );

    const newOrders = user.orders?.concat(savedOrder);

    // 유저의 주문 목록 업데이트
    await this._userRepository.update(user.id, {
      orders: newOrders,
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
