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
    orderItem: Omit<IOrderItem, "id" | "user">
  ): Promise<OrderItemResponseDTO> {
    const user = await this._userRepository.findById(userId);

    if (!user) {
      throw new HttpException(404, "회원정보를 찾을 수 없습니다.");
    }

    const newOrderItem = await this._orderItemRepository.save({
      ...orderItem,
      user,
    });

    const newOrderItems = user.carts?.orderItems?.concat(newOrderItem);

    await this._userRepository.update(user.id, {
      orderItems: newOrderItems,
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
    updatedOrderItem: Omit<IOrderItem, "id" | "product" | "user">
  ): Promise<void> {
    await this._orderItemRepository.update(orderItemId, updatedOrderItem);

    return;
  }
  async deleteOrderItem(orderItemId: string): Promise<void> {
    await this._orderItemRepository.delete(orderItemId);
  }
}
