"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_controller_1 = require("@/api/controllers/common.controller");
const express_1 = __importDefault(require("express"));
const adminAppRouter = express_1.default.Router();
const BASE_PATH = "/admin-api";
// 모듈화 사용전
// adminAppRouter.get(`${BASE_PATH}`, (req, res) => {
//   res.send("서버 건강하다잉");
// });
// 모듈화 사용 후
adminAppRouter.get(`${BASE_PATH}`, common_controller_1.healthCheck);
exports.default = adminAppRouter;
//# sourceMappingURL=adminApp.router.js.map