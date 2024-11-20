import { NextFunction, Request, Response } from "express";
import { InquiriesService } from "@/api/inquiries/service/inquiries.service.type";


export default class InquiriesController {

  private readonly _inquiriesService: InquiriesService;
  constructor(_inquiriesService: InquiriesService) {
    this._inquiriesService = _inquiriesService;

    this.getInquiries = this.getInquiries.bind(this);
    this.getInquiryDetail = this.getInquiryDetail.bind(this);
    this.createInquiry = this.createInquiry.bind(this);
  }

  /** 1:1문의 목록 조회 */
  async getInquiries(
    req: Request<
      getInquiriesRequest["path"],
      getInquiriesResponse,
      getInquiriesRequest["body"],
      getInquiriesRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { limit, offset } = req.query;
    const userId = req.user.userId;
    console.log("UserId:", userId);
    try {
      const inquiries = await this._inquiriesService.getInquiries({
        userId,
        limit,
        offset,
      });

      res.send(inquiries);
    } catch (error) {
      next(error);
    }
  }

  /** 1:1문의 상세 조회 */
  async getInquiryDetail(
    req: Request<
      getInquiryDetailRequest["path"],
      getInquiryDetailResponse,
      getInquiryDetailRequest["body"],
      getInquiryDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { inquiryId } = req.params;
    try {
      const inquiry = await this._inquiriesService.getInquiryDetail(inquiryId);

      res.send(inquiry);
    } catch (error) {
      next(error);
    }
  }

  /** 1:1문의 작성 */
  async createInquiry(
    req: Request<
      createInquiryRequest["path"],
      createInquiryResponse,
      createInquiryRequest["body"],
      createInquiryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const status = "Processing";
    const { inquiryType, title, content } = req.body;
    try {
      const inquiry = await this._inquiriesService.createInquiry(req.user.userId, {
        inquiryType,
        title,
        content,
        status,
      });

      res.send(inquiry);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

}
