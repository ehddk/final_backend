import express from 'express';
import { getMemberships, getMembershipDetail, createMembership, modifyMembership, deleteMembership } from '@/api/controllers/admin/adminMemberships.controller';

const adminMembershipRouter = express.Router();


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
} as const;


adminMembershipRouter.get(ADMIN_MEMBERSHIP_ROUTES.GET_MEMBERSHIPS, getMemberships);
adminMembershipRouter.get(ADMIN_MEMBERSHIP_ROUTES.GET_MEMBERSHIP_DETAIL, getMembershipDetail);
adminMembershipRouter.post(ADMIN_MEMBERSHIP_ROUTES.CREATE_MEMBERSHIP, createMembership);
adminMembershipRouter.patch(ADMIN_MEMBERSHIP_ROUTES.MODIFY_MEMBERSHIP, modifyMembership);
adminMembershipRouter.delete(ADMIN_MEMBERSHIP_ROUTES.DELETE_MEMBERSHIP, deleteMembership);

export default adminMembershipRouter;