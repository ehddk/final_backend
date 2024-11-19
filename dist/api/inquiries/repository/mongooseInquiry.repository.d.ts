import { InquiryRepository } from "@/api/inquiries/repository/inquiry.repository";
export declare class MongooseInquiryRepository implements InquiryRepository {
    findAllWithPagination({ offset, limit, }: {
        offset: number;
        limit: number;
    }): Promise<{
        totalCount: number;
        prev: string | null;
        results: IInquiry[];
        next: string | null;
    }>;
    save(inquiry: Omit<IInquiry, "id">): Promise<IInquiry>;
    findAll(): Promise<IInquiry[]>;
    findById(id: string): Promise<IInquiry | null>;
    update(inquiryId: string, updateInquiryInfo: Partial<IInquiry>): Promise<IInquiry>;
    delete(inquiryId: string): Promise<void>;
}
