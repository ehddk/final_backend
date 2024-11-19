"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersServiceImpl = void 0;
const http_exception_1 = __importDefault(require("@/api/common/exceptions/http.exception"));
const orderResponse_dto_1 = require("@/api/orders/dto/orderResponse.dto");
class OrdersServiceImpl {
    _orderRepository;
    _userRepository;
    _orderItemRepository;
    constructor(orderRepository, userRepository, orderItemRepository) {
        this._orderRepository = orderRepository;
        this._userRepository = userRepository;
        this._orderItemRepository = orderItemRepository;
    }
    /** 주문 생성 */
    async createOrder(userId, order) {
        const user = await this._userRepository.findById(userId);
        if (!user) {
            throw new http_exception_1.default(404, "작성자를 찾을 수 없습니다.");
        }
        const userInfo = user.profile;
        const orderItems = await Promise.all(order.orderItem.map(async (item) => {
            const orderItem = {
                orderItemId: "", // MongoDB에서 자동 생성될 ID로 대체
                product: { id: item.product }, // 상품 정보 (item.product에 해당하는 값)
                quantity: item.quantity, // 주문 수량
                totalPrice: item.totalPrice,
                orderItemStatus: "PAYMENT_PENDING", // 주문 상태 (상태에 맞게 설정)
            };
            return this._orderItemRepository.save(orderItem); // 각 orderItem을 저장
        }));
        const newOrder = {
            id: "", // MongoDB에서 자동 생성될 ID로 대체
            userId: user.id,
            userInfo,
            deliveryAddress: order.deliveryAddress,
            deliveryRequest: order.deliveryRequest,
            createdAt: new Date(),
            paymentMethod: order.paymentMethod,
            orderItem: orderItems,
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
        return new orderResponse_dto_1.OrderResponseDTO(savedOrder);
    }
    /** 주문 목록 조회 */
    async getOrders({ userId, limit, offset, }) {
        const orders = await this._orderRepository.findAllWithPagination({
            userId,
            limit,
            offset,
        });
        return {
            totalCount: orders.totalCount,
            prev: orders.prev,
            results: orders.results.map((order) => new orderResponse_dto_1.OrderResponseDTO(order)),
            next: orders.next,
        };
    }
    /** 주문 상세 조회 */
    async getOrderDetail(orderId) {
        const order = await this._orderRepository.findById(orderId);
        if (!order) {
            throw new http_exception_1.default(404, "주문을 찾을 수 없습니다.");
        }
        return new orderResponse_dto_1.OrderResponseDTO(order);
    }
    /** 주문 수정 */
    async updateOrder(orderId, params) {
        const findOrder = await this._orderRepository.findById(orderId);
        if (!findOrder) {
            throw new http_exception_1.default(404, "수정할 주문을 찾을 수 없습니다.");
        }
        // orderItem이 배열이므로, 각각 업데이트가 필요
        if (params.orderItem && Array.isArray(params.orderItem)) {
            // orderItem 배열에서 하나씩 업데이트 수행
            const updatedOrderItems = await Promise.all(params.orderItem.map(async (item, index) => {
                const currentItem = findOrder.orderItem[index];
                if (!currentItem) {
                    throw new http_exception_1.default(404, `OrderItem ID ${index}를 찾을 수 없습니다.`);
                }
                return await this._orderItemRepository.update(currentItem.id, item);
            }));
            // 주문의 나머지 필드 업데이트
            await this._orderRepository.update(orderId, {
                ...params,
                orderItem: updatedOrderItems,
            });
        }
        else {
            // orderItem 업데이트 없이 주문의 나머지 필드만 수정
            await this._orderRepository.update(orderId, {
                ...params,
            });
        }
        return;
    }
    /** 주문 삭제 */
    async deleteOrder(orderId) {
        const findOrder = await this._orderRepository.findById(orderId);
        if (!findOrder) {
            throw new http_exception_1.default(404, "삭제할 주문을 찾을 수 없습니다.");
        }
        // orderItem 배열의 각 아이템 삭제
        if (Array.isArray(findOrder.orderItem)) {
            await Promise.all(findOrder.orderItem.map(async (item) => {
                await this._orderItemRepository.delete(item.id);
            }));
        }
        await this._orderRepository.delete(orderId);
        return;
    }
}
exports.OrdersServiceImpl = OrdersServiceImpl;
//# sourceMappingURL=orders.service.js.map