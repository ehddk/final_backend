export interface OrderItemRepository {
    /** 주문 상품 생성 */
    save(orderItem: Omit<IOrderItem, "id">): Promise<IOrderItem>;
    /** 주문 상품 목록 조회 */
    findAll(): Promise<IOrderItem[]>;
    /** ID로 주문 상품 조회 */
    findById(id: string): Promise<IOrderItem | null>;
    /** 주문 상품 수정 */
    update(orderItemId: string, updateOrderItemInfo: Partial<IOrderItem>): Promise<IOrderItem>;
    /** 주문 상품 삭제 */
    delete(orderItemId: string): Promise<void>;
}
