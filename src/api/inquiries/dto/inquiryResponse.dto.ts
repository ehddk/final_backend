export class InquiryResponseDTO {
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

  constructor(params: IInquiry) {
    this.inquiryId = params.id;
    this.inquiryType = params.inquiryType;
    this.title = params.title;
    this.content = params.content;
    this.author = {
      id: params.author?.id,
      userName: params.author?.profile?.firstName,
    };
    this.status = params.status;
    this.createdAt = params.createdAt;
  }
}
