"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const routers_1 = require("@/routers");
const path_util_1 = require("@/utils/path.util");
const express_1 = __importDefault(require("express"));
const BOARD_ROUTES = {
    /** 게시판 생성 */
    CREATE_BOARD: "/api/boards",
    /** 게시판 조회 */
    GET_BOARDS: "/api/boards",
    /** 게시판 상세 조회 */
    GET_BOARD_DETAIL: "/api/boards/:boardId",
};
const boardRouter = express_1.default.Router();
boardRouter.get((0, path_util_1.extractPath)(BOARD_ROUTES.GET_BOARDS, routers_1.ROUTES_INDEX.BOARD_API), async function getBoards(req, res, next) {
    res.json({ message: "게시판 목록 조회" });
});
boardRouter.post((0, path_util_1.extractPath)(BOARD_ROUTES.CREATE_BOARD, routers_1.ROUTES_INDEX.BOARD_API), async function createBoard(req, res, next) {
    res.json({ message: "게시판 생성" });
});
boardRouter.get((0, path_util_1.extractPath)(BOARD_ROUTES.GET_BOARD_DETAIL, routers_1.ROUTES_INDEX.BOARD_API), async function getBoardDetail(req, res, next) {
    res.json({ message: "게시판 상세 조회" + req.params.boardId });
});
exports.default = boardRouter;
//# sourceMappingURL=board.router.js.map