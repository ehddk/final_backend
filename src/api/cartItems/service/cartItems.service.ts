import { CartItemRepository } from "@/api/cartItems/repository/cartItem.repository";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";
import { CartRepository } from "@/api/carts/repository/cart.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";
import { CartsServiceImpl } from "@/api/carts/service/carts.service";
import { UserRepository } from "@/api/users/repository/user/user.repository";

export class CartItemsServiceImpl implements CartItemsService {
  private readonly _cartItemRepository: CartItemRepository;
  private readonly _cartRepository: CartRepository;
  private readonly _cartsService: CartsServiceImpl;
  private readonly _userRepository: UserRepository;
  constructor(
    cartItemRepository: CartItemRepository,
    cartRepository: CartRepository,
    userRepository: UserRepository
  ) {
    this._cartItemRepository = cartItemRepository;
    this._cartRepository = cartRepository;
    this._userRepository = userRepository;
    this._cartsService = new CartsServiceImpl(cartRepository);
  }

  async createCartItem(
    cartId: string,
    cartItem: Omit<ICartItem, "id" | "cart">
  ): Promise<CartItemResponseDTO> {
    const cart = await this._cartRepository.findById(cartId);
    if (!cart) {
      throw new HttpException(404, "장바구니를 찾을 수 없습니다.");
    }

    const newCartItem: ICartItem = {
      id: "",
      cart,
      product: cartItem.product,
      productName: cartItem.productName,
      sales: cartItem.sales,
      /** 주문 수량 */
      quantity: cartItem.quantity,
      /** 주문 총 가격 */
      totalPrice: cartItem.totalPrice,
    };

    const savedCartItem = await this._cartItemRepository.save(newCartItem);

    const updatedCartItem = cart.cartItem
      ? cart.cartItem.concat(savedCartItem)
      : [savedCartItem];
    await this._cartRepository.update(cart.id, {
      cartItem: updatedCartItem,
    });
    return new CartItemResponseDTO(savedCartItem);
  }
  async getCartItems(): Promise<CartItemResponseDTO[]> {
    const cartItems = await this._cartItemRepository.findAll();
    const newList = await Promise.all(
      cartItems.map((cartItem) => new CartItemResponseDTO(cartItem))
    );

    return newList;
  }

  async getCartItemDetail(
    cartItemId: string
  ): Promise<CartItemResponseDTO | null> {
    const cartItem = await this._cartItemRepository.findById(cartItemId);

    if (!cartItem) {
      throw new HttpException(404, "주문 상품을 찾을 수 없습니다.");
    }

    return new CartItemResponseDTO(cartItem);
  }
  async updateCartItem(
    cartItemId: string,
    updatedCartItem: Omit<ICartItem, "id" | "product" | "user">
  ): Promise<void> {
    await this._cartItemRepository.update(cartItemId, updatedCartItem);
  }

  async deleteCartItem(cartItemId: string): Promise<void> {
    await this._cartItemRepository.delete(cartItemId);
  }
}
