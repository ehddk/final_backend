import { CartItemRepository } from "@/api/cartItems/repository/cartItem.repository";
import { CartItemsService } from "@/api/cartItems/service/cartItems.service.type";
import { CartRepository } from "@/api/carts/repository/cart.repository";
import { CartItemResponseDTO } from "@/api/cartItems/dto/cartItemResponse.dto";
import { UserRepository } from "@/api/users/repository/user/user.repository";
import { ProductRepository } from "@/api/products/repository/product.repository";
export declare class CartItemsServiceImpl implements CartItemsService {
    private readonly _cartItemRepository;
    private readonly _cartRepository;
    private readonly _productRepository;
    private readonly _userRepository;
    constructor(cartItemRepository: CartItemRepository, cartRepository: CartRepository, userRepository: UserRepository, productRepository: ProductRepository);
    createCartItem(userId: string, cartItem: Omit<ICartItem, "id">): Promise<CartItemResponseDTO>;
    getCartItems(): Promise<CartItemResponseDTO[]>;
    getCartItemDetail(cartItemId: string): Promise<CartItemResponseDTO | null>;
    updateCartItem(cartItemId: string, updatedCartItem: Omit<ICartItem, "id" | "product" | "user">): Promise<void>;
    deleteCartItem(cartItemId: string): Promise<void>;
}
