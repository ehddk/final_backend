export declare class Inquiry implements IInquiry {
    id: string;
    inquiryType: InquiryType;
    title: string;
    content: string;
    author: IUser;
    status: Status;
    createdAt: Date;
    constructor(params: IInquiry);
}
