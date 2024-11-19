import { NextFunction, Request, Response } from "express";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";
export default class CartItemsController {
    private readonly _cartItemsService;
    constructor(_cartItemsService: CartItemsService);
    /** 장바구니 주문 상품 목록 조회 */
    getCartItems(req: Request<getCartItemsRequest["path"], getCartItemsResponse, getCartItemsRequest["body"], getCartItemsRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 장바구니 주문 상품 작성 */
    createCartItem(req: Request<createCartItemRequest["path"], createCartItemResponse, createCartItemRequest["body"], createCartItemRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 장바구니 주문 상품 수정 */
    updateCartItem(req: Request<updateCartItemRequest["path"], updateCartItemResponse, updateCartItemRequest["body"], updateCartItemRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 장바구니 주문 상품 삭제 */
    deleteCartItem(req: Request<deleteCartItemRequest["path"], deleteCartItemResponse, deleteCartItemRequest["body"], deleteCartItemRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
