"use strict";
// [관리자]
// 판매 목록 조회 - getSellItems
// 판매 목록 상세 조회 - getSellItem
// 판매 아이템 생성 - createItem
// 판매 아이템 수정 - updateItem
// 판매 아이템 삭제 -deleteItem
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.createItem = exports.getSellItem = exports.getSellItems = void 0;
/** 판매 목록 조회 (관리자) */
const getSellItems = (req, res, next) => {
    res.send("판매 목록 조회 (관리자)");
};
exports.getSellItems = getSellItems;
/** 판매 목록 상세 조회 (관리자) */
const getSellItem = (req, res, next) => {
    console.log(req.params);
    console.log(req.query);
    res.send("판매 목록 상세 조회 (관리자)");
};
exports.getSellItem = getSellItem;
/** 판매 아이템 생성 (관리자) */
const createItem = (req, res, next) => {
    const { name } = req.body;
    res.send("판매 아이템 생성 (관리자)");
};
exports.createItem = createItem;
/** 판매 아이템 수정 (관리자) */
const updateItem = (req, res, next) => {
    console.log("body", req.body);
    console.log(req.query);
    console.log(req.cookies);
    // const { userId } = req.params;
    // const { name } = req.body;
    res.send("판매 아이템 수정 (관리자)");
};
exports.updateItem = updateItem;
/** 판매 아이템 삭제 (관리자) */
const deleteItem = (req, res, next) => {
    const { ItemId } = req.params;
    res.send("판매 아이템 삭제 (관리자)");
};
exports.deleteItem = deleteItem;
//# sourceMappingURL=adminItems.controller.js.map