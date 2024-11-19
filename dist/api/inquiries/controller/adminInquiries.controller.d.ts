import { NextFunction, Request, Response } from "express";
import { InquiriesService } from "@/api/inquiries/service/inquiries.service.type";
export default class AdminInquiriesController {
    private readonly _inquiriesService;
    constructor(_inquiriesService: InquiriesService);
    getInquiries(req: Request<adminGetInquiriesRequest["path"], adminGetInquiriesResponse, adminGetInquiriesRequest["body"], adminGetInquiriesRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    getInquiryDetail(req: Request<adminGetInquiryDetailRequest["path"], adminGetInquiryDetailResponse, adminGetInquiryDetailRequest["body"], adminGetInquiryDetailRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    createInquiry(req: Request<adminCreateInquiryRequest["path"], adminCreateInquiryResponse, adminCreateInquiryRequest["body"], adminCreateInquiryRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    updateInquiry(req: Request<adminUpdateInquiryRequest["path"], adminUpdateInquiryResponse, adminUpdateInquiryRequest["body"], adminUpdateInquiryRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    deleteInquiry(req: Request<adminDeleteInquiryRequest["path"], adminDeleteInquiryResponse, adminDeleteInquiryRequest["body"], adminDeleteInquiryRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
