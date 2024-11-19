"use strict";
// [유저]
// 내 문의 목록 조회 - getMyInquiries
// 내 문의 조회 - getMyInquiry
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMyInquiry = exports.updateMyInquiry = exports.createMyInquiry = exports.getMyInquiry = exports.getMyInquiries = void 0;
/* 내 문의 목록 조회 (사용자페이지) */
const getMyInquiries = (req, res, next) => {
    res.send("내 문의 목록 조회 (사용자페이지)");
};
exports.getMyInquiries = getMyInquiries;
/* 내 문의 조회 (사용자페이지) */
const getMyInquiry = (req, res, next) => {
    res.send("내 문의 조회 (사용자페이지)");
};
exports.getMyInquiry = getMyInquiry;
/* 내 문의 생성 (사용자페이지) */
const createMyInquiry = (req, res, next) => {
    res.send("내 문의 생성 (사용자페이지)");
};
exports.createMyInquiry = createMyInquiry;
/* 내 문의 수정 (사용자페이지) */
const updateMyInquiry = (req, res, next) => {
    res.send("내 문의 수정 (사용자페이지)");
};
exports.updateMyInquiry = updateMyInquiry;
/* 내 문의 삭제 (사용자페이지) */
const deleteMyInquiry = (req, res, next) => {
    res.send("내 문의 삭제 (사용자페이지)");
};
exports.deleteMyInquiry = deleteMyInquiry;
//# sourceMappingURL=Inquiries.controller.js.map