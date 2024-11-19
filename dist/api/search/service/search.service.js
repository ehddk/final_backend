"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const search_model_1 = require("../model/search.model");
class SearchService {
    searchModel;
    constructor() {
        this.searchModel = new search_model_1.SearchModel();
    }
    async searchProductsByKeyword(keyword) {
        try {
            const searchResults = await this.searchModel.searchProducts(keyword);
            return searchResults;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map