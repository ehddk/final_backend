"use strict";
// [관리자]
// 문의 목록 조회 - getInquiries
// 문의 상세 조회 - getInquiry
// 문의 생성 - createInquiry
// 문의 수정 - updateInquiry
// 문의 삭제 - deleteInquiry
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInquiry = exports.updateInquiry = exports.createInquiry = exports.getInquiry = exports.getInquiries = void 0;
/* 문의 목록 조회 (관리자) */
const getInquiries = (req, res, next) => {
    res.send("문의 목록 조회 (관리자)");
};
exports.getInquiries = getInquiries;
/* 문의 상세 조회 (관리자) */
const getInquiry = (req, res, next) => {
    res.send("문의 상세 조회 (관리자)");
};
exports.getInquiry = getInquiry;
/* 문의 생성 (관리자) */
const createInquiry = (req, res, next) => {
    res.send("문의 생성 (관리자)");
};
exports.createInquiry = createInquiry;
/* 문의 수정 (관리자) */
const updateInquiry = (req, res, next) => {
    res.send("문의 수정 (관리자)");
};
exports.updateInquiry = updateInquiry;
/* 문의 삭제 (관리자) */
const deleteInquiry = (req, res, next) => {
    res.send("문의 삭제 (관리자)");
};
exports.deleteInquiry = deleteInquiry;
//# sourceMappingURL=adminInquiries.controller.js.map