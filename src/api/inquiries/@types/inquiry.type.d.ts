type InquiryType = "Cancel" | "Refund" | "Exchange" | "etc.";
type Status = "Processing" | "completed";


interface IInquiry {
  /** 1:1문의 ID */
  id: string;
  /** 1:1문의 문의유형 */
  inquiryType: InquiryType;
  /** 1:1문의 제목 */
  title: string;
  /** 1:1문의 내용 */
  content: string;
  /** 작성자 */
  author: IUser;
  /** 상태 */
  status: Status;
  /** 작성일 */
  createdAt: Date;
}

interface IInquiryResponseDTO {
  /** 1:1문의 ID */
  inquiryId: string;
  /** 1:1문의 문의유형 */
  inquiryType: InquiryType;
  /** 1:1문의 제목 */
  title: string;
  /** 1:1문의 내용 */
  content: string;
  /** 작성자 */
  author: {
    id: string;
    userName: string;
  };
  status: Status;
}
