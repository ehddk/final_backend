declare type adminGetInquiriesRequestPath = {};

declare type adminGetInquiriesRequestBody = {};

declare type adminGetInquiriesRequestParams = {
  /** offset */
  offset?: number;
  /** limit */
  limit?: number;
};

/** 1:1문의 목록 조회 요청 */
declare type adminGetInquiriesRequest = {
  params: adminGetInquiriesRequestParams;
  path?: adminGetInquiriesRequestPath;
  body?: adminGetInquiriesRequestBody;
};

/** 1:1문의 목록 조회 응답 (DTO 참고) */
declare type adminGetInquiriesResponse = Array<IInquiryResponseDTO>;
declare type adminGetInquiryDetailRequestPath = {
  /** 1:1문의 ID */
  inquiryId: string;
};

declare type adminGetInquiryDetailRequestBody = {};

declare type adminGetInquiryDetailRequestParams = {};

/** 1:1문의 상세 조회 요청 */
declare type adminGetInquiryDetailRequest = {
  params?: adminGetInquiryDetailRequestParams;
  path: adminGetInquiryDetailRequestPath;
  body?: adminGetInquiryDetailRequestBody;
};

/** 1:1문의 상세 조회 응답 (DTO 참고) */
declare type adminGetInquiryDetailResponse = {
  inquiryId: string;
  title: string;
  content: string;
  author: {
    id: string;
    userName: string;
  };
} | null;

declare type adminCreateInquiryRequestBody = {
  inquiryType: InquiryType;
  title: string;
  content: string;
};

declare type adminCreateInquiryRequestPath = {};

declare type adminCreateInquiryRequestParams = {};

/** 1:1문의 생성 요청 */
declare type adminCreateInquiryRequest = {
  params?: adminCreateInquiryRequestParams;
  path?: adminCreateInquiryRequestPath;
  body: adminCreateInquiryRequestBody;
};

/** 1:1문의 생성 응답 */
declare type adminCreateInquiryResponse = IInquiryResponseDTO;

declare type adminUpdateInquiryRequestBody = Omit<IInquiry, "id" | "author">;

declare type adminUpdateInquiryRequestPath = {
  /** 1:1문의 ID */
  inquiryId: string;
};

declare type adminUpdateInquiryRequestParams = {};

/** 1:1문의 수정 요청 */
declare type adminUpdateInquiryRequest = {
  params?: adminUpdateInquiryRequestParams;
  path: adminUpdateInquiryRequestPath;
  body: adminUpdateInquiryRequestBody;
};

/** 1:1문의 수정 응답 */
declare type adminUpdateInquiryResponse = void;

declare type adminDeleteInquiryRequestPath = {
  /** 1:1문의 ID */
  inquiryId: string;
};

declare type adminDeleteInquiryRequestBody = {};

declare type adminDeleteInquiryRequestParams = {};

/** 1:1문의 삭제 요청 */
declare type adminDeleteInquiryRequest = {
  params?: adminDeleteInquiryRequestParams;
  path: adminDeleteInquiryRequestPath;
  body?: adminDeleteInquiryRequestBody;
};

/** 1:1문의 삭제 응답 */
declare type adminDeleteInquiryResponse = void;
