import { NextFunction, Request, Response } from "express";
import { CartsService } from "@/api/carts/service/carts.service.type";

export default class CartsController {
  private readonly _cartsService: CartsService;
  constructor(_cartsService: CartsService) {
    this._cartsService = _cartsService;

    this.createCart = this.createCart.bind(this);
    this.getCart = this.getCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  /** 장바구니 생성 */
  async createCart(
    req: Request<
      createCartRequest["path"],
      createCartResponse,
      createCartRequest["body"],
      createCartRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cart = await this._cartsService.createCart({
        totalProductPrice: req.body.totalProductPrice,
        shippingFee: req.body.shippingFee,
        totalPaymentAmount: req.body.totalPaymentAmount,
        cartItem: req.body.cartItem || [],
      });

      res.send(cart);
    } catch (error) {
      next(error);
    }
  }

  /** 장바구니 조회 */
  async getCart(
    req: Request<
      getCartRequest["path"],
      getCartResponse,
      getCartRequest["body"],
      getCartRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    try {
      const cart = await this._cartsService.getCart();

      res.send(cart);
    } catch (error) {
      next(error);
    }
  }

  /** 장바구니 업데이트 */
  async updateCart(
    req: Request<
      updateCartRequest["path"],
      updateCartResponse,
      updateCartRequest["body"],
      updateCartRequest["params"]
    >,
    res: Response,
    next: NextFunction
  ) {
    const { cartId } = req.params;

    try {
      const updatedCart = await this._cartsService.updateCart(cartId, req.body);
      res.send(updatedCart);
    } catch (error) {
      next(error);
    }
  }
}
