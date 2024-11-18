import { NextFunction, Request, Response } from "express";
import { InquiriesService } from "@/api/inquiries/service/inquiries.service.type";

export default class AdminInquiriesController {
  private readonly _inquiriesService: InquiriesService;
  constructor(_inquiriesService: InquiriesService) {
    this._inquiriesService = _inquiriesService;

    this.getInquiries = this.getInquiries.bind(this);
    this.getInquiryDetail = this.getInquiryDetail.bind(this);
    this.createInquiry = this.createInquiry.bind(this);
    this.updateInquiry = this.updateInquiry.bind(this);
    this.deleteInquiry = this.deleteInquiry.bind(this);
  }

  async getInquiries(
    req: Request<
      adminGetInquiriesRequest["path"],
      adminGetInquiriesResponse,
      adminGetInquiriesRequest["body"],
      adminGetInquiriesRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const inquiries = await this._inquiriesService.getInquiries({
        limit: req.query.limit,
        offset: req.query.offset,
      });
      res.send(inquiries);
    } catch (error) {
      next(error);
    }
  }

  async getInquiryDetail(
    req: Request<
      adminGetInquiryDetailRequest["path"],
      adminGetInquiryDetailResponse,
      adminGetInquiryDetailRequest["body"],
      adminGetInquiryDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const inquiryDetail = await this._inquiriesService.getInquiryDetail(
        req.params.inquiryId
      );

      res.send(inquiryDetail);
    } catch (error) {
      next(error);
    }
  }

  async createInquiry(
    req: Request<
      adminCreateInquiryRequest["path"],
      adminCreateInquiryResponse,
      adminCreateInquiryRequest["body"],
      adminCreateInquiryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const status = "Processing";
    const { inquiryType, title, content } = req.body;

    try {
      const createdInquiry = await this._inquiriesService.createInquiry(req.user.userId, {
        inquiryType,
        title,
        content,
        status,
      });
      res.send(createdInquiry);
    } catch (error) {
      next(error);
    }
  }

  async updateInquiry(
    req: Request<
      adminUpdateInquiryRequest["path"],
      adminUpdateInquiryResponse,
      adminUpdateInquiryRequest["body"],
      adminUpdateInquiryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { inquiryId } = req.params;

    try {
      await this._inquiriesService.updateInquiry(inquiryId, req.body);

      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  async deleteInquiry(
    req: Request<
      adminDeleteInquiryRequest["path"],
      adminDeleteInquiryResponse,
      adminDeleteInquiryRequest["body"],
      adminDeleteInquiryRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { inquiryId } = req.params;
    try {
      await this._inquiriesService.deleteInquiry(inquiryId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
