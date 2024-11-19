"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_controller_1 = require("@/api/controllers/common.controller");
const express_1 = __importDefault(require("express"));
// prefix
// api 용도는 /api
// 정적파일 요청은 /static
// View (html, ejs, handlebars) 파일 관련 요청
// GET /users - 유저 목록 페이지 조회 API
// GET /api/users - 유저 목록 데이터 조회 API
const appRouter = express_1.default.Router();
const BASE_PATH = "/api";
// 모듈화 사용 전
// appRouter.get(`/${BASE_PATH}`, (req, res) => {
//   res.send("서버 건강하다잉");
// });
// 모듈화 사용 후
appRouter.get(`/${BASE_PATH}`, common_controller_1.healthCheck);
exports.default = appRouter;
//# sourceMappingURL=app.router.js.map