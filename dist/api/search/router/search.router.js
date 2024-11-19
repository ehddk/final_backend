"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchRouter = void 0;
const express_1 = __importDefault(require("express"));
const search_controller_1 = require("../controller/search.controller");
const search_service_1 = require("../service/search.service");
const routers_1 = require("@/routers");
exports.searchRouter = express_1.default.Router();
const searchController = new search_controller_1.SearchController(new search_service_1.SearchService());
/**검색 API */
exports.searchRouter.get(routers_1.ROUTES_INDEX.SEARCH_API, searchController.searchProducts);
//# sourceMappingURL=search.router.js.map