import { UserRepository } from "@/api/users/repository/user/user.repository";
import { OrderItemResponseDTO } from "@/api/orderItems/dto/orderItemResponse.dto";
import { OrderItemRepository } from "@/api/orderItems/repository/orderItem.repository";
import { OrderItemsService } from "@/api/orderItems/service/orderItems.service.type";
import HttpException from "@/api/common/exceptions/http.exception";
import { OrderRepository } from "@/api/orders/repository/order.repository";
import { ProductRepository } from "@/api/products/repository/product.repository";

export class OrderItemsServiceImpl implements OrderItemsService {
  private readonly _orderItemRepository: OrderItemRepository;
  private readonly _orderRepository: OrderRepository;
  private readonly _productRepository: ProductRepository;
  constructor(
    orderItemRepository: OrderItemRepository,
    orderRepository: OrderRepository,
    productRepository: ProductRepository
  ) {
    this._orderItemRepository = orderItemRepository;
    this._orderRepository = orderRepository;
    this._productRepository = productRepository;
  }

  async createOrderItem(
    orderId: string,
    orderItem: Omit<IOrderItem, "id">
  ): Promise<OrderItemResponseDTO> {
    const order = await this._orderRepository.findById(orderId);

    if (!order) {
      throw new HttpException(404, "주문을 찾을 수 없습니다.");
    }
    const productId =
      typeof orderItem.product === "string"
        ? orderItem.product
        : orderItem.product?.id;
    if (!productId) {
      throw new HttpException(400, "상품 ID가 유효하지 않습니다.");
    }
    const product = await this._productRepository.findById(productId);
    console.log("product:", product);
    if (!product) {
      throw new HttpException(404, "해당 상품를 찾을 수 없습니다.");
    }
    const newOrderItem: IOrderItem = {
      ...orderItem,
      id: "", // MongoDB에서 자동 생성될 ID로 대체
      orderId: order.id,
      product,
      quantity: orderItem.quantity,
      totalPrice: orderItem.totalPrice,
      orderItemStatus: "PAYMENT_PENDING",
    };

    // 데이터베이스에 새로운 주문 항목 저장
    const savedOrderItem = await this._orderItemRepository.save(
      order.id,
      newOrderItem
    );

    const updatedOrderItem = order.orderItem
      ? order.orderItem.concat(savedOrderItem)
      : [savedOrderItem];
    await this._orderRepository.update(order.id, {
      orderItem: updatedOrderItem,
    });
    return new OrderItemResponseDTO(savedOrderItem);
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
