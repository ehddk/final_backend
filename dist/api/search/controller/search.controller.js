"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchController = void 0;
class SearchController {
    _searchService;
    constructor(_searchService) {
        this._searchService = _searchService;
        this.searchProducts = this.searchProducts.bind(this);
    }
    async searchProducts(req, res, next) {
        try {
            const keyword = req.query.keyword;
            const results = await this._searchService.searchProductsByKeyword(keyword);
            return results;
        }
        catch (error) {
            next(error);
        }
    }
}
exports.SearchController = SearchController;
//# sourceMappingURL=search.controller.js.map