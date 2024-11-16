import { UserRepository } from "@/api/users/repository/user/user.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/orders/repository/order.repository";
import { OrderResponseDTO } from "@/api/orders/dto/orderResponse.dto";
import { OrdersService } from "@/api/orders/service/orders.service.type";
import { OrderItemRepository } from "../repository/orderItem.repository";

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
    order: Omit<IOrder, "id" | "userInfo" | "orderItem"> & {
      orderItem: Omit<IOrderItem, "id">[];
    }
  ): Promise<OrderResponseDTO> {
    const user = await this._userRepository.findById(userId);

    if (!user) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }
    const userInfo: IProfile = user.profile;

    const orderItems: Omit<IOrderItem, "id">[] = await Promise.all(
      order.orderItem.map(async (item) => {
        const orderItem = {
          orderItemId: "", // MongoDB에서 자동 생성될 ID로 대체
          product:  { id: item.product }, // 상품 정보 (item.product에 해당하는 값)
          quantity: item.quantity, // 주문 수량
          totalPrice: item.totalPrice,
          orderItemStatus: "PAYMENT_PENDING" as OrderItemStatus, // 주문 상태 (상태에 맞게 설정)
        };
        return this._orderItemRepository.save(orderItem); // 각 orderItem을 저장
      })
    );

    const newOrder: IOrder = {
      id: "", // MongoDB에서 자동 생성될 ID로 대체
      userId: user.id,
      userInfo,
      deliveryAddress: order.deliveryAddress,
      deliveryRequest: order.deliveryRequest,
      createdAt: new Date(),
      paymentMethod: order.paymentMethod,
      orderItem: orderItems as IOrderItem[],
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
    userId, 
    limit,
    offset,
  }: {
    userId: string;
    limit?: number;
    offset?: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: OrderResponseDTO[];
    next: string | null;
  }> {
    const orders = await this._orderRepository.findAllWithPagination({
      userId,
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
  async updateOrder(orderId: string, params: Partial<IOrder>): Promise<void> {
    const findOrder = await this._orderRepository.findById(orderId);

    if (!findOrder) {
      throw new HttpException(404, "수정할 주문을 찾을 수 없습니다.");
    }

    // orderItem이 배열이므로, 각각 업데이트가 필요
    if (params.orderItem && Array.isArray(params.orderItem)) {
      // orderItem 배열에서 하나씩 업데이트 수행
      const updatedOrderItems = await Promise.all(
        params.orderItem.map(async (item, index) => {
          const currentItem = findOrder.orderItem[index];
          if (!currentItem) {
            throw new HttpException(
              404,
              `OrderItem ID ${index}를 찾을 수 없습니다.`
            );
          }
          return await this._orderItemRepository.update(currentItem.id, item);
        })
      );

      // 주문의 나머지 필드 업데이트
      await this._orderRepository.update(orderId, {
        ...params,
        orderItem: updatedOrderItems,
      });
    } else {
      // orderItem 업데이트 없이 주문의 나머지 필드만 수정
      await this._orderRepository.update(orderId, {
        ...params,
      });
    }

    return;
  }

  /** 주문 삭제 */
  async deleteOrder(orderId: string): Promise<void> {
    const findOrder = await this._orderRepository.findById(orderId);

    if (!findOrder) {
      throw new HttpException(404, "삭제할 주문을 찾을 수 없습니다.");
    }

    // orderItem 배열의 각 아이템 삭제
    if (Array.isArray(findOrder.orderItem)) {
      await Promise.all(
        findOrder.orderItem.map(async (item) => {
          await this._orderItemRepository.delete(item.id);
        })
      );
    }

    await this._orderRepository.delete(orderId);

    return;
  }
}
