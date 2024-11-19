export class Inquiry implements IInquiry {
  id: string;
  inquiryType: InquiryType;
  title: string;
  content: string;
  author: IUser;
  status: Status;
  createdAt: Date;

  constructor(params: IInquiry) {
    this.id = params.id;
    this.inquiryType = params.inquiryType;
    this.title = params.title;
    this.content = params.content;
    this.author = params.author;
    this.status = params.status;
    this.createdAt = params.createdAt;
  }
  
}
