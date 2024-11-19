import { NextFunction, Request, Response } from "express";
import { InquiriesService } from "@/api/inquiries/service/inquiries.service.type";
export default class InquiriesController {
    private readonly _inquiriesService;
    constructor(_inquiriesService: InquiriesService);
    /** 1:1문의 목록 조회 */
    getInquiries(req: Request<getInquiriesRequest["path"], getInquiriesResponse, getInquiriesRequest["body"], getInquiriesRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 1:1문의 상세 조회 */
    getInquiryDetail(req: Request<getInquiryDetailRequest["path"], getInquiryDetailResponse, getInquiryDetailRequest["body"], getInquiryDetailRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 1:1문의 작성 */
    createInquiry(req: Request<createInquiryRequest["path"], createInquiryResponse, createInquiryRequest["body"], createInquiryRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
