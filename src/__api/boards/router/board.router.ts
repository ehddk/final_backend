import { ROUTES_INDEX } from "@/routers";
import { extractPath } from "@/utils/path.util";
import express from "express";
const BOARD_ROUTES = {
  /** 게시판 생성 */
  CREATE_BOARD: "/api/boards",
  /** 게시판 조회 */
  GET_BOARDS: "/api/boards",
  /** 게시판 상세 조회 */
  GET_BOARD_DETAIL: "/api/boards/:boardId",
} as const;

const boardRouter = express.Router();

boardRouter.get(
  extractPath(BOARD_ROUTES.GET_BOARDS, ROUTES_INDEX.BOARD_API),

  async function getBoards(
    req: express.Request<
      getBoardsRequest["path"],
      getBoardsResponse,
      getBoardsRequest["body"],
      getBoardsRequest["params"]
    >,
    res: express.Response,
    next: express.NextFunction
  ) {
    res.json({ message: "게시판 목록 조회" });
  }
);

boardRouter.post(
  extractPath(BOARD_ROUTES.CREATE_BOARD, ROUTES_INDEX.BOARD_API),
  async function createBoard(
    req: express.Request<
      createBoardRequest["path"],
      createBoardResponse,
      createBoardRequest["body"],
      createBoardRequest["params"]
    >,
    res: express.Response,
    next: express.NextFunction
  ) {
    res.json({ message: "게시판 생성" });
  }
);

boardRouter.get(
  extractPath(BOARD_ROUTES.GET_BOARD_DETAIL, ROUTES_INDEX.BOARD_API),
  async function getBoardDetail(
    req: express.Request<
      getBoardDetailRequest["path"],
      getBoardDetailResponse,
      getBoardDetailRequest["body"],
      getBoardDetailRequest["params"]
    >,
    res: express.Response,
    next: express.NextFunction
  ) {
    res.json({ message: "게시판 상세 조회" + req.params.boardId });
  }
);

export default boardRouter;
