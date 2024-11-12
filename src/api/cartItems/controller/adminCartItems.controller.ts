import { NextFunction, Request, Response } from "express";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";

export default class AdminCartItemsController {
  private readonly _cartItemsService: CartItemsService;
  constructor(_cartItemsService: CartItemsService) {
    this._cartItemsService = _cartItemsService;

    this.getCartItems = this.getCartItems.bind(this);
    this.getCartItemDetail = this.getCartItemDetail.bind(this);
    this.createCartItem = this.createCartItem.bind(this);
    this.updateCartItem = this.updateCartItem.bind(this);
    this.deleteCartItem = this.deleteCartItem.bind(this);
  }

  async getCartItems(
    req: Request<
      adminGetCartItemsRequest["path"],
      adminGetCartItemsResponse,
      adminGetCartItemsRequest["body"],
      adminGetCartItemsRequest["params"]
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

  async getCartItemDetail(
    req: Request<
      adminGetCartItemDetailRequest["path"],
      adminGetCartItemDetailResponse,
      adminGetCartItemDetailRequest["body"],
      adminGetCartItemDetailRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cartItemDetail = await this._cartItemsService.getCartItemDetail(
        req.params.cartItemId
      );

      res.send(cartItemDetail);
    } catch (error) {
      next(error);
    }
  }

  async createCartItem(
    req: Request<
      adminCreateCartItemRequest["path"],
      adminCreateCartItemResponse,
      adminCreateCartItemRequest["body"],
      adminCreateCartItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { product, quantity } = req.body;

    const totalPrice = product.sales * quantity;

    try {
      const createdCartItem = await this._cartItemsService.createCartItem(
        req.user.userId,
        { product, quantity, totalPrice }
      );
      res.send(createdCartItem);
    } catch (error) {
      next(error);
    }
  }

  async updateCartItem(
    req: Request<
      adminUpdateCartItemRequest["path"],
      adminUpdateCartItemResponse,
      adminUpdateCartItemRequest["body"],
      adminUpdateCartItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { cartItemId } = req.params;

    try {
      await this._cartItemsService.updateCartItem(cartItemId, req.body);

      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }

  async deleteCartItem(
    req: Request<
      adminDeleteCartItemRequest["path"],
      adminDeleteCartItemResponse,
      adminDeleteCartItemRequest["body"],
      adminDeleteCartItemRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { cartItemId } = req.params;
    try {
      await this._cartItemsService.deleteCartItem(cartItemId);
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
}
