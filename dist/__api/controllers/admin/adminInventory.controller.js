"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInven = exports.editInven = exports.createInven = exports.getInvenDetail = exports.getInvens = void 0;
/** 재고 목록 조회(관리자) */
const getInvens = (req, res, next) => {
    res.send('재고 목록 조회(관리자)');
};
exports.getInvens = getInvens;
/** 재고 상세 조회(관리자) */
const getInvenDetail = (req, res, next) => {
    res.send('재고 상세 조회(관리자)');
};
exports.getInvenDetail = getInvenDetail;
/** 재고 등록(관리자) */
const createInven = (req, res, next) => {
    res.send('재고 등록(관리자)');
};
exports.createInven = createInven;
/** 재고 수정(관리자) */
const editInven = (req, res, next) => {
    res.send('재고 수정(관리자)');
};
exports.editInven = editInven;
/** 재고 삭제(관리자) */
const deleteInven = (req, res, next) => {
    res.send('재고 삭제(관리자)');
};
exports.deleteInven = deleteInven;
//# sourceMappingURL=adminInventory.controller.js.map