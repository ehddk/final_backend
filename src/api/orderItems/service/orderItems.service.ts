import { UserRepository } from "@/api/users/repository/user/user.repository";
import { OrderItemResponseDTO } from "@/api/orderItems/dto/orderItemResponse.dto";
import { OrderItemRepository } from "@/api/orderItems/repository/orderItem.repository";
import { OrderItemsService } from "@/api/orderItems/service/orderItems.service.type";
import HttpException from "@/api/common/exceptions/http.exception";

export class OrderItemsServiceImpl implements OrderItemsService {
  private readonly _orderItemRepository: OrderItemRepository;
  private readonly _userRepository: UserRepository;
  constructor(
    orderItemRepository: OrderItemRepository,
    userRepository: UserRepository
  ) {
    this._orderItemRepository = orderItemRepository;
    this._userRepository = userRepository;
  }

  async createOrderItem(
    userId: string,
    orderItem: Omit<IOrderItem, "id">
  ): Promise<OrderItemResponseDTO> {
    const user = await this._userRepository.findById(userId);

    if (!user) {
      throw new HttpException(404, "회원정보를 찾을 수 없습니다.");
    }

    const newOrderItem = await this._orderItemRepository.save({
      ...orderItem,
    });
    // 해당 주문을 찾아 orderItem 배열에 새 항목을 추가
    const updatedOrders =
      user.orders?.map((order) => {
        if (order.id === orderItem.orderId) {
          // 주문 ID가 일치하면 해당 주문의 orderItem 배열에 새로운 항목을 추가
          return {
            ...order,
            orderItem: [...order.orderItem, newOrderItem], // 새 항목 추가
          };
        }
        return order;
      }) || [];

    // 수정된 주문 목록을 사용자 정보에 반영
    await this._userRepository.update(user.id, {
      orders: updatedOrders,
    });

    return new OrderItemResponseDTO(newOrderItem);
  }
  async getOrderItems(): Promise<OrderItemResponseDTO[]> {
    const orderItems = await this._orderItemRepository.findAll();
    return orderItems.map((orderItem) => new OrderItemResponseDTO(orderItem));
  }
  async getOrderItemDetail(
    orderItemId: string
  ): Promise<OrderItemResponseDTO | null> {
    const orderItem = await this._orderItemRepository.findById(orderItemId);

    if (!orderItem) {
      throw new HttpException(404, "주문 상품을 찾을 수 없습니다.");
    }

    return new OrderItemResponseDTO(orderItem);
  }
  async updateOrderItem(
    orderItemId: string,
    updatedOrderItem: Omit<IOrderItem, "id" | "product">
  ): Promise<void> {
    await this._orderItemRepository.update(orderItemId, updatedOrderItem);

    return;
  }
  async deleteOrderItem(orderItemId: string): Promise<void> {
    await this._orderItemRepository.delete(orderItemId);
  }
}
