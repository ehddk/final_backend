"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelMembership = exports.changeMembership = exports.joinMembership = exports.getMemberships = void 0;
// [사용자]
// 멤버십 목록 조회 - getMemberships
// 멤버십 가입 - joinMembership
// 멤버십 변경 - changeMembership
// 멤버십 취소 - cancelMembership
/** [사용자] 멤버십 목록 조회 */
const getMemberships = (req, res, next) => {
    res.send("[사용자] 멤버십 목록 조회");
};
exports.getMemberships = getMemberships;
/** [사용자] 멤버십 가입 */
const joinMembership = (req, res, next) => {
    res.send("[사용자] 멤버십 가입");
};
exports.joinMembership = joinMembership;
/** [사용자] 멤버십 변경 */
const changeMembership = (req, res, next) => {
    res.send("[사용자] 멤버십 변경");
};
exports.changeMembership = changeMembership;
/** [사용자] 멤버십 취소 */
const cancelMembership = (req, res, next) => {
    res.send("[사용자] 멤버십 취소");
};
exports.cancelMembership = cancelMembership;
//# sourceMappingURL=memberships.controller.js.map