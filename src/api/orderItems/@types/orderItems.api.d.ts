// declare type getOrderItemsRequestPath = {};

// declare type getOrderItemsRequestBody = {};

// declare type getOrderItemsRequestParams = {};

// /** 주문 상품 목록 조회 요청 */
// declare type getOrderItemsRequest = {
//   params?: getOrderItemsRequestParams;
//   path?: getOrderItemsRequestPath;
//   body?: getOrderItemsRequestBody;
// };

// /** 주문 상품 목록 조회 응답 (DTO 참고) */
// declare type getOrderItemsResponse = Array<IOrderItemResponseDTO>;

// declare type getOrderItemDetailRequestPath = {
//   /** 주문 상품 ID */
//   orderItemId: string;
// };

// declare type getOrderItemDetailRequestBody = {};

// declare type getOrderItemDetailRequestParams = {};

// /** 주문 상품 상세 조회 요청 */
// declare type getOrderItemDetailRequest = {
//   params?: getOrderItemDetailRequestParams;
//   path: getOrderItemDetailRequestPath;
//   body?: getOrderItemDetailRequestBody;
// };

// /** 주문 상품 상세 조회 응답 (DTO 참고) */
// declare type getOrderItemDetailResponse = IOrderItemResponseDTO | null;

// declare type createOrderItemRequestPath = {};

// declare type createOrderItemRequestBody = {
//   product: IProduct;
//   quantity: number;
//   totalPrice: number;
//   orderId: string;
// };

// declare type createOrderItemRequestParams = {};

// /** 주문 상품 생성 요청 */
// declare type createOrderItemRequest = {
//   params: createOrderItemRequestParams;
//   path?: createOrderItemRequestPath;
//   body: createOrderItemRequestBody;
// };

// /** 주문 상품 생성 응답 */
// declare type createOrderItemResponse = IOrderItemResponseDTO;

// declare type updateOrderItemRequestPath = {
//   /** 주문 상품 ID */
//   orderItemId: string;
// };

// declare type updateOrderItemRequestBody = Omit<IOrderItem, "id" | "product">;

// declare type updateOrderItemRequestParams = {};

// /** 주문 상품 수정 요청 */
// declare type updateOrderItemRequest = {
//   params?: updateOrderItemRequestParams;
//   path: updateOrderItemRequestPath;
//   body: updateOrderItemRequestBody;
// };

// declare type updateOrderItemResponse = void;

// declare type deleteOrderItemRequestPath = {
//   /** 주문 상품 ID */
//   orderItemId: string;
// };

// declare type deleteOrderItemRequestBody = {};

// declare type deleteOrderItemRequestParams = {};

// /** 주문 상품 삭제 요청 */
// declare type deleteOrderItemRequest = {
//   params?: deleteOrderItemRequestParams;
//   path: deleteOrderItemRequestPath;
//   body?: deleteOrderItemRequestBody;
// };

// /** 주문 상품 삭제 응답 */
// declare type deleteOrderItemResponse = void;
