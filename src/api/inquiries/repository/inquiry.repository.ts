export interface InquiryRepository {
  /** 1:1문의 생성 */
  save(inquiry: Omit<IInquiry, "id">): Promise<IInquiry>;
  /** 페이지네이션 목록 조회 */
  findAllWithPagination({
    limit,
    offset,
  }: {
    offset?: number;
    limit?: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: IInquiry[];
    next: string | null;
  }>;
  /** 1:1문의 목록 조회 */
  findAll(): Promise<IInquiry[]>;
  /** ID로 1:1문의 조회 */
  findById(id: string): Promise<IInquiry | null>;
  /** 1:1문의 수정 */
  update(inquiryId: string, updateInquiryInfo: Partial<IInquiry>): Promise<IInquiry>;
  /** 1:1문의 삭제 */
  delete(inquiryId: string): Promise<void>;
}
