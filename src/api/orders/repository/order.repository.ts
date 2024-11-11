export interface OrderRepository {
  /** 주문 생성 */
  save(order: Omit<IOrder, "id">): Promise<IOrder>;

  /** 페이지네이션 목록 조회 */
  findAllWithPagination({
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: IOrder[];
    next: string | null;
  }>;

  /** 주문 목록 조회 */
  findAll(): Promise<IOrder[]>;

  /** ID로 주문 조회 */
  findById(orderId: string): Promise<IOrder | null>;

  /** 주문 수정 */
  update(orderId: string, updateOrderInfo: Partial<IOrder>): Promise<IOrder>;

  /** 주문 삭제 */
  delete(orderId: string): Promise<void>;
}
