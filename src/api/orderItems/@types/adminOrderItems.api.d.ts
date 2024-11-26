// declare type adminGetOrderItemsRequestPath = {};

// declare type adminGetOrderItemsRequestBody = {};

// declare type adminGetOrderItemsRequestParams = {};

// /** 주문 상품 목록 조회 요청 */
// declare type adminGetOrderItemsRequest = {
//   params?: adminGetOrderItemsRequestParams;
//   path?: adminGetOrderItemsRequestPath;
//   body?: adminGetOrderItemsRequestBody;
// };

// /** 주문 상품 목록 조회 응답 (DTO 참고) */
// declare type adminGetOrderItemsResponse = Array<IOrderItemResponseDTO>;
// declare type adminGetOrderItemDetailRequestPath = {
//   /** 주문 상품 ID */
//   orderItemId: string;
// };

// declare type adminGetOrderItemDetailRequestBody = {};

// declare type adminGetOrderItemDetailRequestParams = {};

// /** 주문 상품 상세 조회 요청 */
// declare type adminGetOrderItemDetailRequest = {
//   params?: adminGetOrderItemDetailRequestParams;
//   path: adminGetOrderItemDetailRequestPath;
//   body?: adminGetOrderItemDetailRequestBody;
// };

// /** 주문 상품 상세 조회 응답 (DTO 참고) */
// declare type adminGetOrderItemDetailResponse = IOrderItemResponseDTO | null;

// declare type adminCreateOrderItemRequestBody = {
//   product: IProduct;
//   quantity: number;
//   totalPrice: number;
//   orderId: string;
// };

// declare type adminCreateOrderItemRequestPath = {};

// declare type adminCreateOrderItemRequestParams = {};

// /** 주문 상품 생성 요청 */
// declare type adminCreateOrderItemRequest = {
//   params: adminCreateOrderItemRequestParams;
//   path?: adminCreateOrderItemRequestPath;
//   body: adminCreateOrderItemRequestBody;
// };

// /** 주문 상품 생성 응답 */
// declare type adminCreateOrderItemResponse = IOrderItemResponseDTO;

// declare type adminUpdateOrderItemRequestBody = Omit<
//   IOrderItem,
//   "id" | "product"
// >;

// declare type adminUpdateOrderItemRequestPath = {
//   /** 주문 상품 ID */
//   orderItemId: string;
// };

// declare type adminUpdateOrderItemRequestParams = {};

// /** 주문 상품 수정 요청 */
// declare type adminUpdateOrderItemRequest = {
//   params?: adminUpdateOrderItemRequestParams;
//   path: adminUpdateOrderItemRequestPath;
//   body: adminUpdateOrderItemRequestBody;
// };

// /** 주문 상품 수정 응답 */
// declare type adminUpdateOrderItemResponse = void;

// declare type adminDeleteOrderItemRequestPath = {
//   /** 주문 상품 ID */
//   orderItemId: string;
// };

// declare type adminDeleteOrderItemRequestBody = {};

// declare type adminDeleteOrderItemRequestParams = {};

// /** 주문 상품 삭제 요청 */
// declare type adminDeleteOrderItemRequest = {
//   params?: adminDeleteOrderItemRequestParams;
//   path: adminDeleteOrderItemRequestPath;
//   body?: adminDeleteOrderItemRequestBody;
// };

// /** 주문 상품 삭제 응답 */
// declare type adminDeleteOrderItemResponse = void;
