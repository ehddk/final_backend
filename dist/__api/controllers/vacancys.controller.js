"use strict";
// 공실 목록 조회  - getVacancysList
// 내가 찜한 공실 조회 - getVacancysPickList
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVacancysPickList = exports.getVacancysList = void 0;
/**공실 목록 조회 [사용자 페이지] */
const getVacancysList = (req, res, next) => {
    res.send("공실 목록 조회 [사용자 페이지]");
};
exports.getVacancysList = getVacancysList;
/**내가 찜한 공실 조회 [사용자 페이지]*/
const getVacancysPickList = (req, res, next) => {
    res.send("내가 찜한 공실 조회 [사용자 페이지]");
};
exports.getVacancysPickList = getVacancysPickList;
//# sourceMappingURL=vacancys.controller.js.map