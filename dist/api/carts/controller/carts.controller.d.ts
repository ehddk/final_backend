import { NextFunction, Request, Response } from "express";
import { CartsService } from "@/api/carts/service/carts.service.type";
export default class CartsController {
    private readonly _cartsService;
    constructor(_cartsService: CartsService);
    /** 장바구니 생성 */
    createCart(req: Request<createCartRequest["path"], createCartResponse, createCartRequest["body"], createCartRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 장바구니 조회 */
    getCart(req: Request<getCartRequest["path"], getCartResponse, getCartRequest["body"], getCartRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
    /** 장바구니 업데이트 */
    updateCart(req: Request<updateCartRequest["path"], updateCartResponse, updateCartRequest["body"], updateCartRequest["params"]>, res: Response, next: NextFunction): Promise<void>;
}
