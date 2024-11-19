import { UserRepository } from "@/api/users/repository/user/user.repository";
export declare class MongooseUserRepository implements UserRepository {
    save(user: Omit<IUser, "userId">): Promise<IUser>;
    findAll(): Promise<IUser[]>;
    findById(userId: string): Promise<IUser | null>;
    findByLoginId(loginId: string): Promise<IUser | null>;
    findByEmail(email: string): Promise<IUser | null>;
    update(userId: string, updateUserInfo: Partial<IUser>): Promise<void>;
    delete(userId: string): Promise<void>;
}
