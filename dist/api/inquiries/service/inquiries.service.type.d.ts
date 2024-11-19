import { InquiryResponseDTO } from "@/api/inquiries/dto/inquiryResponse.dto";
export interface InquiriesService {
    /** 1:1문의 생성 */
    createInquiry(userId: string, inquiry: Omit<IInquiry, "id" | "author" | "createdAt">): Promise<InquiryResponseDTO>;
    /** 1:1문의 목록 조회 */
    getInquiries({ limit, offset, }: {
        limit?: number;
        offset?: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: InquiryResponseDTO[];
        next: string | null;
    }>;
    /** 1:1문의 조회 */
    getInquiryDetail(id: string): Promise<InquiryResponseDTO | null>;
    /** 1:1문의 수정 */
    updateInquiry(inquiryId: string, updatedInquiry: Omit<IInquiry, "id" | "author" | "createdAt">): Promise<void>;
    /** 1:1문의 삭제 */
    deleteInquiry(inquiryId: string): Promise<void>;
}
