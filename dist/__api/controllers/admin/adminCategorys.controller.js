"use strict";
// [관리자]
// 카테고리 목록 조회 - getAdminCategorys
// 카테고리 상세 조회 - getAdminCategoryDetail
// 카테고리 생성 - createCategory
// 카테고리 수정 - updateCategory
// 카테고리 삭제 -deleteCategory
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.createCategory = exports.getAdminCategoryDetail = exports.getAdminCategorys = void 0;
/** 카테고리 목록 조회 (관리자) */
const getAdminCategorys = (req, res, next) => {
    res.send("카테고리 목록 조회 (관리자)");
};
exports.getAdminCategorys = getAdminCategorys;
/** 하위 카테고리 조회 (관리자) */
const getAdminCategoryDetail = (req, res, next) => {
    res.send("하위 카테고리 조회 (관리자)");
};
exports.getAdminCategoryDetail = getAdminCategoryDetail;
/** 카테고리 생성 (관리자) */
const createCategory = (req, res, next) => {
    const { categoryname } = req.body;
    res.send("카테고리 생성 (관리자)");
};
exports.createCategory = createCategory;
/** 카테고리 수정 (관리자) */
const updateCategory = (req, res, next) => {
    res.send("카테고리 수정 (관리자)");
};
exports.updateCategory = updateCategory;
/** 카테고리 삭제 (관리자) */
const deleteCategory = (req, res, next) => {
    const { categoryId } = req.params;
    res.send("카테고리 삭제 (관리자)");
};
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=adminCategorys.controller.js.map