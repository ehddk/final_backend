import { UserRepository } from "@/api/users/repository/user/user.repository";
import { InquiryResponseDTO } from "@/api/inquiries/dto/inquiryResponse.dto";
import { InquiryRepository } from "@/api/inquiries/repository/inquiry.repository";

import HttpException from "@/api/common/exceptions/http.exception";
import { InquiriesService } from "@/api/inquiries/service/inquiries.service.type";

export class InquiriesServiceImpl implements InquiriesService {
  private readonly _inquiryRepository: InquiryRepository;
  private readonly _userRepository: UserRepository;
  constructor(inquiryRepository: InquiryRepository, userRepository: UserRepository) {
    this._inquiryRepository = inquiryRepository;
    this._userRepository = userRepository;
  }

  async createInquiry(
    userId: string,
    inquiry: Omit<IInquiry, "id" | "author">
  ): Promise<InquiryResponseDTO> {
    const author = await this._userRepository.findById(userId);

    if (!author) {
      throw new HttpException(404, "작성자를 찾을 수 없습니다.");
    }

    const newInquiry = await this._inquiryRepository.save({
      ...inquiry,
      author,
    });

    const newInquiries = author.inquiries?.concat(newInquiry);

    await this._userRepository.update(author.id, {
      inquiries: newInquiries,
    });

    return new InquiryResponseDTO(newInquiry);
  }
  async getInquiries({
    limit,
    offset,
  }: {
    limit?: number;
    offset?: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: InquiryResponseDTO[];
    next: string | null;
  }> {
    const inquiries = await this._inquiryRepository.findAllWithPagination({
      limit,
      offset,
    });

    return {
      totalCount: inquiries.totalCount,
      prev: inquiries.prev,
      results: inquiries.results.map((inquiry) => new InquiryResponseDTO(inquiry)),
      next: inquiries.next,
    };
  }
  async getInquiryDetail(inquiryId: string): Promise<InquiryResponseDTO | null> {
    const inquiry = await this._inquiryRepository.findById(inquiryId);

    if (!inquiry) {
      throw new HttpException(404, "1:1문의을 찾을 수 없습니다.");
    }

    return new InquiryResponseDTO(inquiry);
  }
  async updateInquiry(
    inquiryId: string,
    updatedInquiry: Omit<IInquiry, "id" | "author">
  ): Promise<void> {
    await this._inquiryRepository.update(inquiryId, updatedInquiry);

    return;
  }
  async deleteInquiry(inquiryId: string): Promise<void> {
    await this._inquiryRepository.delete(inquiryId);
  }
}
