"use strict";
// [관리자]
// FAQ 목록 조회 - getFaqs
// FAQ 상세 조회 - getFaqDetail
// FAQ 생성 - createFaq
// FAQ 수정 - updateFaq
// FAQ 삭제 - deleteFaq
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFaq = exports.updateFaq = exports.createFaq = exports.getFaqDetail = exports.getFaqs = void 0;
/** FAQ 목록 조회 (관리자) */
const getFaqs = (req, res, next) => {
    res.send("FAQ 목록 조회 (관리자)");
};
exports.getFaqs = getFaqs;
/** FAQ 상세 조회 (관리자) */
const getFaqDetail = (req, res, next) => {
    //   console.log(req.params);
    console.log(req.query);
    res.send("FAQ 상세 조회 (관리자)");
};
exports.getFaqDetail = getFaqDetail;
/** FAQ 생성 (관리자) */
const createFaq = (req, res, next) => {
    const { question, answer } = req.body;
    res.send("FAQ 생성 (관리자)");
};
exports.createFaq = createFaq;
/** FAQ 수정 (관리자) */
const updateFaq = (req, res, next) => {
    const { question, answer } = req.body;
    console.log(req.query);
    console.log(req.cookies);
    res.send("FAQ 수정 (관리자)");
};
exports.updateFaq = updateFaq;
/** FAQ 삭제 (관리자) */
const deleteFaq = (req, res, next) => {
    const { faqId } = req.params;
    res.send("FAQ 삭제 (관리자)");
};
exports.deleteFaq = deleteFaq;
//# sourceMappingURL=adminFaqs.controller.js.map