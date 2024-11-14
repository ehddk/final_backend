import { NextFunction, Request, Response } from "express";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";

export default class CartItemsController {
  private readonly _cartItemsService: CartItemsService;
  constructor(_cartItemsService: CartItemsService) {
    this._cartItemsService = _cartItemsService;

    this.getCartItems = this.getCartItems.bind(this);
    this.createCartItem = this.createCartItem.bind(this);
    this.updateCartItem = this.updateCartItem.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  /** 장바구니 주문 상품 목록 조회 */
  async getCartItems(
    req: Request<
      getCartItemsRequest["path"],
      getCartItemsResponse,
      getCartItemsRequest["body"],
      getCartItemsRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cartItems = await this._cartItemsService.getCartItems();
      res.send(cartItems);
    } catch (error) {
      next(error);
    }
  }

  /** 장바구니 주문 상품 작성 */
  async createCartItem(
    req: Request<
      createCartItemRequest["path"],
      createCartItemResponse,
      createCartItemRequest["body"],
      createCartItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cartItem = await this._cartItemsService.createCartItem(
        req.user.userId,
        {
          product: req.body.product,
          quantity: req.body.quantity,
          totalPrice: req.body.totalPrice,
        }
      );

      res.send(cartItem);
    } catch (error) {
      console.error(error);
      next(error);
    }
  }

  /** 장바구니 주문 상품 수정 */
  async updateCartItem(
    req: Request<
      updateCartItemRequest["path"],
      updateCartItemResponse,
      updateCartItemRequest["body"],
      updateCartItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { cartItemId } = req.params;
    try {
      const cartItem = await this._cartItemsService.updateCartItem(
        cartItemId,
        req.body
      );

      res.send(cartItem);
    } catch (error) {
      next(error);
    }
  }

  /** 장바구니 주문 상품 삭제 */
  async deleteCartItem(
    req: Request<
      deleteCartItemRequest["path"],
      deleteCartItemResponse,
      deleteCartItemRequest["body"],
      deleteCartItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { cartItemId } = req.params;

    try {
      await this._cartItemsService.deleteCartItem(cartItemId);

      res.send("삭제 성공");
    } catch (error) {
      next(error);
    }
  }
}
