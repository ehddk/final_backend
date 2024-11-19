"use strict";
// [유저]
// 카테고리 목록 조회 - getCategory
// 하위 카테고리 조회 - getCategoryDetail
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryDetail = exports.getCategory = void 0;
/** 카테고리 목록 조회 (사용자페이지) */
const getCategory = (req, res, next) => {
    res.send("카테고리 목록 조회 (사용자 페이지)");
};
exports.getCategory = getCategory;
/** 하위 카테고리 조회 (사용자페이지) */
const getCategoryDetail = (req, res, next) => {
    res.send("하위 카테고리 조회 (사용자 페이지)");
};
exports.getCategoryDetail = getCategoryDetail;
//# sourceMappingURL=category.controller.js.map