import { CartResponseDTO } from "@/api/carts/dto/cartResponse.dto";
import { CartRepository } from "@/api/carts/repository/cart.repository";
import { CartsService } from "@/api/carts/service/carts.service.type";
export declare class CartsServiceImpl implements CartsService {
    private readonly _cartRepository;
    constructor(_cartRepository: CartRepository);
    /** 장바구니 생성 */
    createCart(params: Omit<ICart, "id"> & {
        userId: string;
        cartItem?: ICartItem[];
    }): Promise<CartResponseDTO>;
    /** 장바구니 조회 */
    getCart(userId: string): Promise<CartResponseDTO>;
    /** 장바구니 업데이트 */
    updateCart(cartId: string, updatedCart: Partial<ICart>): Promise<void>;
    deleteCart(cartId: string): Promise<void>;
}
