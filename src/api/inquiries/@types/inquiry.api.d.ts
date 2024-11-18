declare type getInquiriesRequestPath = {};

declare type getInquiriesRequestBody = {};

declare type getInquiriesRequestParams = {
  /** offset */
  offset?: number;
  /** limit */
  limit?: number;
};

/** 1:1문의 목록 조회 요청 */
declare type getInquiriesRequest = {
  params: getInquiriesRequestParams;
  path?: getInquiriesRequestPath;
  body?: getInquiriesRequestBody;
};

/** 1:1문의 목록 조회 응답 (DTO 참고) */
declare type getInquiriesResponse = Array<IInquiryResponseDTO>;

declare type getInquiryDetailRequestPath = {
  /** 1:1문의 ID */
  inquiryId: string;
};

declare type getInquiryDetailRequestBody = {};

declare type getInquiryDetailRequestParams = {};

/** 1:1문의 상세 조회 요청 */
declare type getInquiryDetailRequest = {
  params?: getInquiryDetailRequestParams;
  path: getInquiryDetailRequestPath;
  body?: getInquiryDetailRequestBody;
};

/** 1:1문의 상세 조회 응답 (DTO 참고) */
declare type getInquiryDetailResponse = IInquiryResponseDTO | null;

declare type createInquiryRequestPath = {};

declare type createInquiryRequestBody = {
  inquiryType: InquiryType;
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
};

declare type createInquiryRequestParams = {};

/** 1:1문의 생성 요청 */
declare type createInquiryRequest = {
  params?: createInquiryRequestParams;
  path?: createInquiryRequestPath;
  body: createInquiryRequestBody;
};

/** 1:1문의 생성 응답 */
declare type createInquiryResponse = IInquiryResponseDTO;

declare type updateInquiryRequestPath = {
  /** 1:1문의 ID */
  inquiryId: string;
};

declare type updateInquiryRequestBody = {
  /** 제목 */
  title: string;
  /** 내용 */
  content: string;
};

declare type updateInquiryRequestParams = {};

/** 1:1문의 수정 요청 */
declare type updateInquiryRequest = {
  params?: updateInquiryRequestParams;
  path: updateInquiryRequestPath;
  body: updateInquiryRequestBody;
};

declare type updateInquiryResponse = void;

declare type deleteInquiryRequestPath = {
  /** 1:1문의 ID */
  inquiryId: string;
};

declare type deleteInquiryRequestBody = {};

declare type deleteInquiryRequestParams = {};

/** 1:1문의 삭제 요청 */
declare type deleteInquiryRequest = {
  params?: deleteInquiryRequestParams;
  path: deleteInquiryRequestPath;
  body?: deleteInquiryRequestBody;
};

/** 1:1문의 삭제 응답 */
declare type deleteInquiryResponse = void;
