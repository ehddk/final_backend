import { NextFunction, Request, Response } from "express";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";
export default class AdminCartItemsController {
    private readonly _cartItemsService;
    constructor(_cartItemsService: CartItemsService);
    getCartItems(req: Request<adminGetCartItemsRequest["path"], adminGetCartItemsResponse, adminGetCartItemsRequest["body"], adminGetCartItemsRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    getCartItemDetail(req: Request<adminGetCartItemDetailRequest["path"], adminGetCartItemDetailResponse, adminGetCartItemDetailRequest["body"], adminGetCartItemDetailRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    createCartItem(req: Request<adminCreateCartItemRequest["path"], adminCreateCartItemResponse, adminCreateCartItemRequest["body"], adminCreateCartItemRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    updateCartItem(req: Request<adminUpdateCartItemRequest["path"], adminUpdateCartItemResponse, adminUpdateCartItemRequest["body"], adminUpdateCartItemRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    deleteCartItem(req: Request<adminDeleteCartItemRequest["path"], adminDeleteCartItemResponse, adminDeleteCartItemRequest["body"], adminDeleteCartItemRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
