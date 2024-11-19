"use strict";
// [유저]
// 제품 목록 조회 - getProduct
// 제품 상세 조회 - getProductDetail
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductDetail = exports.getProduct = void 0;
/** 제품 목록 조회 */
const getProduct = (req, res, next) => {
    res.send("제품 목록 조회");
};
exports.getProduct = getProduct;
/** 제품 상세 조회 */
const getProductDetail = (req, res, next) => {
    res.send("제품 상세 조회");
};
exports.getProductDetail = getProductDetail;
//# sourceMappingURL=products.controller.js.map