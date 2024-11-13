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
    userId: string,
    cartItem: Omit<ICartItem, "id">
  ): Promise<CartItemResponseDTO> {
    let cart = await this._cartRepository.findOneByUserId(userId);

    if (!cart) {
      const user = await this._userRepository.findById(userId);
      if (!user) {
        throw new HttpException(404, "사용자를 찾을 수 없습니다.");
      }

      cart = await this._cartsService.createCart({
        cartItem: [],
        totalProductPrice: 0, // 필요한 필드 추가
        shippingFee: 0, // 필요한 필드 추가
        totalPaymentAmount: 0, // 필요한 필드 추가
        user: user,
      });
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
    updatedCartItem: Omit<ICartItem, "id" | "product" | "user">
  ): Promise<void> {
    await this._cartItemRepository.update(cartItemId, updatedCartItem);
  }

  async deleteCartItem(cartItemId: string): Promise<void> {
    await this._cartItemRepository.delete(cartItemId);
  }
}
