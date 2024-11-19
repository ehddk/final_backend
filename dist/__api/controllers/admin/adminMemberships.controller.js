"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMembership = exports.modifyMembership = exports.createMembership = exports.getMembershipDetail = exports.getMemberships = void 0;
// [관리자]
// 멤버십 목록 조회 - getMemberships
// 멤버십 상세 조회 - getMembershipDetail
// 멤버십 생성 - createMembership
// 멤버십 변경 - modifyMembership
// 멤버십 삭제 - deleteMembership
/** [관리자] 멤버십 목록 조회 */
const getMemberships = (req, res, next) => {
    res.send("[관리자] 멤버십 목록 조회");
};
exports.getMemberships = getMemberships;
/** [관리자] 멤버십 상세 조회 */
const getMembershipDetail = (req, res, next) => {
    res.send("[관리자] 멤버십 상세 조회");
};
exports.getMembershipDetail = getMembershipDetail;
/** [관리자] 멤버십 생성 */
const createMembership = (req, res, next) => {
    res.send("[관리자] 멤버십 생성");
};
exports.createMembership = createMembership;
/** [관리자] 멤버십 수정 */
const modifyMembership = (req, res, next) => {
    res.send("[관리자] 멤버십 수정");
};
exports.modifyMembership = modifyMembership;
/** [관리자] 멤버십 삭제 */
const deleteMembership = (req, res, next) => {
    res.send("[관리자] 멤버십 삭제");
};
exports.deleteMembership = deleteMembership;
//# sourceMappingURL=adminMemberships.controller.js.map