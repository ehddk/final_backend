import { CartItemRepository } from "@/api/cartItems/repository/cartItem.repository";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";
import { CartRepository } from "@/api/carts/repository/cart.repository";
import HttpException from "@/api/common/exceptions/http.exception";
import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { ProductRepository } from "@/api/products/repository/product.repository";

export class CartItemsServiceImpl implements CartItemsService {
  private readonly _cartItemRepository: CartItemRepository;
  private readonly _cartRepository: CartRepository;
  private readonly _productRepository: ProductRepository;
  private readonly _userRepository: UserRepository;
  constructor(
    cartItemRepository: CartItemRepository,
    cartRepository: CartRepository,
    userRepository: UserRepository,
    productRepository: ProductRepository
  ) {
    this._cartItemRepository = cartItemRepository;
    this._cartRepository = cartRepository;
    this._userRepository = userRepository;
    this._productRepository = productRepository;
  }

  async createCartItem(
    userId: string,
    cartItem: Omit<ICartItem, "id">
  ): Promise<CartItemResponseDTO> {
    const cart = await this._cartRepository.findOneByUserId(userId);
    console.log("userId:", userId);
    console.log("cart:", cart);
    if (!cart) {
      throw new HttpException(404, "장바구니를 찾을 수 없습니다.");
    }
    console.log("cartItem:", cartItem);
    console.log("cartItem.product:", cartItem.product);
    const productId =
      typeof cartItem.product === "string"
        ? cartItem.product
        : cartItem.product?.id;
    if (!productId) {
      throw new HttpException(400, "상품 ID가 유효하지 않습니다.");
    }
    const product = await this._productRepository.findById(productId);
    console.log("product:", product);
    if (!product) {
      throw new HttpException(404, "해당 상품를 찾을 수 없습니다.");
    }

    const newCartItem: ICartItem = {
      id: "",
      ...cartItem,
      cartId: cart.id,
      product: product.id.toString(),
      productName: cartItem.productName,
      sales: cartItem.sales,
      quantity: cartItem.quantity,
      totalPrice: cartItem.totalPrice,
    };

    const savedCartItem = await this._cartItemRepository.save(
      cart.id,
      newCartItem
    );

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
