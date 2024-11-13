import { UserRepository } from "@/api/users/repository/user/user.repository";
import { OrderItemResponseDTO } from "@/api/orderItems/dto/orderItemResponse.dto";
import { OrderItemRepository } from "@/api/orderItems/repository/orderItem.repository";
import { OrderItemsService } from "@/api/orderItems/service/orderItems.service.type";
import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/orders/repository/order.repository";

export class OrderItemsServiceImpl implements OrderItemsService {
  private readonly _orderItemRepository: OrderItemRepository;
  private readonly _orderRepository: OrderRepository;
  constructor(
    orderItemRepository: OrderItemRepository,
    orderRepository: OrderRepository
  ) {
    this._orderItemRepository = orderItemRepository;
    this._orderRepository = orderRepository;
  }

  async createOrderItem(
    orderId: string,
    orderItem: Omit<IOrderItem, "id">
  ): Promise<OrderItemResponseDTO> {
    const order = await this._orderRepository.findById(orderId);

    if (!order) {
      throw new HttpException(404, "주문을 찾을 수 없습니다.");
    }

    const newOrderItem: IOrderItem = {
      ...orderItem,
      id: "", // MongoDB에서 자동 생성될 ID로 대체
      orderItemStatus: "PAYMENT_PENDING",
    };

    // 데이터베이스에 새로운 주문 항목 저장
    const savedOrderItem = await this._orderItemRepository.save(newOrderItem);

    // 주문의 orderItem 배열에 새로운 항목 추가
    const updatedOrderItems = order.orderItem.concat(savedOrderItem);
    await this._orderRepository.update(order.id, {
      orderItem: updatedOrderItems,
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
