export declare class InquiryResponseDTO {
    inquiryId: string;
    inquiryType: InquiryType;
    title: string;
    content: string;
    author: {
        id: string;
        userName: string;
    };
    status: Status;
    createdAt: Date;
    constructor(params: IInquiry);
}
