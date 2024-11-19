"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminMemberships_controller_1 = require("@/api/controllers/admin/adminMemberships.controller");
const adminMembershipRouter = express_1.default.Router();
/** 관리자 멤버십 관련 API 경로 객체 */
const ADMIN_MEMBERSHIP_ROUTES = {
    /** [관리자] 멤버십 목록 조회 */
    GET_MEMBERSHIPS: `/admin-api/memberships`,
    /** [관리자] 멤버십 상세 조회 */
    GET_MEMBERSHIP_DETAIL: `/admin-api/memberships/:membershipId`,
    /** [관리자] 멤버십 생성 */
    CREATE_MEMBERSHIP: `/admin-api/memberships`,
    /** [관리자] 멤버십 수정 */
    MODIFY_MEMBERSHIP: `/admin-api/memberships/:membershipId`,
    /** [관리자] 멤버십 삭제 */
    DELETE_MEMBERSHIP: `/admin-api/memberships/:membershipId`,
};
adminMembershipRouter.get(ADMIN_MEMBERSHIP_ROUTES.GET_MEMBERSHIPS, adminMemberships_controller_1.getMemberships);
adminMembershipRouter.get(ADMIN_MEMBERSHIP_ROUTES.GET_MEMBERSHIP_DETAIL, adminMemberships_controller_1.getMembershipDetail);
adminMembershipRouter.post(ADMIN_MEMBERSHIP_ROUTES.CREATE_MEMBERSHIP, adminMemberships_controller_1.createMembership);
adminMembershipRouter.patch(ADMIN_MEMBERSHIP_ROUTES.MODIFY_MEMBERSHIP, adminMemberships_controller_1.modifyMembership);
adminMembershipRouter.delete(ADMIN_MEMBERSHIP_ROUTES.DELETE_MEMBERSHIP, adminMemberships_controller_1.deleteMembership);
exports.default = adminMembershipRouter;
//# sourceMappingURL=adminMemberships.router.js.map