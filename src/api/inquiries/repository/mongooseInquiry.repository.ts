import HttpException from "@/api/common/exceptions/http.exception";
import { MongooseInquiry } from "@/api/inquiries/model/inquiry.schema";
import { InquiryRepository } from "@/api/inquiries/repository/inquiry.repository";

export class MongooseInquiryRepository implements InquiryRepository {
  async findAllWithPagination({
    userId,
    offset,
    limit,
  }: {
    userId: string;
    offset: number;
    limit: number;
  }): Promise<{
    totalCount: number;
    prev: string | null;
    results: IInquiry[];
    next: string | null;
  }> {
    const offsetValue = Number(offset) || 0;
    const limitValue = Number(limit) || 10;
    // throw new Error("Method not implemented.");
    const list = await MongooseInquiry.find({"author": userId})
      .limit(limitValue)
      .skip(offsetValue)
      .populate({
        path: "author",
        populate: {
          path: "profile",
        },
      })
      .sort({ createdAt: -1 });

    const totalCount = await MongooseInquiry.find({"author": userId}).countDocuments();

    return {
      totalCount,
      results: list,
      prev:
        offsetValue - limitValue >= 0
          ? `?offset=${offsetValue - limitValue}&limit=${limitValue}`
          : null,
      next:
        offsetValue + limitValue < totalCount
          ? `?offset=${offsetValue + limitValue}&limit=${limitValue}`
          : null,
    };
  }

  async save(inquiry: Omit<IInquiry, "id">): Promise<IInquiry> {
    const newInquiry = new MongooseInquiry({
      ...inquiry,
    });

    await newInquiry.save();

    return newInquiry;
  }
  async findAll(userId: string): Promise<IInquiry[]> {
    const values = await MongooseInquiry.find({ "author": userId }).populate({
      path: "author",
      populate: {
        path: "profile",
      },
    });

    return values;
  }
  async findById(id: string): Promise<IInquiry | null> {
    const inquiry = await MongooseInquiry.findById(id).populate({
      path: "author",
      populate: {
        path: "profile",
      },
    });
    return inquiry;
  }
  async update(inquiryId: string, updateInquiryInfo: Partial<IInquiry>): Promise<IInquiry> {
    const results = await MongooseInquiry.findByIdAndUpdate(
      inquiryId,
      updateInquiryInfo
    );

    if (!results) {
      throw new HttpException(404, "1:1문의을 찾을 수 없습니다.");
    }

    return results;
  }
  async delete(inquiryId: string): Promise<void> {
    await MongooseInquiry.deleteOne({ _id: inquiryId });

    return;
  }
}
