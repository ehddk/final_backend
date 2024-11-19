import { NextFunction, Request, Response } from "express";
import { SearchService } from "../service/search.service";
export declare class SearchController {
    private _searchService;
    constructor(_searchService: SearchService);
    searchProducts(req: Request, res: Response, next: NextFunction): Promise<any>;
}
