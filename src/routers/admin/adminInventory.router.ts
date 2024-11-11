import express from 'express';
import * as invenCon from '@/api/controllers/admin/adminInventory.controller';

const adminInventoryRouter = express.Router();

const BASE_PATH = '/admin-api/inven';

const ADMIN_INVEN_ROUTES = { 
   /** 재고 목록 조회 */
   GET_INVENS : `${BASE_PATH}`,
   /** 재고 목록 상세 조회 */
   GET_INVEN : `${BASE_PATH}/:productId`,
   /** 재고 생성 */
   CREATE_INVEN : `${BASE_PATH}`,
   /** 재고 수정 */
   EDIT_INVEN : `${BASE_PATH}/:productId`,
   /** 재고 삭제 */
   DELETE_INVEN : `${BASE_PATH}/:productId`,
} as const;

adminInventoryRouter.get(ADMIN_INVEN_ROUTES.GET_INVENS,invenCon.getInvens);
adminInventoryRouter.get(ADMIN_INVEN_ROUTES.GET_INVEN,invenCon.getInvenDetail);
adminInventoryRouter.post(ADMIN_INVEN_ROUTES.CREATE_INVEN,invenCon.createInven);
adminInventoryRouter.put(ADMIN_INVEN_ROUTES.EDIT_INVEN,invenCon.editInven);
adminInventoryRouter.delete(ADMIN_INVEN_ROUTES.DELETE_INVEN,invenCon.deleteInven);

export default adminInventoryRouter;