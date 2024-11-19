"use strict";
// [유저]
// 구매 목록 조회 - getBuyItems
// 구매 목록 상세 조회 - getBuyItem
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBuyItem = exports.getBuyItems = void 0;
/** 구매 목록 조회 (사용자) */
const getBuyItems = (req, res, next) => {
    res.send("구매 목록 조회 (사용자)");
};
exports.getBuyItems = getBuyItems;
/** 구매 목록 상세 조회 (사용자) */
const getBuyItem = (req, res, next) => {
    res.send("구매 목록 상세 조회 (사용자)");
};
exports.getBuyItem = getBuyItem;
//# sourceMappingURL=Items.controller.js.map