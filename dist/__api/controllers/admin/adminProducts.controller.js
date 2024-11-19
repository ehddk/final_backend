"use strict";
// [관리자]
// 제품 목록 조회 - getProducts
// 제품 상세 조회 - getProductDetail
// 제품 생성 - createProduct
// 제품 수정 - updateProduct
// 제품 삭제 - deleteProduct
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductDetail = exports.getProducts = void 0;
/** 제품 목록 조회 [관리자] */
const getProducts = (req, res, next) => {
    res.send("제품 목록 조회 [관리자]");
};
exports.getProducts = getProducts;
/** 제품 상세 조회 [관리자] */
const getProductDetail = (req, res, next) => {
    res.send("제품 상세 조회 [관리자]");
};
exports.getProductDetail = getProductDetail;
/** 제품 생성 [관리자] */
const createProduct = (req, res, next) => {
    res.send("제품 생성 [관리자]");
};
exports.createProduct = createProduct;
/** 제품 수정 [관리자] */
const updateProduct = (req, res, next) => {
    res.send("제품 수정 [관리자]");
};
exports.updateProduct = updateProduct;
/** 제품 삭제 [관리자] */
const deleteProduct = (req, res, next) => {
    res.send("제품 삭제 [관리자]");
};
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=adminProducts.controller.js.map