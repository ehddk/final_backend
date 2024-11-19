"use strict";
// [유저]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaqDetail = exports.getFaqs = void 0;
/** FAQ 목록 조회 (사용자페이지) */
const getFaqs = (req, res, next) => {
    res.send("FAQ 목록 조회 (사용자페이지)");
};
exports.getFaqs = getFaqs;
/** FAQ 상세 조회 (사용자페이지) */
const getFaqDetail = (req, res, next) => {
    res.send("FAQ 상세 조회 (사용자페이지)");
};
exports.getFaqDetail = getFaqDetail;
//# sourceMappingURL=faqs.controller.js.map