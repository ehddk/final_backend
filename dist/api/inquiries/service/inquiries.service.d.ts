import { UserRepository } from "@/api/users/repository/user/user.repository";
import { InquiryResponseDTO } from "@/api/inquiries/dto/inquiryResponse.dto";
import { InquiryRepository } from "@/api/inquiries/repository/inquiry.repository";
import { InquiriesService } from "@/api/inquiries/service/inquiries.service.type";
export declare class InquiriesServiceImpl implements InquiriesService {
    private readonly _inquiryRepository;
    private readonly _userRepository;
    constructor(inquiryRepository: InquiryRepository, userRepository: UserRepository);
    createInquiry(userId: string, inquiry: Omit<IInquiry, "id" | "author">): Promise<InquiryResponseDTO>;
    getInquiries({ limit, offset, }: {
        limit?: number;
        offset?: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: InquiryResponseDTO[];
        next: string | null;
    }>;
    getInquiryDetail(inquiryId: string): Promise<InquiryResponseDTO | null>;
    updateInquiry(inquiryId: string, updatedInquiry: Omit<IInquiry, "id" | "author">): Promise<void>;
    deleteInquiry(inquiryId: string): Promise<void>;
}
