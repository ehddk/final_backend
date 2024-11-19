import { CartItemRepository } from "@/api/cartItems/repository/cartItem.repository";
export declare class MongooseCartItemRepository implements CartItemRepository {
    save(cartId: string, cartItem: Omit<ICartItem, "id">): Promise<ICartItem>;
    findAll(): Promise<ICartItem[]>;
    findById(id: string): Promise<ICartItem | null>;
    update(cartItemId: string, updateCartItemInfo: Partial<ICartItem>): Promise<ICartItem>;
    delete(cartItemId: string): Promise<void>;
}
