import { CartItemRepository } from "@/api/cartItems/repository/cartItem.repository";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";
import { CartRepository } from "@/api/carts/repository/cart.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";

export class CartItemsServiceImpl implements CartItemsService {
  private readonly _cartItemRepository: CartItemRepository;
  private readonly _cartRepository: CartRepository;
  constructor(
    cartItemRepository: CartItemRepository,
    cartRepository: CartRepository
  ) {
    this._cartItemRepository = cartItemRepository;
    this._cartRepository = cartRepository;
  }

  async createCartItem(
    cartId: string,
    cartItem: Omit<ICartItem, "id">
  ): Promise<CartItemResponseDTO> {
    const cart = await this._cartRepository.findById(cartId);

    if (!cart) {
      throw new HttpException(404, "회원정보를 찾을 수 없습니다.");
    }

    const newCartItem = await this._cartItemRepository.save({
      ...cartItem,
    });

    const newCartItems = cart.cartItem?.concat(newCartItem);

    await this._cartRepository.update(cart.id, {
      cartItem: newCartItems,
    });

    return new CartItemResponseDTO(newCartItem);
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
    updatedCartItem: Omit<ICartItem, "id" | "product">
  ): Promise<void> {
    await this._cartItemRepository.update(cartItemId, updatedCartItem);

    return;
  }
  async deleteCartItem(cartItemId: string): Promise<void> {
    await this._cartItemRepository.delete(cartItemId);
  }
}
