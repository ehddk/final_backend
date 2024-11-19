import { CartRepository } from "@/api/carts/repository/cart.repository";
export declare class MongooseCartRepository implements CartRepository {
    /** 장바구니 생성 */
    save(cart: Omit<ICart, "id">): Promise<ICart>;
    findAll(): Promise<ICart[]>;
    /** ID로 장바구니 조회 */
    findById(id: string): Promise<ICart | null>;
    /** userId로 장바구니 조회 */
    findOneByUserId(userId: string): Promise<ICart | null>;
    /** 장바구니 업데이트 */
    update(cartId: string, updateCartInfo: Partial<ICart>): Promise<void>;
    delete(cartId: string): Promise<void>;
}
