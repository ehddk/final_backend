"use strict";
// 공실 목록 조회 - getAdminVacancysList
// 공실 상세 조회 - getAdminVacancysDetail
// 공실 추가 - createAdminVacancys
// 공실 수정 - updateAdminVacancys
// 공실 삭제 - deleteAdminVacancys
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdminVacancys = exports.updateAdminVacancys = exports.createAdminVacancys = exports.getAdminVacancysDetail = exports.getAdminVacancysList = void 0;
/** 공실 목록 조회 [관리자] */
const getAdminVacancysList = (req, res, next) => {
    res.send("공실 목록 조회 [관리자]");
};
exports.getAdminVacancysList = getAdminVacancysList;
/** 공실 상세 조회 [관리자] */
const getAdminVacancysDetail = (req, res, next) => {
    res.send("공실 상세 조회 [관리자]");
};
exports.getAdminVacancysDetail = getAdminVacancysDetail;
/** 공실 추가 [관리자] */
const createAdminVacancys = (req, res, next) => {
    res.send("공실 추가 [관리자]");
};
exports.createAdminVacancys = createAdminVacancys;
/** 공실 수정 [관리자] */
const updateAdminVacancys = (req, res, next) => {
    res.send("공실 수정 [관리자]");
};
exports.updateAdminVacancys = updateAdminVacancys;
/** 공실 삭제 [관리자] */
const deleteAdminVacancys = (req, res, next) => {
    res.send("공실 삭제 [관리자]");
};
exports.deleteAdminVacancys = deleteAdminVacancys;
//# sourceMappingURL=adminVacancys.controller.js.map