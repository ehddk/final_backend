  import {
    createItem,
    deleteItem,
    getSellItem,
    getSellItems,
    updateItem,
  } from "@/api/controllers/admin/adminItems.controller";
  import express from "express";
  
  const adminItemsRouter = express.Router();
  
  /** 관리자 아이템 관련 API 경로 객체  */
  const ADMIN_Item_ROUTES = {
    /** 아이템 조회 (관리자) */
    GET_ITEMS: `/admin-api/items`,
    /** 아이템 상세 조회 (관리자) */
    GET_ITEM: `/admin-api/item/:ItemId`,
    /** 아이템 생성 (관리자) */
    CREATE_ITEM: `/admin-api/items`,
    /** 아이템 수정 (관리자) */
    UPDATE_ITEM: `/admin-api/items/:ItemId`,
    /** 아이템 삭제 (관리자) */
    DELETE_ITEM: `/admin-api/items/:ItemId`,
  } as const;
  
  adminItemsRouter.get(ADMIN_Item_ROUTES.GET_ITEMS, getSellItems);
  adminItemsRouter.get(ADMIN_Item_ROUTES.GET_ITEM, getSellItem);
  adminItemsRouter.post(ADMIN_Item_ROUTES.CREATE_ITEM, createItem);
  adminItemsRouter.put(ADMIN_Item_ROUTES.UPDATE_ITEM, updateItem);
  adminItemsRouter.delete(ADMIN_Item_ROUTES.DELETE_ITEM, deleteItem);
  
  export default adminItemsRouter;
  